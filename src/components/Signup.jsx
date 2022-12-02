import * as React from 'react';
import {useState,useContext} from 'react';

 
import TextField from '@mui/material/TextField';
 
import {Link,useNavigate} from  'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { database,storage } from '../firebase';
import { Alert } from '@mui/material';

import '../index.css'
export default function Signup() {
    
 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
     
    const navigate = useNavigate();
    const {signup} = useContext(AuthContext);

    const handleClick = async() => {
        
      
            
            let userObj = await signup(email,password)
            
            navigate("/login");
            
            
           
               
        
    }

  return (
      <div className="loginWrapper">
          <div className="loginWrapper1">
           
                
                <div  >
                    
                    
                    <TextField id="outlined-basic" label="Email" type="email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" label="Password" type="password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    
                    
                </div>
                <div>
                    <button   onClick={handleClick}> 
                    Sign up
                    </button>
                </div>
                <div>
                    <div  >
                        By signing up, you agree to our Terms, Conditions and Cookies policy.
                    </div>
                </div>
            </div>
            <div  >
                <div>
                    <div  >
                        Having an account ? <Link to="/login" style={{textDecoration:'none'}}>Login</Link>
                    </div>
                </div>
            </div>
           
      </div>
    
  );
}
