import React from "react"
import {Row, Card, Col, CardTitle} from "reactstrap";
import {fetchUserDetailsApi} from "./Utils.js";

class Profile extends React.Component{
    constructor() {
        super();
        this.state={
            accountNumber:"102",
            balance:''
        }

    }

    componentDidMount() {
        fetchUserDetailsApi(this.state.accountNumber).then((data) =>{
                if(data){
                    console.log(data)
                    this.setState({balance:data.data.balance})
                }
                else{
                    alert("Somethings Wrong")
                }

            }
        );
    }



    render()
    {

        return (
            <div>
                <Row style={{paddingTop: '50px',paddingLeft:'50px'}} >
                    <Col sm="3">
                        <Card body>
                            <CardTitle tag="h3">Account Number:{this.state.accountNumber}</CardTitle>
                            <CardTitle tag="h3">Balance: {this.state.balance}</CardTitle>
                        </Card>
                    </Col>

                </Row>

            </div>

        );
    }
}
export default Profile;
