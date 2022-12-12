import React, {useState} from 'react';
import Slider from '../Slider';

import { mainImage } from "../../App";

function HueCard({filter, filterIndex, refreshApp}) {

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
        filter.options.value = e.target.value;
        mainImage.draw()
    }

    

    return (
        <div className='Filter-Card Hue-Filter-Card'>
            <span>
                <div className="Display-Check-Cont">
                    <input onChange={handleDisplayCheck} type="checkbox" defaultChecked={filterActive}/>                </div>
                <h3>Hue</h3>
            </span>
            <Slider handler={handleSliderChange} max={1} min={0} step={0.01} value={0.5} />
        </div>
    );
}

export default HueCard;