import React, { useState } from 'react'
import { login } from '../Services/UserService'

const AccountLogin = (props) => {
    const [userLog, setUserLog] = useState('')
    const [passwordLog, setPasswordLog] = useState('')

    if(props.isLoggedIn){
        return <div></div>
    }
    else{
        return(
            <div className="login">
                <h1> Login </h1>
                <label> Username </label>
                <input 
                type="text" 
                onChange={(e) => {
                    setUserLog(e.target.value);
                }}
                />
                <label> Password </label>
                <input
                    type="text" 
                    onChange={(e) => {
                    setPasswordLog(e.target.value);
                }}
                />
                <button onClick={() => login(userLog, passwordLog).then(data => {
                props.sendDataToParentLog(data)
                })}> Login </button>
            </div>
        )
    }
}

export default AccountLogin