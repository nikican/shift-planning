import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Easy-To-Use Employee Scheduling Software</h1>
      <h3>Forget spreadsheets and start using Humanity to create a full staff schedule in just 10 minutes.</h3>
      <Link to="/shifts" className="btn btn-primary btn-lg">Shift Planning</Link>
    </div>
  );
};

export default HomePage;
