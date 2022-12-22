import './App.css';

import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Features from './components/Flipcart';
import Navbar from './components/Navbar';
import Grocery from './components/Grocery';
import Nopage from './components/Nopage';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/grocery' element={<Grocery/>}/>
          <Route path='*' element={<Nopage/>}/>
        </Routes>
      
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
