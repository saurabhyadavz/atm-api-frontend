import React from "react";
import {Col,Row,Card,CardTitle, Button} from "reactstrap"
import axios from "axios";
import { message } from "antd";
class Withdraw extends React.Component{
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

        axios.put('http://localhost:8080/withdraw',body,config)
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
                            <CardTitle tag="h5">Withdraw Money</CardTitle>
                            <input type="text" pattern="[0-9]*" value={this.state.balance}
                                   onChange={(e) => this.handleChange({ balance: e.target.value })} />
                            <Button style={{color:"white",background:"blue"}} onClick={this.handleClick}>Withdraw</Button>
                        </Card>
                    </Col>
                </Row>
            </div>

        );
    }

}
export default Withdraw;
