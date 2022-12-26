import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from './components/Layout';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Create from './components/Create';
import Navbar from './components/Navbar';
import Persons from './components/Persons';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Layout/>} />
         <Route index element={<Persons/>}/>
         <Route path='/edit/:id' element={<Edit/>} />
         <Route path='/delete/:id' element={<Delete/>} />
         <Route path='/create' element={<Create/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
