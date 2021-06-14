import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from 'page';
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Transaction from "./Components/Transaction";



function startHomeView(){
    ReactDOM.render(<Header/>,document.getElementById('header'));

}
function startProfileView(){
    ReactDOM.render(<Header/>,document.getElementById('header'));
    ReactDOM.render(<Profile/>,document.getElementById('root'));
}

function startTransactionView(){

    ReactDOM.render(<Header/>,document.getElementById('header'));
    ReactDOM.render(<Transaction />,document.getElementById('root'));
}
Page('/', startHomeView)
Page('/profile',startProfileView)
Page('/transaction',startTransactionView)
Page.start()


reportWebVitals();
