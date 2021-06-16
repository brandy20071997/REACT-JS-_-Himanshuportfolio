import React from 'react'
import './Tech.css'

const Tech=(props)=>{

    return(
        <div>
            <div class=" row">
            <img class="imgSizingSetting col-md-3" src ={props.techIcon}/>
            {/* <span class="techETxtDEsign col-md-3">{props.value}</span> */}
            </div>
        </div>

    )
}

export default Tech;