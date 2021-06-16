import React from 'react';
import {fetchTransactionDetailsApi} from "./Utils";
import {Table} from "reactstrap";

class TransactionDetails extends React.Component{

    constructor() {
        super();
        this.state={
            accountNumber:window.localStorage.getItem('accountNumber'),
            records:[]
        }
    }
    componentDidMount() {
            console.log("Hello");
            fetchTransactionDetailsApi(this.state.accountNumber).then((data) =>{
                console.log(data)
                this.setState({records:data.data})
            }).catch((error) =>{
                console.log(error)
            })
    }

    render()
    {
        var recordsList=this.state.records.map(function (i){
            return(
                <tr>
                    <td>{i.time}</td>
                    <td>{i.transDetails}</td>
                    <td>{i.debit==='debit'?`₹ ${i.amount}`:"-"}</td>
                    <td>{i.credit==='credit'?`₹ ${i.amount}`:"-"}</td>

                    <td>{`₹ ${i.totalBalance}`}</td>
                </tr>
            )
        })


        return(
            <Table bordered>
                <thead>
                <tr>
                    <th>Date</th>
                    <th >Details </th>
                    <th> Debit </th>
                    <th> Credit </th>
                    <th> Total balance</th>
                </tr>
                </thead>

                <tbody>
                {recordsList}
                </tbody>
            </Table>
        );
    }

}

export default TransactionDetails;