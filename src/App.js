// src/App.js
import React from 'react';
import NavRoute from './route/nav'
import Home from './pages/Home';

const App = () => {
  return (
    <div className="container-fuid">
      {/* Navbar */}
      <NavRoute />

      {/* Card Example */}
      <div className='container text-center'>
        <div className="row">
          <div className="col-2">
          </div>
          <div className="col-lg-8">
            <div><Home /></div>
          </div>
          <div className="col-2">
          </div>
        </div>

      </div>

    </div>
  );
};

export default App;
