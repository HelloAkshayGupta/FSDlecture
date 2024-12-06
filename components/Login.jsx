import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login( {regDataLogin} ) {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  function verification(e){
    e.preventDefault();
    if (regDataLogin.email==email && regDataLogin.password==password){
      alert("Login Successful");
      navigate("/dashboard")

    }else{
      alert("Login Fail");
    }
  }

  return (
    <div>
      <h2>Welcome to Login Page</h2>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={(e)=>{setPassword(e.target.value)}}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button onClick={verification} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;