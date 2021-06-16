import React from "react";
import '../css/Home.css';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import  {loginUser} from "./Utils";
import {toast, ToastContainer} from "react-toastify";



class SignIn extends React.Component {

    constructor() {
        super();
        this.state={
            accountNumber:'',
            pin:'',

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }

    handleChange(change){
        this.setState(change)
    }
   async handleClick(e){

       loginUser(this.state.accountNumber).then((data) =>{
           window.localStorage.setItem('logged','true')
           window.localStorage.setItem('accountNumber',this.state.accountNumber)
           window.location='/profile'
       }).catch((error) =>{
           toast.error("Wrong ID/PIN")
           console.log(error)
       });




    }

    render()
    {

        return (
            <div>
                <ToastContainer/>
                <div className="Home">

                    <h2>Sign In</h2>
                    <Form className="form">
                        <FormGroup>
                            <Label for="exampleEmail">Account Number</Label>
                            <Input
                                type="number"
                                placeholder="Enter your 12 digit account number"
                                value={this.state.accountNumber}
                                onChange={(e) => this.handleChange({ accountNumber: e.target.value })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Pin</Label>
                            <Input
                                type="password"
                                placeholder="Enter your 4 digit pin"
                                value={this.state.pin}
                                onChange={(e) => this.handleChange({ pin: e.target.value })}
                            />
                        </FormGroup>
                        <Button onClick={this.handleClick}>Login</Button>
                    </Form>
                </div>
            </div>


        );
    }
}

export default SignIn;