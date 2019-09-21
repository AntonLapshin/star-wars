import React from 'react';
import logo from './img/logo.png';
import './App.css';
import { Dashboard } from './containers/Dashboard/Dashboard';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1>Character Search</h1>
      </header>
      <section className="app-container">
        <Dashboard />
      </section>
    </div>
  );
}

export default App;
