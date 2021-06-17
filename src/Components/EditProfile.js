import React from "react";
import {CloseOutlined} from "@ant-design/icons";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from "react";
import {updateProfile} from "./Utils";

export default ({changeToFalse}) =>{

    const [name, setName] = useState("");
    const [aadhaar, setAadhaar] = useState("");
    const [pan, setPan] = useState("");

    const handleClick = async() => {
        try{

             let res=await updateProfile(name,aadhaar,pan);
             console.log(res);
        }
        catch{
            alert("Somethings wrong")
        }
        changeToFalse();

    };
    return(
            <div style={{display:'flex',borderStyle:'dotted',
                marginRight:"74vw",marginTop:'10px',paddingLeft:'10px',marginLeft:'1px',minHeight:200}}>
                <div style={{borderTop:"1px solid lightgrey", fontSize:20}}>
                    <TextField id="standard-basic" label="Enter Name" name={name}
                               onChange={(e) => setName(e.target.value)} />
                    <TextField id="standard-basic" label="Enter Aadhaar No" aadhaar={aadhaar}
                               onChange={(e) => setAadhaar(e.target.value)} />
                    <TextField id="standard-basic" label="Enter Pan No" pan={pan}
                               onChange={(e) => setPan(e.target.value)}/>
                    <Button variant="contained" color="primary" size="small" style={{marginTop:'10px'}} onClick={handleClick}>
                        Save
                    </Button>
                </div>
                <div style={{cursor:"pointer",marginLeft:190}}>
                    <CloseOutlined style={{fontSize:'30px'}} onClick={() => changeToFalse()}/>

                </div>

           </div>

    );
};