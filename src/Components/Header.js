import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink

} from 'reactstrap';


function Header(){
    return(
        <div >

                <Navbar color="light" light expand="md" style={{textContent:'100px'}}>
                    <NavbarBrand style={{marginLeft:'10px',fontFamily:'sans-serif'}} href="/">ATM</NavbarBrand>

                    <Nav className="mr-auto"  navbar style={{fontSize:"20px"}}>
                        <NavItem>
                            <NavLink  href="/profile" >Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  href="/transaction" >Transaction</NavLink>
                        </NavItem>

                    </Nav>
                </Navbar>

        </div>
    );
}
export default Header;
