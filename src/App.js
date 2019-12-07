import React, {useEffect, useState} from 'react';
import User from './User';
import './App.css';

const App = () => {

const [users, setUsers] = useState([]);

useEffect(() => {
  getUsers();
}, []);

  const getUsers = async () => {
    const response = await fetch("https://api.foriio.com/api/v1/promoted/users")
    const data = await response.json();
    setUsers(data.users);
    console.log(data.users);
  };

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {users.map(user =>(
        <User name={user.name}
              profession={user.profession}
              avatar={user.avatar}/>
      ))}
    </div>
  );
}

export default App;
