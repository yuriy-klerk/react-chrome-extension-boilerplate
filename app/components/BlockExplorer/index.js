import React, {Component} from 'react';
import {STORE} from "../../stores/store";
import {useStore} from "rxsm";
import {setSearchField} from "../../actions/BlockExplorerActions";
import {getAddressInfo, getTransactionInfo, GET_ADDRESS_INFO, GET_TRANSACTION_INFO} from "../../actions/ApiActions";
import BlockExplorerLogo from "../BlockExplorer_Logo";
import BlockExplorerSearch from "../BlockExplorer_Search";
import BlockExplorerWidget from "../BlockExplorer_Widget";
import BlockExplorerResult from "../BlockExplorer_Result";
import Styles from "./style.css";
import Spinner from "../Spinner";

export default class BlockExplorer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    componentDidMount() {
        STORE.isLoading.subscribe((value) => {
            this.setState({
                isLoading: value
            });
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
                <BlockExplorerSearch/>
                <BlockExplorerResult/>
                <BlockExplorerWidget/>
                <Spinner isLoading={this.state.isLoading}/>
            </div>
        )
    }

}
