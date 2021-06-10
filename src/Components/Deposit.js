import React from "react";
import {Button, Card, CardTitle, Col, Row} from "reactstrap";
import axios from "axios";
import {message} from "antd";

class Deposit extends React.Component{
    constructor() {
        super();
        this.state={
            accountNumber:"102",
            balance:''
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

        axios.put('http://localhost:8080/deposit',body,config)
            .then(function (response) {
                if(response.data==="Success")
                {
                    message.success("Transaction Successfull ");
                    console.log(response);
                }
                else{
                    message.error("Balance is insufficient ");
                    console.log(response);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        this.handleChange({ balance: '' })

    }

    render() {
        return(

            <div>
                <Row style={{paddingTop: '50px',paddingLeft:'50px'}} >
                    <Col sm="3">
                        <Card body>
                            <CardTitle tag="h5">Deposit Money</CardTitle>
                            <input type="text" value={this.state.balance}
                                   onChange={(e) => this.handleChange({ balance: e.target.value })} />
                            <Button style={{color:"white",background:"blue"}} onClick={this.handleClick}>Deposit</Button>
                        </Card>


                    </Col>
                </Row>
            </div>
        );
    }
}
export default Deposit;
