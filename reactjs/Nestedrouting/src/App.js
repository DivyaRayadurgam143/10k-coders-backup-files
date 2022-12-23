import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Persons from './components/Persons';
import Layout from './components/Layout';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Persons/>
      <Routes>
         <Route path='/' element={<Layout/>} />
         <Route path='/edit' element={<Edit/>} />
         <Route path='/delete' element={<Delete/>} />
         <Route path='/create' element={<Create/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
