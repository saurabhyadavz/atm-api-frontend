import React from 'react'
import {toast, ToastContainer} from "react-toastify";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {transferApi} from "./Utils";


class Transfer extends React.Component{
    constructor() {
        super();
        this.state={
            accountNumber:'',
            amount:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }

    handleChange(change){
        this.setState(change)
    }

    handleClick(){
        transferApi(this.state.accountNumber,this.state.amount).then((data) =>{
            toast.success("Transfer Successful")
            console.log(data)
        }).catch((error) =>{
            toast.error("Transfer Failed")
            console.log(error)
        });
    }

    render() {

        return(
            <div>
                <ToastContainer/>
                <Container style={{paddingTop:30}}>
                    <Grid container justify="center" >
                        <Grid item >
                            <Paper style={{height:300,width:500,paddingTop:'30px',background:'#f8f8f8',fontSize:'24px'}}  >
                                <Form style={{ margin:'auto',
                                    width: '70%',
                                    padding: '5px'}}>
                                    <Form.Group >
                                        <Form.Label>Account Number</Form.Label>

                                        <Form.Control type="text" placeholder="Enter payee Account Number"
                                                      value={this.state.accountNumber} onChange={(e) => this.handleChange({ accountNumber: e.target.value })}/>
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Amount</Form.Label>

                                        <Form.Control type="text" placeholder="Enter amount"
                                                      value={this.state.amount}
                                                      onChange={(e) => this.handleChange({ amount: e.target.value })}/>
                                    </Form.Group>
                                    <Button variant="primary" style={{marginTop:'10px',marginLeft:'80px',width: '40%',fontSize:'20px'}} onClick={this.handleClick}>Transfer</Button>
                                </Form>
                            </Paper>
                        </Grid>

                    </Grid>

                </Container>
            </div>

        )
    }
}

export default Transfer;