import React from 'react';
import { useNavigate } from 'react-router-dom';
 
export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
 
  const navigateToLogin = () => {
    navigate('/login');
  };
 
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div className="button-container">
            <button className="button" onClick={navigateToLogin}>Business</button>
            <button className="button" onClick={navigateToLogin}>User</button>
          </div>
        </header>
        <main>
          <h1>Welcome to Our Landing Page</h1>
        </main>
      </div>
    </div>
  );
};