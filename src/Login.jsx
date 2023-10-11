// Login.js
import React, { useContext, useState } from 'react';
import userContext from './context/usercontext';

export default function Login() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const {setuser} = useContext(userContext);




  const submitHandler = () => {
    setuser(userName,pass)
  }

  return (
    <div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter User Name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
        />
      </div>

      <div className="form-group">
        <input
          type="password" 
          className="form-control"
          placeholder="Password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
          value={pass}
        />
      </div>

      <button type="submit" onClick={submitHandler}>Submit</button>
    </div>
  )
}
