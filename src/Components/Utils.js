import axios from "axios";

const baseUrl="http://localhost:8081";

export async function fetchUserDetailsApi (accountNumber){
    try{
        return await axios.get(`${baseUrl}/checkBalance?accountNumber=${accountNumber}`)

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
export async function transferApi (accountNumber,amount){

    console.log(window.localStorage.getItem('accountNumber'))
    console.log(accountNumber);
    console.log(amount);
    const body=JSON.stringify({
        accountNumber:accountNumber,
        balance:amount
    });

    const config = { headers: {'Content-Type': 'application/json'} };

   return await axios.put(  `${baseUrl}/transferMoney?accountNumber=${window.localStorage.getItem('accountNumber')}`,body,config)

}
export async function loginUser(accountNumber){

      return await axios.get(`${baseUrl}/loginUser?accountNumber=${accountNumber}`)

}
export async function fetchTransactionDetailsApi(accountNumber){
    try{
        return await axios.get(`${baseUrl}/transactionDetails?accountNumber=${accountNumber}`)

    }
    catch(error){
        console.log(error);
        return error;
    }

}

export async function updateProfile(name,aaddhar,pan){
    const body=JSON.stringify({
        accountNumber:window.localStorage.getItem('accountNumber'),
        aadhaarNo:aaddhar,
        name:name,
        panNo:pan,
    });

    const config = { headers: {'Content-Type': 'application/json'} };

    let response=await axios.put(  `${baseUrl}/updateProfile`,body,config)
    return response

}
