import React, {Component} from "react";
import LoaderGIF from "./assets/loader.svg";
import Styles from "./style.css";

export default class Spinner extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.isLoading === true ?
                <div className={Styles.Spinner}>
                    <img className={Styles.Spinner__Image} src={LoaderGIF}/>
                </div> : <div></div>
        )
    }

}