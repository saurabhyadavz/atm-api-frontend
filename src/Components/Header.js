import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem

} from 'reactstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Profile from "./Profile";
import Transaction from "./Transaction";

function Header(){
    return(
        <div >

                <Navbar color="light" light expand="md" style={{textContent:'100px'}}>
                    <NavbarBrand style={{color:'blue', paddingLeft:'30px',fontWeight:"bold",fontSize:"25px"}}>ATM </NavbarBrand>

                    <Nav className="mr-auto"  navbar style={{fontSize:"20px"}}>
                        <NavItem>
                            <NavLink  href="/profile" >Profile</NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Transaction
                            </DropdownToggle>
                            <DropdownMenu right >
                                <DropdownItem href="/deposit">
                                    Deposit
                                </DropdownItem >
                                <DropdownItem href="/withdraw">
                                    Withdraw
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>


                    </Nav>
                </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/withdraw">
                        <Transaction />
                    </Route>
                    <Route exact path="/deposit">
                        <Transaction />
                    </Route>
                </Switch>

            </Router>

        </div>
    );
}
export default Header;
