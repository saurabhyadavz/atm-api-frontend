import React from "react"
import {fetchUserDetailsApi} from "./Utils.js";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

class Profile extends React.Component{
    constructor() {
        super();
        this.state={
            accountNumber:window.localStorage.getItem('accountNumber'),
            balance:'',

        }

    }

    componentDidMount() {

        fetchUserDetailsApi(this.state.accountNumber).then((data) =>{
                    this.setState({balance:data.data.balance})
            }).catch((error) =>{
            console.log(error)
        });
    }



    render()
    {
        let page=<Container style={{paddingTop:40}}>

            <Grid container spacing={4} justify="center" >
                <Grid item xs >
                    <Paper style={{height:200,width:400,textAlign:'center',paddingTop:'50px',background:'#f8f8f8'}}  >
                        <text style={{fontSize:"30px",fontFamily:'Monospace',color:'#090809'}}>Account Number</text>
                        <br/>
                        <text style={{fontSize:"30px",fontFamily:'Monospace' ,color:'#090809'}}>{this.state.accountNumber}</text>

                    </Paper>

                </Grid>
                <Grid item xs>
                    <Paper style={{height:200,width:400,textAlign:'center',paddingTop:'50px',background:'#f8f8f8'}}  >
                        <text style={{fontSize:"30px",fontFamily:'Monospace',color:'#090809'}}>Total Balance</text>
                        <br/>
                        <text style={{fontSize:"30px",fontFamily:'Monospace',color:'#090809'}}>₹ {this.state.balance}</text>

                    </Paper>
                </Grid>


            </Grid>

        </Container>;


        return (
            <div>
                {page}
            </div>


        );
    }
}
export default Profile;
