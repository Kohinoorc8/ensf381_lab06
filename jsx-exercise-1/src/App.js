import logo from './logo.svg';
import './App.css';

function App() {
  var currentYear = new Date().getFullYear();
  var isLoggedIn = false;
  return (
    <div className="App">
    <h1>ENSF-381: Full Stack Web Development</h1>
    <p>React Components</p>
    <p>{currentYear}</p>
    <p>{isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>} </p>
    </div>
  );
}

export default App;
