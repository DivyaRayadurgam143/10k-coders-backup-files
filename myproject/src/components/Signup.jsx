import { useState } from "react";
 export const Signup =(props)=>{
        const[email,setEmail] = useState("");
        const[pass,setPass] =useState("");
        const[confirmpass,setConfirmPass] =useState("");

  const handlesubmit = (e) =>{
    e.preventdefault();
    console.log(email);
  }


       return(     
        <div className="auth-form-container">
        <form className="signup-form" onSubmit={handlesubmit}>
            <h1>Signup</h1>{" "}<br />
            <label htmlFor="">EMAIL:</label>
          <input  type="email" placeholder="Youremail@gmail.com"  name="email"  value={email}  onChange={(e) =>setEmail(e.target.value)}/>{" "}
          <br />
          <label htmlFor="">PASSWORD:</label>
          <input  type="text" placeholder="*********"  name="password"  value={pass} onChange={(e) =>setPass(e.target.value)}/>{" "}
          <br />
          <label htmlFor="">CONFIRM PASSWORD:</label>
          <input  type="text" placeholder="*********"  name="confirmpassword" value={confirmpass}  onChange={(e) =>setConfirmPass(e.target.value)}/>{" "}
          <br />
          <button type="button">SIGN UP</button>
        </form>
        <br />
        <button  className="link-btn" onClick={()=>props.onFormSwitch("login")}>Already have an Account? Login here.</button>
        </div>
    )
}
