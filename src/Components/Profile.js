import React from "react"
import axios from 'axios';
import {Row, Card, Col, CardTitle} from "reactstrap";


class Profile extends React.Component{
    constructor() {
        super();
        this.state={
            accountNumber:"102",
            balance:''
        }

    }

     componentDidMount() {
        this.handleUserinfo()

    }

    handleUserinfo =() =>{
        var self = this;
        axios.get('http://localhost:8080/details?accountNumber=102')
            .then(function (response) {
                self.setState({balance:response.data.balance})
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }





    render()
    {

        return (
            <div>
                <Row style={{paddingTop: '50px',paddingLeft:'50px'}} >
                    <Col sm="3">
                        <Card body>
                            <CardTitle tag="h3">Account Number:{this.state.accountNumber}</CardTitle>
                            <CardTitle tag="h3">Balance:{this.state.balance}</CardTitle>
                        </Card>
                    </Col>

                </Row>

            </div>

        );
    }
}
export default Profile;
