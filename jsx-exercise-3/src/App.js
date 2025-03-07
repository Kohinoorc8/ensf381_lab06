import logo from './logo.svg';
import './App.css';
import EngineeringTopics from './EngineeringTopics.js';

function App() {
  var currentYear = new Date().getFullYear();
  var isLoggedIn = false;

  return (
    <div className="App">
      <h1>ENSF-381: Full Stack Web Development</h1>
      <EngineeringTopics />
    </div>
  );
}

export default App;
