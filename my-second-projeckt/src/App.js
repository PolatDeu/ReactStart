import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent name="Mehmet"/>
      <FunctionalComponent name="Ahmet"/>
    </div>
  );
}

export default App;
