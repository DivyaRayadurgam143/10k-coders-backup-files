import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Authpro from "./components/Authpro";



function App() {
  return (
    <Authpro>
      <div className="App">
        <h2>hiiii</h2>
      </div>
    </Authpro>
  );
}

export default App;
