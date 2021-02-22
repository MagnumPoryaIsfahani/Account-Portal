import React, { useState } from 'react'
import { register } from '../Services/UserService'

const AccountRegistration = (props) => {
    const [userReg, setUserReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    if(props.isLoggedIn){
        return <div></div>
    }
    else{
        return(
            <div className="registration">
                <h1> Registration </h1>
                <label> Username </label>
                <input 
                type="text" 
                onChange={(e) => {
                    setUserReg(e.target.value);
                }}
                />
                <label> Password </label>
                <input 
                    type="text" 
                    onChange={(e) => {
                    setPasswordReg(e.target.value);
                }}
                />
                <button onClick={() => register(userReg, passwordReg).then(data =>{
                props.sendDataToParentReg(data)
                })}> Register </button>
            </div>
        )
    }
}

export default AccountRegistration