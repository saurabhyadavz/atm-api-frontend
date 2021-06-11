import React from "react";
import {Button, Card, CardTitle, Col, Row} from "reactstrap";
import {toast} from "react-toastify";
import {transactionApi} from "./Utils";

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
        transactionApi(this.state.accountNumber,this.state.balance,this.state.pathName).then((data) =>{
            console.log(data)
            if(data.data==="Success"){
                toast.success("Transaction successful");
                console.log(data);
            }
            else{
                toast.error("Transaction Failed");
                console.log(data);
            }
            this.setState({balance:''})
        })


    }

     urlChange(str) {
        const  s = str.substring(1)
        const capitalized = s.charAt(0).toUpperCase() + s.slice(1);
        return capitalized;
    }


    render() {


        const string = this.state.pathName
        const url = this.urlChange(string)

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
