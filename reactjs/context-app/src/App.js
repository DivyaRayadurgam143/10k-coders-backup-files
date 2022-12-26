import './App.css';
import Parentcomp from './components/Parentcomp';
import { Userprovider } from './components/User';

function App() {
  return (
    <Userprovider value="Divya">
      <Parentcomp/>
     </Userprovider>
    
  );
}

export default App;
