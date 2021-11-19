import React, {useEffect, useRef, useState} from "react";

const Slider = ({handler,max,min,step,value,title}) => {

    const [displayVal, setDisplayVal] = useState(value)



    const sliderChange = (e) => {
        setDisplayVal(e.target.value);
    }



    return (
        <div className="Slider">
            <div>
                <input defaultValue={displayVal} onMouseUp={handler} onChange={sliderChange} max={max} min={min} step={step} type="range"></input>
                <p className="Slider-Value-Display">{displayVal}</p>
            </div>
            <p>{title}</p>
        </div>
    )
}

export default Slider;