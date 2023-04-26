import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Adduser from './Adduser';
import Showuser from './Showuser';
import Userdetail from './Userdetail';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/adduser" element={<Adduser/>}/>
      <Route path="/showuser" element={<Showuser/>} />
      <Route path="/userdetail" element={<Userdetail/>} />
      </Routes>
      </BrowserRouter>
    </div>
   
    
  );
}

export default App;
