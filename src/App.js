// Style Imports
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// React Libraries
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Components
import Login from './components/Login'
import Spaces from './components/Spaces'
import Home from './components/Home'


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/spaces" element={<Spaces />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
