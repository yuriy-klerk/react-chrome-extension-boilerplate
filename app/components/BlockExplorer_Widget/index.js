import React, {Component} from "react";
import {STORE} from "../../stores/store";
import {getPrice24H, GET_PRICE_24H, getVol24H, GET_VOL_24H, getHashRate, GET_HASH_RATE, getBlockChainHeight, GET_BLOCK_CHAIN_HEIGHT} from "../../actions/ApiActions";
import {formatVolBTC, formatHashRate} from "../../services/priceFormatter";
import Styles from "./index.css";

export default class BlockExplorerWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            price24H: 0,
            vol24H: 0,
            hashRate : "",
            blockChainHeight: 0
        }
    }

    componentDidMount() {
        // Price
        STORE.price24H.sideEffectSubscribe(GET_PRICE_24H, (value) => {
            this.setState({
                price24H: value
            })
        });
        STORE.dispatch(getPrice24H());
        // Volume
        STORE.vol24H.sideEffectSubscribe(GET_VOL_24H, (value) => {
            this.setState({
                vol24H: formatVolBTC(value)
            })
        });
        STORE.hashRate.sideEffectSubscribe(GET_VOL_24H, (value) => {
            this.setState({
                vol24H: formatVolBTC(value)
            })
        });
        STORE.hashRate.sideEffectSubscribe(GET_HASH_RATE, (value) => {
            this.setState({
                hashRate: formatHashRate(value)
            })
        });
        STORE.blockChainHeight.sideEffectSubscribe(GET_BLOCK_CHAIN_HEIGHT, (value) => {
            this.setState({
                blockChainHeight: value
            })
        });
        STORE.dispatch(getPrice24H());
        STORE.dispatch(getVol24H());
        STORE.dispatch(getHashRate());
        STORE.dispatch(getBlockChainHeight());
    }

    render() {
        return (
            <div className={Styles.BlockExplorerWidget}>
                <div className={Styles.BlockExplorerWidget__InfoBlock}>
                    <div className={Styles.BlockExplorerWidget__InfoHeader}>Price 24h</div>
                    <div className={Styles.BlockExplorerWidget__InfoContent}>${this.state.price24H}</div>
                </div>
                <div className={Styles.BlockExplorerWidget__InfoBlock}>
                    <div className={Styles.BlockExplorerWidget__InfoHeader}>Vol. 24h</div>
                    <div className={Styles.BlockExplorerWidget__InfoContent}>${this.state.vol24H}B</div>
                </div>
                <div className={Styles.BlockExplorerWidget__InfoBlock}>
                    <div className={Styles.BlockExplorerWidget__InfoHeader}>TH/s:</div>
                    <div className={Styles.BlockExplorerWidget__InfoContent}>{this.state.hashRate}</div>
                </div>
                <div className={Styles.BlockExplorerWidget__InfoBlock}>
                    <div className={Styles.BlockExplorerWidget__InfoHeader}>Height:</div>
                    <div className={Styles.BlockExplorerWidget__InfoContent}>{this.state.blockChainHeight}</div>
                </div>
            </div>

        )
    }

}