import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css"

const element = document.getElementById('root')
const root = ReactDOM.createRoot(element)

root.render(
    <Provider store={store} >
        <App />
    </Provider>
)