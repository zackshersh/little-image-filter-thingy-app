import React, {useState} from "react";

import ColorInput from "../ColorInput";

import { rgbToHex, hexToRgb } from "../../utils";
import { mainImage } from "../../App";

const GradientMapCard = ({filter,filterIndex,refreshApp}) => {

    const [filterActive,setFilterActive] = useState(filter.active)

    const [darkVal,setDarkVal] = useState(rgbToHex(filter.options.darkColor))
    const [lightVal,setLightVal] = useState(rgbToHex(filter.options.lightColor))


    const handleDisplayCheck = (e) => {
        if(e.target.checked){
            filter.active = true;
        } else {
            filter.active = false; 
        }
        
        mainImage.draw()
    }

    const handleDarkColorInput = (value) => {
        setDarkVal(value);

        filter.options.darkColor = hexToRgb(darkVal)

        // mainImage.draw()
    }
    
    const handleXOut = (e) => {
        mainImage.activeFilters.splice(filterIndex,1);
        mainImage.compileFilters();

        refreshApp()
    }

    return (
        <div className="Filter-Card Invert-Filter-Card">
            <button onMouseDown={handleXOut} className="x-out">x</button>
            <span>
                <div className="Display-Check-Cont">
                    <input onChange={handleDisplayCheck} type="checkbox" defaultChecked={filterActive}/>                </div>
                <h3>Gradient Map</h3>
            </span>
            <br/>
            <ColorInput title={"Dark Color"} value={darkVal} handler={handleDarkColorInput}/>
            {/* <ColorInput title={"Light Color"} value={rgbToHex(filter.options.lightColor)} handler/> */}
        </div>
    )
}

export default GradientMapCard