import React, {Component} from "react";
import Styles from "../BlockExplorer_Result/style.css";
import StylesTX from "./index.css";
import {TRANSACTION_TYPE} from "../../actions/ApiActions";

export default class BlockExplorerResultTransaction extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.state.searchResult && this.props.state.searchResult.type === TRANSACTION_TYPE ?
                <div className={Styles.BlockExplorerResult}>
                    <div className={Styles.BlockExplorer__Block}>
                        <div className={Styles.BlockExplorer__Header}>Status:</div>
                        <div className={Styles.BlockExplorer__Content}>
                            {
                                typeof this.props.state.searchResult.data.height === "undefined" ?
                                    <span className={StylesTX.StylesTX__Unconfirmed}>Unconfirmed</span> :
                                    <span className={StylesTX.StylesTX__Confirmed}>Confirmed</span>
                            }
                        </div>
                    </div>
                    <div className={Styles.BlockExplorer__Block}>
                        <div className={Styles.BlockExplorer__Header}>Confirmations:</div>
                        <div
                            className={Styles.BlockExplorer__Content}>{this.props.state.searchResult.data.confirmations}</div>
                    </div>
                    <div className={Styles.BlockExplorer__Block}>
                        <div className={Styles.BlockExplorer__Header}>Total input:</div>
                        <div
                            className={Styles.BlockExplorer__Content}>{this.props.state.searchResult.data.inputs_value}</div>
                    </div>
                    <div className={Styles.BlockExplorer__Block}>
                        <div className={Styles.BlockExplorer__Header}>Total output:</div>
                        <div
                            className={Styles.BlockExplorer__Content}>{this.props.state.searchResult.data.outputs_value}</div>
                    </div>
                    <div className={Styles.BlockExplorer__Block}>
                        <div className={Styles.BlockExplorer__Header}>Total fees:</div>
                        <div
                            className={Styles.BlockExplorer__Content}>{this.props.state.searchResult.data.fee_value}</div>
                    </div>
                    {
                        typeof this.props.state.searchResult.data.height !== "undefined" ?
                            <div className={Styles.BlockExplorer__Block}>
                                <div className={Styles.BlockExplorer__Header}>Included in block:</div>
                                <div
                                    className={Styles.BlockExplorer__Content}>{this.props.state.searchResult.data.height}</div>
                            </div> : ""
                    }

                </div> :
                <div></div>
        );
    }
}