import React, {useState} from "react";


import { mainImage } from "../../App";

import Slider from "../Slider";

const ExposureCard = ({filter,filterIndex,refreshApp}) => {

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
        filter.options.value = parseInt(e.target.value);
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
                    <input onChange={handleDisplayCheck} type="checkbox" defaultChecked={filterActive}/>
                </div>
                <h3>Exposure</h3>
            </span>
            <Slider handler={handleSliderChange} max={255} min={-255} step={1} value={filter.options.value} title={"Value"} />
        </div>
    )
}

export default ExposureCard;