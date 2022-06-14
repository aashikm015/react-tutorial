import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import {App,Appy} from "./index.jsx"
import MyAppDeff from "./index.jsx"

ReactDOM.render(<App  title="App"/>,document.getElementById('app'))


ReactDOM.render(<Appy title="Appy" />,document.getElementById('appy'))


ReactDOM.render(<MyAppDeff title="Mydeff"/>,document.getElementById('deff'))

