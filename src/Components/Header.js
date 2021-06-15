import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Header(){
    const handleClick=(e)=>{
        window.localStorage.removeItem('logged')
        window.location='/'
    }
    return(
        <div >

            <Navbar bg="primary" variant="dark">
                    <Navbar.Brand style={{marginLeft:'10px',fontFamily:'sans-serif'}} >ATM</Navbar.Brand>
                    <Nav className="mr-auto">
                            <Nav.Link  href="/profile" >Profile</Nav.Link>
                            <Nav.Link  href="/transaction" >Transaction</Nav.Link>

                    </Nav>

                    <Button variant="light" onClick={handleClick}>Logout</Button>

                </Navbar>

        </div>
    );
}
export default Header;
