import logo from './logo.svg';
import './App.css';
import Anchor from './Anchor';



function App() {
  return (
    <div className="App">
    <h2>this is react js</h2>
    <p>working in progress app2</p>
    <label for="">First Name:</label>
          <input type="text" />
        
          <label for="">Last Name:</label>
          <input type="text" />
          
          <label for="">DateOfBirth: </label>
          <input type="date"  />
          
          <label for="">Email ID: </label>
          <input type="text" readonly />
          
          <label for="">Mobilenumber: </label>
          <input type="number" />
          <hr/>
          <Anchor/>
      </div>
  );
}

export default App;
