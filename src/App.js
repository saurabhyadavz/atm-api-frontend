import React from "react"
import Header from './Components/Header'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



class App extends React.Component{

    render()
    {
        return (
            <div >
                <ToastContainer />
                <Header />
            </div>

        );
    }
}
export default App;
