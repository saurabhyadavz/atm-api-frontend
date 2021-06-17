import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from "antd";
import { Form, Select, DatePicker } from "antd";

import {fetchTransactionDetailsApi} from "./Utils";
import {Table} from "reactstrap";

class TransactionDetails extends React.Component{

    constructor() {
        super();
        this.state={
            accountNumber:window.localStorage.getItem('accountNumber'),
            allRecords:[],
            records:[],
            option:'',
            date:null,
            show:null,
            view:false,
            isModalVisible:false

        }


        this.onChangeDate=this.onChangeDate.bind(this)
        this.onChangeOption=this.onChangeOption.bind(this)
        this.showModal=this.showModal.bind(this)
        this.handleCancel=this.handleCancel.bind(this)
        this.handleOk=this.handleOk.bind(this)

    }

    componentDidMount() {

        fetchTransactionDetailsApi(this.state.accountNumber).then((data) =>{
            console.log(data)
            this.setState({records:data.data})
            this.setState({allRecords:data.data})
        }).catch((error) =>{
            console.log(error)
        })

    }


    onChangeDate(date,dateString){
        this.setState({date:dateString})

    }
    onChangeOption(value){

        this.setState({option:value})
    }

    showModal() {
        this.setState({isModalVisible:true})
    }

    handleOk() {
        this.setState({isModalVisible:false})
        this.setState({records:this.state.allRecords})
        let result=[] ;
        if(this.state.option==='credit'){
            result = this.state.allRecords.filter((data) => {
                return data.credit.search(this.state.option) !== -1;
            });
        }
        if(this.state.option==='debit'){
            result = this.state.allRecords.filter((data) => {
                return data.debit.search(this.state.option) !== -1;
            });
        }
        if(this.state.date){
            result = result.filter((data) => {
                return data.date.search(this.state.date) !== -1;
            });
        }

        this.setState({date:null})
        this.setState({option:''})
        if(result.length){
            this.setState({records:result})
        }


    }

    handleCancel (){
        this.setState({isModalVisible:false})
    }

    render()
    {

        const data=this.state.records.map(function (i){
            return(
                <tr style={{fontSize:20,fontWeight: '500'}}>
                    <td>{i.date}</td>
                    <td>{i.transDetails}</td>
                    <td>
                        {(() => {
                            if (i.debit === 'debit'){
                                return (
                                   <p style={{color:"red"}}>{`- ₹${i.amount}`} </p>
                                )
                            }
                            return (
                                <p style={{color:"green"}}>{`+ ₹${i.amount}`} </p>
                            )

                        })()}
                    </td>

                    <td>{`₹ ${i.totalBalance}`}</td>
                </tr>
            )
        })

        const table = <Table bordered style={{marginTop:"20px"}}>
            <thead>
            <tr style={{fontSize:23,fontWeight: '500'}}>
                <th>Date</th>
                <th>Details</th>
                <th> Debited/Credited</th>
                <th> Total balance</th>
            </tr>
            </thead>
            <tbody>
            {data}
            </tbody>
        </Table>;


        return(
            <div>

                <Button size="large" type="primary" onClick={this.showModal} style={{ marginLeft:'94%',marginTop: '0px',
                        position:'absolute',width:'100px'
                       }}>
                        Filter
                </Button>

                {table}
                <Modal
                    title="Basic Modal"
                    visible={this.state.isModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form labelCol={{span: 10}} wrapperCol={{span: 16,}} style={{marginTop:"10px"}} name="control-ref" >
                    <Form.Item label="Choose format" >
                        <Select style={{ width: 200 }}  placeholder="Choose details format" onChange={this.onChangeOption}>
                            <Select.Option value="all"> All</Select.Option>
                            <Select.Option value="credit">Credit</Select.Option>
                            <Select.Option value="debit">Debit</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Date">
                        <DatePicker onChange={this.onChangeDate}/>
                    </Form.Item>

                </Form>
                </Modal>
            </div>


        );
    }

}

export default TransactionDetails;