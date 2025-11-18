import FetchData from './FetchData';
import AxiosData from './AxiosData';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="app-title">TP – Consommer une API avec React</h1>
      <div className="sections-container">
        <FetchData />
        <AxiosData />
      </div>
    </div>
  );
}

export default App;
