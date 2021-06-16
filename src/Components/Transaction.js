import React from "react";

import {toast, ToastContainer} from "react-toastify";
import {transactionApi} from "./Utils";
import 'react-toastify/dist/ReactToastify.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Button, TextField} from "@material-ui/core";


class Transaction extends React.Component{
    constructor() {
        super();
        this.state={
            accountNumber:window.localStorage.getItem('accountNumber'),
            balance:'',
            mode:'Withdraw'
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }

    handleChange(change){
        this.setState(change)
    }

   async handleClick(e){

        const mode = (this.state.mode === 'Deposit' ? 'deposit' : 'withdraw');
        try {
            await transactionApi(this.state.accountNumber,this.state.balance,mode);
            toast.success("Transaction successful");
           this.setState({balace:''})
        } catch {
            toast.error("Transaction Failed");
        }


    }



    render() {


        return(
            <div>
                <ToastContainer/>
                <Container style={{paddingTop:40}}>

                    <Grid container justify="center" >
                        <Grid item >
                            <Paper style={{height:320,width:500,paddingTop:'30px',background:'#f8f8f8'}}  >
                                <text style={{fontSize:"30px",margin:'80px',fontFamily:'Monospace',color:'#090809'}}>Money Transaction</text>
                                <br/>
                                <RadioGroup style={{paddingLeft:'100px', paddingTop:'10px'}} aria-label="mode"  value={this.state.mode}
                                            onChange={(e) => this.handleChange({ mode: e.target.value })}>
                                    <FormControlLabel value="Withdraw" control={<Radio />} label="Withdraw" />
                                    <FormControlLabel value="Deposit" control={<Radio />} label="Deposit" />

                                </RadioGroup>
                                <TextField id="outlined-basic" variant="outlined" style={{marginTop:"20px",marginLeft:'90px',paddingLeft:'20px',width: "60%"}} type="text" value={this.state.balance}
                                           onChange={(e) => this.handleChange({ balance: e.target.value })}/>

                                <br/>
                                <Button  style={{marginTop:"13px",marginLeft:'160px',width:"30%"}} variant="contained" onClick={this.handleClick}>Submit</Button>
                            </Paper>

                        </Grid>

                    </Grid>

                </Container>
            </div>




        );
    }
}
export default Transaction;
