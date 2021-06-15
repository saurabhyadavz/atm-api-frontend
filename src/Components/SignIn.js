
import React from "react";
import '../css/Home.css';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

class SignIn extends React.Component {

    constructor() {
        super();
        this.state={
            email:'',
            password:'',

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }

    handleChange(change){
        this.setState(change)
    }
    handleClick(e){

        window.localStorage.setItem('logged','true');
        console.log(window.localStorage.getItem('logged'))

        window.location='/profile'


    }

    render() {

        return (
            <div className="Home">

                <h2>Sign In</h2>
                <Form className="form">
                    <FormGroup>
                        <Label for="exampleEmail">Username</Label>
                        <Input
                            type="email"
                            placeholder="example@example.com"
                            value={this.state.email}
                            onChange={(e) => this.handleChange({ email: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            placeholder="........"
                            value={this.state.password}
                            onChange={(e) => this.handleChange({ password: e.target.value })}
                        />
                    </FormGroup>
                    <Button onClick={this.handleClick}>Login</Button>
                </Form>
            </div>

        );
    }
}

export default SignIn;