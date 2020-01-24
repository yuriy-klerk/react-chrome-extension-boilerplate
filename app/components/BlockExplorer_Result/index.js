import React, {Component} from "react";
import {STORE} from "../../stores/store";
import Styles from "./style.css";
import {GET_ADDRESS_INFO, GET_TRANSACTION_INFO} from "../../actions/ApiActions";
import {seLoading} from "../../actions/BlockExplorerActions";
import BlockExplorerResultAddress from "../BlockExplorer_Result_Address";
import BlockExplorerResultTransaction from "../BlockExplorer_Result_Transaction";
import {TRANSACTION_TYPE, ADDRESS_TYPE} from "../../actions/ApiActions";

export default class BlockExplorerResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchResult: null
        }
    }

    componentDidMount() {
        STORE.searchResult.sideEffectSubscribe(GET_ADDRESS_INFO, (data) => {
            STORE.dispatch(seLoading(false));
            if (typeof data === 'object') {
                this.setState({
                    searchResult: data
                });
            }
        });
        STORE.searchResult.sideEffectSubscribe(GET_TRANSACTION_INFO, (data) => {
            STORE.dispatch(seLoading(false));
            if (typeof data === 'object') {
                this.setState({
                    searchResult: data
                });
            }
        });
    }

    render() {
        return (
            this.state.searchResult ?
                this.state.searchResult.type === ADDRESS_TYPE ?
                    <BlockExplorerResultAddress state={this.state}/> :
                    <BlockExplorerResultTransaction state={this.state}/> :
                <div></div>
        )
    }
}