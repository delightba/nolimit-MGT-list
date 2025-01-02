import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="navbar-brand">User Management</h1>
      </nav>
      <div className="user-list">
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}{" "}
              <Link to={`/details/${user.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;