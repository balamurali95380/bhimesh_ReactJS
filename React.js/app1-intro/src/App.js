import logo from './logo.svg';
import './App.css';
import List from './List';
import Para from './Para';

function App() {
  return (
    <div className="App">
      <h2>this is react js</h2>
      <p>working in progress app1</p>
      <ul>
        <li>AP</li>
        <li>HP</li>
        <li>GOA</li>
        <li>Pune</li>
      </ul>
      <hr/>
      <List/>
      <hr/>
      <Para/>
    </div>
  );
}

export default App;
