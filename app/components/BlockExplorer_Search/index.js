import React, {Component} from "react";
import Styles from "./style.css";
import {STORE} from "../../stores/store";
import {getAddressInfo, getTransactionInfo} from "../../actions/ApiActions";
import {seLoading} from "../../actions/BlockExplorerActions";
import validate from 'bitcoin-address-validation';

export default class BlockExplorerSearch extends Component {
    constructor(props) {
        super(props);
        this.input = "a91173e9e3a9d77b31bcd513220fa020aec3db1129eaa3c575ae1487c17875e7"

    }

    search() {
        if (this.input.value != "") {
            STORE.dispatch(seLoading(true));
            this.setState({
                searchResult: null
            });
            if (validate(this.input.value)) {
                // If this.input.value is address
                STORE.dispatch(getAddressInfo(this.input.value));
            } else {
                // try search transaction
                STORE.dispatch(getTransactionInfo(this.input.value));
            }
        }
    }

    render() {
        return (
            <div className={Styles.BlockExplorerSearch} style={{
                "margin": "100px auto 0"
            }}>
                <input ref={(c) => this.input = c} defaultValue={this.input}
                       placeholder={"Enter address or transaction"} className={Styles.BlockExplorerSearch__input}
                       type={"text"} autoFocus={true} onKeyPress={(e) => {
                    e.key === "Enter" ? this.search() : ""
                }}/>
                <div className={Styles.BlockExplorerSearch__button} onClick={() => {
                    this.search();
                }}>Search
                </div>
            </div>
        )
    }
}