import React from "react";
import {Button, Card, CardTitle, Col, Row} from "reactstrap";
import axios from "axios";
import {message} from "antd";

class Transaction extends React.Component{
    constructor() {
        super();
        this.state={
            accountNumber:"102",
            balance:'',
            pathName:window.location.pathname
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }

    handleChange(change){
        this.setState(change)
    }

    handleClick(e){

        e.preventDefault();
        var body=JSON.stringify({
            accountNumber:this.state.accountNumber,
            balance:this.state.balance
        });


        const config = { headers: {'Content-Type': 'application/json'} };
        const path=this.state.pathName

        axios.put(  `http://localhost:8080${path}`,body,config)
            .then(function (response) {
                if(response.data==="Success")
                {
                    message.success("Transaction Successfull ");
                    console.log(response);
                }
                else{
                    message.error("Transaction failed ");
                    console.log(response);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        this.handleChange({ balance: '' })

    }




    render() {

       function urlChange(str) {

            const  s = str.substring(1)
            const capitalized = s.charAt(0).toUpperCase() + s.slice(1);

            return capitalized;
        }
        const string = this.state.pathName
        const url = urlChange(string)

        return(

            <div>
                <Row style={{paddingTop: '50px',paddingLeft:'50px'}} >
                    <Col sm="3">
                        <Card body>
                            <CardTitle tag="h5">{url} Money</CardTitle>
                            <input type="text" value={this.state.balance}
                                   onChange={(e) => this.handleChange({ balance: e.target.value })} />
                            <Button style={{color:"white",background:"blue"}} onClick={this.handleClick}>{url}</Button>
                        </Card>


                    </Col>
                </Row>
            </div>
        );
    }
}
export default Transaction;
