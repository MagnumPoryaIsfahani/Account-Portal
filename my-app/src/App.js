import React, { useState } from 'react';
import AccountSettings from './components/AccountSettings'
import AccountRegistration from './components/AccountRegistration'
import AccountLogin from './components/AccountLogin'
import GetAllUsers from './components/GetAllUsers';

function App() {

  const [serverStatus, setServerStatus] = useState("Hello")

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState('')

  const sendDataToParentLog = (data) => {
    setServerStatus(data.message)
    setIsLoggedIn(data.isLoggedIn)
    setLoggedInUser(data.username)
  }

  const sendDataToParentReg = (data) => {
    setServerStatus(data)
  }

  const sendDataToParentUp = (data) => {
    setIsLoggedIn(data.isLoggedIn)
    setServerStatus(data.message)
  }

  return (
    <div className="App">

      <h1>Server Response: {serverStatus}</h1>

      <AccountLogin sendDataToParentLog = {sendDataToParentLog} 
      isLoggedIn = {isLoggedIn}/>

      <AccountRegistration sendDataToParentReg = {sendDataToParentReg}
      isLoggedIn = {isLoggedIn}/>

      <AccountSettings sendDataToParentUp = {sendDataToParentUp}
        isLoggedIn = {isLoggedIn}
        username = {loggedInUser}/>

      <GetAllUsers />

    </div>
  );
}

export default App;
