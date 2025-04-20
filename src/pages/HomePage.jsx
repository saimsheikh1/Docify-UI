import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1 className="display-4 mb-4">Welcome to Docify</h1>
        <p className="lead mb-4">AI-powered medical triage. Instant answers, peace of mind.</p>
        <div className="d-flex justify-content-center">
          <Link to="/signup" className="btn btn-primary btn-lg mx-2">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-secondary btn-lg mx-2">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
