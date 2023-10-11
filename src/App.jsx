
// App.js
import React from 'react';
import UserContextProvider from './context/userContextProvider';
import Login from './Login';
import VarifiedUser from './VarifiedUser';

export default function App() {
  return (
    <UserContextProvider>
      <Login />
      <VarifiedUser />
    </UserContextProvider>
  )
}

