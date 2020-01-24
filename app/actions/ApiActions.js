import React from "react";
import ExplorerConfig from "../config/explorerConfig.json"
import {formatFee, formatPriceBTC} from "../services/priceFormatter";

export const GET_ADDRESS_INFO = "GET_ADDRESS_INFO";
export const GET_TRANSACTION_INFO = "GET_TRANSACTION_INFO";
export const GET_BLOCK_CHAIN_HEIGHT = "GET_BLOCK_CHAIN_HEIGHT";

export const GET_PRICE_24H = "GET_PRICE_24H";
export const GET_VOL_24H = "GET_VOL_24H";
export const GET_HASH_RATE = "GET_HASH_RATE";
export const GET_HEIGHT = "GET_HEIGHT";

export const ADDRESS_TYPE = "ADDRESS_TYPE";
export const TRANSACTION_TYPE = "TRANSACTION_TYPE";

export const getAddressInfo = (addressValue) => ({
    name: GET_ADDRESS_INFO,
    func: async () => {
        let result = null;
        try {
            let response = await fetch(`${ExplorerConfig.API_URL}/multiaddr?active=${addressValue}`);
            result = await response.json();
        } catch (e) {

        }
        return result ? {
            searchResult: {
                type: ADDRESS_TYPE,
                data: result
            }
        } : {
            searchResult: null
        }
    }
});

export const getTransactionInfo = (transactionValue) => ({
    name: GET_TRANSACTION_INFO,
    func: async () => {
        let result = null;
        try {
            let response = await fetch(`${ExplorerConfig.API_URL}/rawtx/${transactionValue}?limit=1&cors=true`);
            // Calc confirmations
            let confirmations = 0, height = 0;
            result = await response.json();
            let latestBlock = parseInt(await fetchBlockChainHeight(), 10);
            if (typeof result.block_height != "undefined") {
                confirmations = (latestBlock - result.block_height) + 1;
                height = result.block_height;
            }
            result['confirmations'] = confirmations;
            result['height'] = height;
            // Calc inputs
            let inputs_value = 0;
            if (typeof result.inputs !== "undefined" && result.inputs.length > 0) {
                for (let i = 0; i < result.inputs.length; i++) {
                    inputs_value += result.inputs[i].prev_out.value
                }
            }
            result['inputs_value'] = formatPriceBTC(inputs_value);
            // Calc out
            let output_value = 0;
            if (typeof result.out !== "undefined" && result.out.length > 0) {
                for (let i = 0; i < result.out.length; i++) {
                    output_value += result.out[i].value
                }
            }
            result['outputs_value'] = formatPriceBTC(output_value);

            // Calc fee
            let fee_value = 0;
            if (inputs_value > 0 && output_value > 0) {
                fee_value = inputs_value - output_value;
            }
            result['fee_value'] = formatPriceBTC(fee_value);
        } catch (e) {
            console.log(e)
        }
        return result ? {
            searchResult: {
                type: TRANSACTION_TYPE,
                data: result
            }
        } : {
            searchResult: null
        }
    }
});

export const getBlockChainHeight = () => ({
    name: GET_BLOCK_CHAIN_HEIGHT,
    func: async () => {
        return {
            blockChainHeight: await fetchBlockChainHeight()
        };
    }
});

export const getPrice24H = () => ({
    name: GET_PRICE_24H,
    func: async () => {
        let response = await fetch(`${ExplorerConfig.API_URL}/q/24hrprice`);
        let data = await response.text();
        return {
            price24H: data
        };
    }
});

export const getVol24H = () => ({
    name: GET_VOL_24H,
    func: async () => {
        let response = await fetch(`${ExplorerConfig.API_URL}/q/marketcap`);
        let data = await response.text();
        return data;
    }
});

export const getHashRate = () => ({
    name: GET_HASH_RATE,
    func: async () => {
        let response = await fetch(`${ExplorerConfig.API_URL}/q/hashrate`);
        let data = await response.text();
        return data;
    }
});

const fetchBlockChainHeight = async () => {
    let response = await fetch(`${ExplorerConfig.API_URL}/q/getblockcount`);
    let data = await response.text();
    return data;
}


