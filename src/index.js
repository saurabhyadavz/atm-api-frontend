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

Page('/', startHomeView)
Page('/profile',startProfileView)
Page('/transaction',startTransactionView)
Page.start()


reportWebVitals();
