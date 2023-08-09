import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    if (username.trim() === '') {
      return;
    }

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setUserData(null);
      });
  };

  return (
    <div className="app-container">
      <h1 className="app-heading">GitHub User Search</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {userData && (
        <div className="user-data">
          <h2>{userData.name}</h2>
          <p>Username: {userData.login}</p>
          <p>Followers: {userData.followers}</p>
          <p>Repositories: {userData.public_repos}</p>
          <img
            src={userData.avatar_url}
            alt="Profile Avatar"
            className="avatar"
          />
        </div>
      )}
    </div>
  );
};

export default App;
