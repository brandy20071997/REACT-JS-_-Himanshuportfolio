 import React from 'react'
 import './Card.css'
//  import img from '../img/true.jpg'

 function Card(props){
     console.log(props.Icon)

    // const logo = require('../img/emilio-garcia-lb9hi0NDjT0-unsplash.jpg')
  return(
  
    <div class="card cardDesign imgcardStarting">

<img className="zoom" src={props.Icon} alt=" " />
    <div class="card-body">
      <h5 class="card-title faq-question">{props.title}</h5>
      <p class="card-text  cardDricribtion">{props.description}</p>
      <a href="#" class="continueMore">{props.readmore}</a>
      
    </div>
  </div>

  )
 }

 export default Card;