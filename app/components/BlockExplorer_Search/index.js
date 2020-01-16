import React, {Component} from "react";
import Styles from "./style.css";

export default class BlockExplorerSearch extends Component {

    render() {
        return (
            <div className={Styles.BlockExplorerSearch}>
                <input className={Styles.BlockExplorerSearch__input} type={"text"}/>
                <div className={Styles.BlockExplorerSearch__button} type={"button"} value={"Search"}/>
            </div>
        )
    }
}