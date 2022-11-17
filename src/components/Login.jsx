import * as React from "react";
import { useContext, useState } from "react";
import TextField from '@mui/material/TextField';
 
import '../index.css'

import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";
export default function Login() {
  const store = useContext(AuthContext);
  console.log(store);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleClick = async () => {
    let res = await login(email, password);

    navigate("/");
  };

  return (
    <div className="loginWrapper">
      
        <div className="loginWrapper1" variant="outlined">
          <div  >
         <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small"
              
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /> 
            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small"
             
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> 
            <div color="primary" variant="subtitle1">
              Forget Password ?
            </div>
          </div>
          <div>
            <button onClick={handleClick}>Log in</button>
          </div>
        </div>
        
        
            <div className="loginWrapper2" variant="subtitle1">
              Don't have an account ?{" "}
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Signup
              </Link>
             
        
        </div>
     
    </div>
  );
}
