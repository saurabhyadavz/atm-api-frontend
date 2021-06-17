import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Page from 'page';
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Transaction from "./Components/Transaction";
import Home from "./Components/Home";
import Transfer from './Components/Transfer';
import TransactionDetails from "./Components/TransactionDetails";
import Balance from "./Components/Balance";




function startHomeView(){

    ReactDOM.render(<Home/>,document.getElementById('header'));

}
function startProfileView(){

    if(window.localStorage.getItem('logged')!=='true'){

        window.location='/'
    }
    ReactDOM.render(<Header/>,document.getElementById('header'));
    ReactDOM.render(<Profile/>,document.getElementById('root'));
}

function startTransactionView(){
    if(window.localStorage.getItem('logged')!=='true'){
        window.location='/'
    }
    ReactDOM.render(<Header/>,document.getElementById('header'));
    ReactDOM.render(<Transaction />,document.getElementById('root'));
}

function startTransferView(){
    ReactDOM.render(<Header/>,document.getElementById('header'));
    ReactDOM.render(<Transfer />,document.getElementById('root'));
}
function startDetailsView(){
    ReactDOM.render(<Header/>,document.getElementById('header'));
    ReactDOM.render(<TransactionDetails/>,document.getElementById('root'));
}
function startBalanceView(){
    ReactDOM.render(<Header/>,document.getElementById('header'));
    ReactDOM.render(<Balance/>,document.getElementById('root'));
}

Page('/', startHomeView)
Page('/profile',startProfileView)
Page('/checkBalance',startBalanceView)
Page('/transaction',startTransactionView)
Page('/transfer',startTransferView)
Page('/transactionDetails',startDetailsView)
Page.start()


reportWebVitals();
