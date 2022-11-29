import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function DashboardLogIn() {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    function getUsername(val){
        setUserName(val.target.value);
    }
    function getPassword(val){
        setPassword(val.target.value);
    }
    function authenticate(){
        if(userName=='veprimmorina' && password=='veprim123'){
            window.location.href='http://localhost:3000/dashboard';
            localStorage.setItem(9,'Veprim Morina')
        }else{
            alert('ERROR')
        }
    }
  return (
    <div>
        Username: 
        <input type='text' onChange={getUsername}/>
        Password:
        <input type='password' onChange={getPassword} />
        <Button onClick={()=> authenticate()}>Log in</Button>
    </div>
  )
}

export default DashboardLogIn