import { useState } from "react";
 export const Login =(props)=>{
        const[email,setEmail] = useState("");
        const[pass,setPass] =useState("");

  const handlesubmit = (e) =>{
    e.preventdefault();
    console.log(email);
  }
       return(     
        <div className="auth-form-container">
        <form className="login-form" onSubmit={handlesubmit}>
            <h1>Login</h1>{" "}<br />
            <label htmlFor="">EMAIL:</label>
          <input  type="email" placeholder="Youremail@gmail.com"  name="email"  value={email}  onChange={(e) =>setEmail(e.target.value)}/>{" "}
          <br />
          <label htmlFor="">PASSWORD:</label>
          <input  type="text" placeholder="*********"  name="password"  value={pass} onChange={(e) =>setPass(e.target.value)}/>{" "}
          <br />
          <button type="button">LOGIN</button>
        </form>
        <br />
        <button  className="link-btn" onClick={()=>props.onFormSwitch("signup")}>Don't have an Account? signup here.</button>
        </div>
    )
}
