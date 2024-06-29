import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { LandingPage } from './components/landing-page/LandingPage';
import LoginForm from './components/login-page/LoginPage';
import RegisterForm from './components/registration-page/RegisterForm';
import RecyclersDashboard from './components/recyclers/components/dashboard/RecyclersDashboard';
import UserList from './components/recyclers/components/user-list/UserList';

 
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/recyclers" element={<RecyclersDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;