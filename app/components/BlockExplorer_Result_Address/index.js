import React, {Component} from "react";
import Styles from "../BlockExplorer_Result/style.css";
import {formatPriceBTC} from "../../services/priceFormatter";
import {ADDRESS_TYPE} from "../../actions/ApiActions";

export default class BlockExplorerResultAddress extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            this.props.state.searchResult && this.props.state.searchResult.type === ADDRESS_TYPE ?
                <div className={Styles.BlockExplorerResult}>
                    <div className={Styles.BlockExplorer__Block}>
                        <div className={Styles.BlockExplorer__Header}>Total received:</div>
                        <div
                            className={Styles.BlockExplorer__Content}>{formatPriceBTC(this.props.state.searchResult.data.wallet.total_received)} BTC
                        </div>
                    </div>
                    <div className={Styles.BlockExplorer__Block}>
                        <div className={Styles.BlockExplorer__Header}>Total sent:</div>
                        <div
                            className={Styles.BlockExplorer__Content}>{formatPriceBTC(this.props.state.searchResult.data.wallet.total_sent)} BTC
                        </div>
                    </div>
                    <div className={Styles.BlockExplorer__Block}>
                        <div className={Styles.BlockExplorer__Header}>Balance:</div>
                        <div
                            className={Styles.BlockExplorer__Content}>{formatPriceBTC(this.props.state.searchResult.data.wallet.final_balance)} BTC
                        </div>
                    </div>
                    <div className={Styles.BlockExplorer__Block}>
                        <div className={Styles.BlockExplorer__Header}>Transactions:</div>
                        <div
                            className={Styles.BlockExplorer__Content}>{this.props.state.searchResult.data.wallet.n_tx}</div>
                    </div>
                </div> : <div></div>
        )
    }
}