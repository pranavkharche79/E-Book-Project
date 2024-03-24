import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;