import logo from './logo.svg';
import './App.css';
import ApiExample from './components/ApiExample';
import ApiExample2 from './components/ApiExample2';


function App() {
  return (
    <div className="App">
      <div>
      <ApiExample />
      <ApiExample2 />
    </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
