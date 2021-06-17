import React from "react"
import {fetchUserDetailsApi} from "./Utils.js";
import 'antd/dist/antd.css';

import { EditOutlined } from '@ant-design/icons';
import EditProfile from "./EditProfile";

class Profile extends React.Component{
    constructor() {
        super();
        this.state={
            accountNumber:window.localStorage.getItem('accountNumber'),
            balance:'',
            aadhaarNo:'',
            name:'',
            panNo:'',
            editMode:false

        }
        this.handleClick=this.handleClick.bind(this)
        this.changeToFalse=this.changeToFalse.bind(this)
    }
    handleClick(){
        this.setState({editMode:true})
    }

    componentDidMount() {

        fetchUserDetailsApi(this.state.accountNumber).then((data) =>{
                    console.log(data)
                    this.setState({balance:data.data.balance})
                    this.setState({aadhaarNo:data.data.aadhaarNo})
                    this.setState({name:data.data.name})
                    this.setState({panNo:data.data.panNo})
                    window.localStorage.setItem('balance',data.data.balance)
            }).catch((error) =>{
            console.log(error)
        });
    }

    changeToFalse(){
        this.setState({editMode:false})
    }


    render()
    {
        var view=(this.state.editMode?<div><EditProfile changeToFalse={this.changeToFalse}/></div>: <div style={{display:'flex',borderStyle:'dotted',
            marginRight:"70vw",marginTop:'10px',marginLeft:5}}>
            <div style={{borderTop:"1px solid lightgrey", fontSize:20}}>
                <p>Account Number: {this.state.accountNumber}</p>
                <p>Name : {this.state.name}</p>
                <p>Aadhaar No : {this.state.aadhaarNo}</p>
                <p>PAN No: {this.state.panNo}</p>
            </div>

            <div style={{cursor:"pointer",marginLeft:240}}>
                <EditOutlined style={{fontSize:'30px'}} onClick={this.handleClick}/>
            </div>

        </div>);

        return (
            <div>
                {view}
            </div>




        );
    }
}
export default Profile;
