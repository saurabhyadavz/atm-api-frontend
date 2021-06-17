import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'antd/dist/antd.css';
import {  Button } from "antd";

function Header(){
    const handleClick=(e)=>{
        window.localStorage.clear()
        window.location='/'
    }
    return(
        <div >

            <Navbar bg="primary" variant="dark">
                    <Navbar.Brand style={{marginLeft:'10px',fontFamily:'sans-serif'}} >ATM</Navbar.Brand>
                    <Nav className="mr-auto">
                            <Nav.Link  href="/profile" >Profile</Nav.Link>
                             <Nav.Link  href="/checkBalance" >Check Balance</Nav.Link>
                            <Nav.Link  href="/transaction" >Transaction</Nav.Link>
                            <Nav.Link  href="/transfer" >Money Transfer</Nav.Link>
                             <Nav.Link  href="/transactionDetails" >Transaction Details</Nav.Link>

                    </Nav>

                    <Button  danger onClick={handleClick}>Logout</Button>

                </Navbar>

        </div>
    );
}
export default Header;
