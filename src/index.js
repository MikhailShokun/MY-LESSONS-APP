import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    );


//todo пример регистрации и логинизации(email + password) по ссылке:
// https://www.youtube.com/watch?v=9bXhf_TELP4&list=PLpPqplz6dKxUfvM22GXRvYA4s-mvJE0XF&index=3&t=437s