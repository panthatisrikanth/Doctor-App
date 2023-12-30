import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <>
     <BrowserRouter>  
       <div className='main-con'>
        <div className='side-main sidebar'>       
          <Home />
          </div>
          <div className='main'>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            </div>
            </div> 
      </BrowserRouter>
    </>
  );
}

export default App;
