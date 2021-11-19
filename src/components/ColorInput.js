import React, {useState} from "react";
import { mainImage } from "../App";


// -------------
// Countdown that waits 500 miliseconds since 
let timeRemaining = 250;

let countdown = null;

function startCountdown(){
    
    if(countdown){
        return;
    }
    
    countdown = setInterval(() => {
        timeRemaining -= 10;
        
        if(timeRemaining < 0){
            clearInterval(countdown);
            console.log('!!!!!!!! HEY !!!!!!!!!')
            timeRemaining = 250;
            countdown = null;
            
            mainImage.draw();
        }
        
    },10)
}
// -------------


const ColorInput = ({title,value,handler}) => {

    const [colorVal, setColorVal] = useState(value);

    const colorChange = (e) => {

        timeRemaining = 250;

        
        startCountdown();
        handler(colorVal)
        
        setColorVal(e.target.value);
    }

    return (
        <div className="Color-Input">
            <input value={colorVal} onChange={colorChange} type="color" />
        </div>
    )
}

export default ColorInput