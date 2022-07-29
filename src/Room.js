import React,{ useState } from 'react';
import "./Room.css"


export let Room = () =>
{
    let [isLit,setLit]= useState(false)
    let[temp,settemp] = useState(22)
    function background() {
        setLit(!isLit)

    }
    function Temperatureadd() {
        (settemp(++temp))     
    }
    function Temperaturesub() {
            settemp(--temp)
    }
  


    return(
        
        <div className={`room ${isLit? "Lit": "Dark"}`}>
            <div className='fortemp' id='div'>
             <h2>Temperature: {temp}<sup>o</sup>C</h2>
             <button onClick={Temperatureadd} className='tempinc'>Increase</button>
            <button onClick={Temperaturesub} className='tempdec'>Decrease</button>
         </div>
            <br/>
            <div className='chdir' id='div'>
         <h1>The room is {isLit? "Lit": "Dark"}</h1>
       <div className='box'><input type="checkbox" className='toggle' onClick={background}/></div>
       </div>
        </div>
    )

}