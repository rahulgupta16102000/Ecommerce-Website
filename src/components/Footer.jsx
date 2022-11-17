import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook} from "react-icons/ai";
import { AiFillChrome} from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin} from "react-icons/ai";
// import '../index.css'
const Footer = () => {
  return (
    <div className='footerfirst' id='footerfirst'>
       <h3>2022  @ designed by Rahul Gupta </h3>
       <div>
         <h2>For More Visit:</h2>
         <div >
         <a href="https://www.instagram.com/i_am_guptarahul/" target={"_blank"} style={{animationDelay:'.2s'}}>
          <AiFillInstagram transform='scale(3)'   />
          </a> 
          <a href="https://www.facebook.com/people/Rahul-Gupta/100018318378934/" target={"_blank"} style={{animationDelay:'.4s'}}>
          <AiFillFacebook transform='scale(3)'/>
          </a> 
          <a href="https://rahulgupta16102000.github.io/portfolio1/" target={"_blank"} style={{animationDelay:'.6s'}}>
          <AiFillChrome transform='scale(3)'/>
          </a> 
          <a href="https://twitter.com/RahulGu45990375" target={"_blank"} style={{animationDelay:'.8s'}}>
          <AiFillTwitterCircle transform='scale(3)'/>
          </a> 
          <a href="https://www.linkedin.com/in/rahul-gupta-989220173/" target={"_blank"} style={{animationDelay:'1s'}}>
          <AiFillLinkedin transform='scale(3)'/>
          </a> 
         </div>
          
       
        
        
       </div>
    </div>
  )
}

export default Footer