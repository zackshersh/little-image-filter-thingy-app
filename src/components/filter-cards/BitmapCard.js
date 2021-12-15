import React, {useState} from "react";


import { mainImage } from "../../App";

import Slider from "../Slider";

const BitmapCard = ({filter,filterIndex,refreshApp}) => {

    const [filterActive,setFilterActive] = useState(filter.active);

    const [randomBitmap,setRandomBitmap] = useState(filter.options.randomPattern)

    const handleDisplayCheck = (e) => {
        if(e.target.checked){
            filter.active = true;
        } else {
            filter.active = false; 
        }
        
        mainImage.draw()
    }

    const handleRandomCheck = (e) => {
        filter.options.randomPattern = e.target.checked;
        mainImage.draw()
    }



    const handleSliderChange = (e) => {
        filter.options.blockScaleFactor = parseInt(e.target.value);
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
            <div className="Display-Check-Cont">
                    <input onChange={handleDisplayCheck} type="checkbox" defaultChecked={filterActive}/>
            </div>
            <span>
                <h3>Bitmap</h3>
            </span>
            <Slider handler={handleSliderChange} max={24} min={1} step={1} value={filter.options.blockScaleFactor} title={'Scaling Factor'} />
            <div className="Checkbox-Cont">
                <input type="checkbox" onChange={handleRandomCheck} defaultChecked={randomBitmap}/>
                <p>Random Noise Pattern</p>
            </div>

        </div>
    )
}

export default BitmapCard;