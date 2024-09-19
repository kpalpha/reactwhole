import React from 'react';
import { useNavigate } from 'react-router-dom';
import UsersList from './UsersList';
import '../css/Landing.css';
import 'bootstrap/dist/css/bootstrap.css';

function Landing() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const navigate = useNavigate();

  if (!user) {
    navigate('/');
    return null;
  }

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    navigate('/');
  };

  const goToAddUser = () => {
    navigate('/add-user');
  };

  return (
    <div className="landing-container">
      <header className="header">
        <h2>Welcome to PJ's React App </h2>
        <h4>{user.email}</h4>



      </header>
      <div className="content">
        <nav className="sidebar">
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li><button className="logout-btn btn btn-secondary" onClick={handleLogout}>Logout</button></li>
          </ul>
        </nav>
        <main className="main">
          <h3>User List</h3>
          
          <UsersList /><br />
          <button className="add-user-btn btn btn-primary" onClick={goToAddUser}>Add User</button>
        </main>
        
      </div>
      
    </div>
  );
}

export default Landing;