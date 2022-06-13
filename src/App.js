import React, { useState } from 'react';
import { Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = props => {
  const [usersList,setUsersList] = useState([]);
  const addUserHandler = user => {
    setUsersList((prevValue) => {
      return [...prevValue,{username:user.username,age:user.age,id:Math.random().toString()}];
    })
  }
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
