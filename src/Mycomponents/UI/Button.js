import React from 'react'
import './Button.css'
 
 const Button = (props)=>{
     let btnclasses= ' btn ' + props.btnstyle
     console.log(btnclasses);
     return(
         <div>
             <button  className= {btnclasses} >{props.value}</button>
         </div>
     )

 }

 export default Button