import React, {useState} from "react";

import Slider from "../Slider";

import { mainImage } from "../../App";

const NoiseCard = ({filter,filterIndex,refreshApp}) => {

    const [filterActive,setFilterActive] = useState(filter.active);
    const [monochr,setMonochr] = useState(filter.options.monochromatic);

    const handleDisplayCheck = (e) => {
        if(e.target.checked){
            filter.active = true;
        } else {
            filter.active = false; 
        }
        
        mainImage.draw()
    }

    const handleMonoCheck = (e) => {
        console.log(e.target.checked)
        setMonochr(e.target.checked)
        filter.options.monochromatic = !monochr;

        console.log('%cMONOCHROMATIC STATUS','color:red');
        console.log('monochr state: ');
        console.log(monochr);
        console.log('filter.options.monochromatic:');
        console.log(filter.options.monochromatic)

        mainImage.draw()
    }

    const handleSliderChange = (e) => {
        filter.options.max = e.target.value;

        console.log('%cMONOCHROMATIC STATUS','color:red');
        console.log('monochr state: ');
        console.log(monochr);
        console.log('filter.options.monochromatic:');
        console.log(filter.options.monochromatic)

        mainImage.draw()
    }

    const handleXOut = (e) => {
        mainImage.activeFilters.splice(filterIndex,1);
        mainImage.compileFilters();

        refreshApp()
    }

    return (
        <div className="Filter-Card Noise-Filter-Card">
            <button onMouseDown={handleXOut} className="x-out">x</button>
            <span>
                <div className="Display-Check-Cont">
                    <input onChange={handleDisplayCheck} type="checkbox" defaultChecked={filterActive}/>                </div>
                <h3>Noise</h3>
            </span>
            <Slider handler={handleSliderChange} max={255} min={0} step={1} value={50} title={"Amount"}/>
            <div className="Checkbox-Cont">
                <input type="checkbox" onChange={handleMonoCheck} checked={monochr}/>
                <p>Monochromatic Noise</p>
            </div>
        </div>
    )
}

export default NoiseCard