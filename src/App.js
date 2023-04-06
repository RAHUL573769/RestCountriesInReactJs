import logo from './logo.svg';
import './App.css';
import Countries from './Countries';
import Person from './Person';
import Header from './Header';

function App() {
  return (
    <div className='App' >
    <Header></Header>
     <Countries></Countries>
     <Person></Person>
    </div>
  );
}

export default App;
