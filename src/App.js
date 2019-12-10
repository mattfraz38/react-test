import React, {useEffect, useState} from 'react';
import User from './components/User';
import Work from  './components/Work';
import './App.css';

const App = () => {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [works, setWorks] = useState([]);

  useEffect(() => {
    getUsers();
  }, [query]);

  const getUsers = async () => {
    const url = "https://api.foriio.com/api/v1/promoted/users";
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data.users);
    console.log(data.users);
  };

  const getWorks = async () => {
    const url = "https://api.foriio.com/api/v1/promoted/users";
    const response = await fetch(url);
    const data = await response.json();
    setWorks(data.works);
    console.log(data.works);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch("");
  };

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="container">

        <div className="users">
          {users.map(user => (
            < User
              key={user.id}
              name={user.name}
              profession={user.profession}
              avatar={user.avatar}
            />
          ))}
        </div>

        <div className="works">
          {works.map(work => (
            < Work
              key={work.id}
              works={work.works}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
