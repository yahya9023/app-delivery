import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home  from './compenent/home/Home';
import Login from"./compenent/home/login";
import Register from"./compenent/home/register";

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/' element={<Home/> } />
     <Route path='/login' element={<Login/> } />
     <Route path='/register' element={<Register/> } />

     </Routes>
    </div>
  );
}

export default App;
