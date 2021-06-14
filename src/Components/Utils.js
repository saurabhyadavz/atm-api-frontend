import axios from "axios";

const baseUrl="http://localhost:8080";

export async function fetchUserDetailsApi (accountNumber){
    try{
        let response= await axios.get(`${baseUrl}/checkBalance?accountNumber=${accountNumber}`)
        console.log(response);
        return response;
    }
    catch(error) {
        console.log(error);
        return error;
    }
}

export async function transactionApi (accountNumber,amount,path){

    const body=JSON.stringify({
        accountNumber:accountNumber,
        balance:amount
    });

    const config = { headers: {'Content-Type': 'application/json'} };

    let response=await axios.put(  `${baseUrl}/${path}`,body,config)
     return response
}