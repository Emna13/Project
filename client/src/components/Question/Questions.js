import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Redirect} from "react-router-dom";
import { useSelector } from 'react-redux';


const Questions = () => {
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    return (
        <div>
            <NavBar/>
            <div>
            {!isAuth ? (
            <Redirect to="/login" />
          ):
           <h4 style={{marginTop:'10px'}}>All Questions</h4>}
            </div>
        </div>
    )
}

export default Questions

