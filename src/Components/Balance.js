import React from "react"
import 'antd/dist/antd.css';
import { Card } from 'antd';

class Balance extends React.Component{


    render()
    {

        return (
            <div>
                <Card  style={{ width: 300,marginLeft:'10px',marginTop:'10px',borderStyle:'dashed',borderWidth:'thick',borderColor:'grey',fontSize:'20px' }}>

                    <p style={{fontSize:'30px'}}>Balance: {`₹ ${window.localStorage.getItem('balance')}`}</p>
                </Card>
            </div>


        );
    }
}
export default Balance;
