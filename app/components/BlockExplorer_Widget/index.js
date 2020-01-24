import React, {Component} from "react";
import Styles from "./index.css";

export default class BlockExplorerWidget extends Component {

    render() {
        return (
            <div className={Styles.BlockExplorerWidget}>
                <div className={Styles.BlockExplorerWidget__InfoBlock}>
                    <div className={Styles.BlockExplorerWidget__InfoHeader}>Price 24h</div>
                    <div className={Styles.BlockExplorerWidget__InfoContent}>$8661</div>
                </div>
                <div className={Styles.BlockExplorerWidget__InfoBlock}>
                    <div className={Styles.BlockExplorerWidget__InfoHeader}>Vol. 24h</div>
                    <div className={Styles.BlockExplorerWidget__InfoContent}>B1.46</div>
                </div>
                <div className={Styles.BlockExplorerWidget__InfoBlock}>
                    <div className={Styles.BlockExplorerWidget__InfoHeader}>TH/s:</div>
                    <div className={Styles.BlockExplorerWidget__InfoContent}>890.54</div>
                </div>
                <div className={Styles.BlockExplorerWidget__InfoBlock}>
                    <div className={Styles.BlockExplorerWidget__InfoHeader}>Height:</div>
                    <div className={Styles.BlockExplorerWidget__InfoContent}>612234</div>
                </div>
            </div>
        )
    }

}