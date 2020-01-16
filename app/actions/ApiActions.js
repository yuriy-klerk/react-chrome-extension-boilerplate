import React from "react";
import ExplorerConfig from "../config/explorerConfig.json"

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
        let response = await fetch(`${ExplorerConfig.API_URL}/multiaddr?active=${addressValue}`);
        let data = await response.json();
        return {
            searchResult: {
                type: ADDRESS_TYPE,
                data: data.addresses[0]
            }
        };
    }
});

export const getTransactionInfo = (transactionValue) => ({
    name: GET_TRANSACTION_INFO,
    func: async () => {
        let response = await fetch(`${ExplorerConfig.API_URL}/rawtx/${transactionValue}?limit=1&cors=true`);
        let data = await response.json(), confirmations = 0, latestBlock = parseInt(await fetchBlockChainHeight(), 10);
        if (typeof data.block_height != "undefined") {
            alert(latestBlock, data.block_height)
            confirmations = (latestBlock - data.block_height) + 1;
        }
        data['confirmations'] = confirmations;
        return {
            searchResult: {
                type: TRANSACTION_TYPE,
                data: data
            }
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


