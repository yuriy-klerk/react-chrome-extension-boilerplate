import React, {Component} from 'react';
import BlockExplorer from "../components/BlockExplorer";
import style from "./app.css";

class App extends Component {

    render() {
        return (
            <div className={style.app}>
                <BlockExplorer/>
            </div>
        )
    }

}

export default App;