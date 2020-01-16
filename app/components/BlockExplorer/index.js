import React, {Component} from 'react';
import {STORE} from "../../stores/store";
import {setSearchField} from "../../actions/BlockExplorerActions";
import {getAddressInfo, getTransactionInfo, GET_ADDRESS_INFO, GET_TRANSACTION_INFO} from "../../actions/ApiActions";
import BlockExplorerLogo from "../BlockExplorer_Logo";
import Styles from "./style.css";

export default class BlockExplorer extends Component {

    constructor(props) {
        super(props);
        STORE.searchResult.sideEffectSubscribe(GET_ADDRESS_INFO, (data) => {
            console.log(data);
        });
        STORE.searchResult.sideEffectSubscribe(GET_TRANSACTION_INFO, (data) => {
            console.log(data);
        });
    }

    search() {
        STORE.dispatch();
        //STORE.dispatch(getTransactionInfo(STORE.searchField.getValue()));
    }

    render() {
        return (
            <div className={Styles.BlockExplorer}>
                <BlockExplorerLogo/>
                <input value={"16K4VtKNxcaNkvNvDYiiWjyn1n49irJ8Ep"} type={"text"} onChange={e => {
                    STORE.dispatch(setSearchField(e.target.value))
                }}/>
                <input value={"Search"} type={"button"} onClick={e => {
                    this.search()
                }}/>
            </div>
        )
    }

}
