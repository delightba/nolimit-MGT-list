import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserDetails.css';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-details-container">
      <div className="user-details">
        <h1>{user.name}'s Details</h1>
        <div className="user-info">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
        <a href="/" className="back-link">Back to User List</a>
      </div>
    </div>
  );
};

export default UserDetails;