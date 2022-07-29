import React,{ useState } from 'react';
import "./Room.css"


export let Room = () =>
{
    let [isLit,setLit]= useState(true)
    function background() {
        setLit(!isLit)

    }
  


    return(
        <div className={`room ${isLit? "Lit": "Dark"}`}>
            <div className='chdir'>
         <h1>The room is {isLit ? "Lit" : "Dark"} </h1>
       <div className='box'><input type="checkbox" className='toggle' onClick={background}/></div>
       </div>
        </div>
    )

}