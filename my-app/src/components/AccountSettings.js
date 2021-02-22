import React, { useState } from 'react'
import { update, logOut } from '../Services/UserService'

const AccountSettings = (props) => {
    const [updatePass, setUpdatePass] = useState({})

    if(props.isLoggedIn){
        return(
            <div className="settings">
                <h2>Account Settings for {props.username}</h2>
                <label> Update Password </label>
                <input 
                type="text" 
                onChange={(e) => {
                    setUpdatePass(e.target.value);
                    
                }}
                />
                <button onClick={() => update(props.username, updatePass).then(data => {
                    props.sendDataToParentUp(data)
                })}> Update </button>
                <button onClick={() => logOut().then(data => {
                    props.sendDataToParentUp(data)
                    })}> Logout </button>
            </div>
        )
    }
    else
        return <h2>Log in to see account details</h2>
}

export default AccountSettings
