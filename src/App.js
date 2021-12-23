import logo from './logo.svg';
import Login from './components/Login'
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" width="200px"></img>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
