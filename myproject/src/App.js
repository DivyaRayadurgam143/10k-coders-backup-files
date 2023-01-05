import { useState } from 'react';
import './App.css';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
// import Signupform from './components/Signupform';


function App() {
  const[currentform,setCurrentform]=useState("signup")

  const toggleform = (forname) =>{
    setCurrentform(forname)
  }
  return (
    <div className="App">
      {
        currentform ==="signup" ? <Signup  onFormSwitch={toggleform} /> : <Login onFormSwitch={toggleform} />
      }
      {/* <Signupform/> */}
    </div>
  );
}

export default App;
