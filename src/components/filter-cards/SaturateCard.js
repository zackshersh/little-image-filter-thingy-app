import React, {useState} from "react";


import { mainImage } from "../../App";

import Slider from "../Slider";

const SaturationCard = ({filter,filterIndex,refreshApp}) => {

    const [filterActive,setFilterActive] = useState(filter.active)

    const handleDisplayCheck = (e) => {
        if(e.target.checked){
            filter.active = true;
        } else {
            filter.active = false; 
        }
        
        mainImage.draw()
    }


    const handleSliderChange = (e) => {
        filter.options.amount = e.target.value;
        mainImage.draw()
    }

    const handleXOut = (e) => {
        mainImage.activeFilters.splice(filterIndex,1);
        mainImage.compileFilters();

        refreshApp()
    }

    return (
        <div className="Filter-Card Saturation-Filter-Card">
            <button onMouseDown={handleXOut} className="x-out">x</button>
            <span>
                <div className="Display-Check-Cont">
                    <input onChange={handleDisplayCheck} type="checkbox" defaultChecked={filterActive}/>                </div>
                <h3>Saturate</h3>
            </span>
            <Slider handler={handleSliderChange} max={10} min={0} step={1} value={2} />
        </div>
    )
}

export default SaturationCard;