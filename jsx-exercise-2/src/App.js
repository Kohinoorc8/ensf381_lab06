/**
 * App.js
 * ENSF 381 Lab 6 Exercise 2
 * March 7th, 2025
 * 
 * Kohinoor Chauhan - 30204155
 * Sabrina Li - 30173044
 */

import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {
  var currentYear = new Date().getFullYear();
  var isLoggedIn = false;
  return (
    <div className="App">
    <h1>ENSF-381: Full Stack Web Development</h1>
    <p>React Components</p>
    <p>{currentYear}</p>
    <p>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>} </p>
    <Home title="Home Page" description="Welcome to our website." />
    <About title="About Us" description="We are passionate about delivering quality experiences." />
    <Contact title="Contact Us" description="Feel free to reach out to us via email or phone." />
    </div>
  );
}

export default App;
