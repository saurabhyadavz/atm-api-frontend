
import React from "react";
import '../css/Home.css';

import SignIn from "./SignIn";
import Profile from "./Profile";
import Header from "./Header";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            localStorage:false
        }
    }


    render() {
        let home=<SignIn/>
        if(window.localStorage.getItem('logged')==='true'){
            console.log(window.localStorage.getItem('logged'))
            home=<div>
                <Header/>
                <Profile/>
            </div>
        }
        return (
            <div>
                {home}
            </div>

            );
        }
    }

    export default Home