import React, { useState } from 'react'
import { getUsers } from '../Services/UserService'

const GetAllUsers = (props) => {
    const [getAllUsers, setGetAllUsers] = useState([])

    return(
        <div className="Users">
            <h3> Get all users </h3>
            <button onClick={() => getUsers().then(data =>{
            setGetAllUsers(data)
            })}> Get all users </button>
            <p>{getAllUsers}</p>
        </div>
    )
}

export default GetAllUsers