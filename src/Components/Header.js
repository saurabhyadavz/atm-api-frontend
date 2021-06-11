import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink

} from 'reactstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Withdraw from "./Withdraw";
import Deposit from "./Deposit";


import Profile from "./Profile";

function Header(){
    return(
        <div >

                <Navbar color="light" light expand="md" style={{textContent:'100px'}}>
                    <NavbarBrand style={{color:'blue', paddingLeft:'30px'}}>ATM </NavbarBrand>

                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink  href="/profile">Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/withdraw">Withdraw</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  href="/deposit">Deposit</NavLink>
                        </NavItem>


                    </Nav>
                </Navbar>
            <Router>
                <Switch>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/withdraw">
                        <Withdraw />
                    </Route>
                    <Route exact path="/deposit">
                        <Deposit />
                    </Route>


                </Switch>

            </Router>

        </div>
    );
}
export default Header;
