import React, { Component } from 'react';
import Styles from  "./style.css";
import TurtleImage from "./assets/img/turtle-shell.svg";

export default class BlockExplorerLogo extends Component {

    render() {
        return (
            <div className={Styles.BlockExplorerLogo}>
                <img src={TurtleImage} className={Styles.BlockExplorerLogo__image}/>
                <div className={Styles.BlockExplorerLogo__text}>
                    <span className={Styles.BlockExplorerLogo__textYellow}>Tortoise</span>
                    <span className={Styles.BlockExplorerLogo__textTurquoise}>Btc</span>
                </div>

                <div className={Styles.BlockExplorerLogo__slogan}>
                    Compact bitcoin block explorer
                </div>

            </div>
        )
    }
}