import React, {useState} from "react";


import { mainImage } from "../../App";

import Slider from "../Slider";
import Checkbox from "../Checkbox";

const WaveCard = ({filter,filterIndex,refreshApp}) => {

    const [filterActive,setFilterActive] = useState(filter.active);
    const [warpActive,setWarpActive] = useState(filter.options.warp)

    const handleDisplayCheck = (e) => {
        if(e.target.checked){
            filter.active = true;
        } else {
            filter.active = false; 
        }
        
        mainImage.draw()
    }

    const handleWarpDistortCheck = (e) => {
        filter.options.warp = e.target.checked;
        setWarpActive(e.target.checked)
        mainImage.draw()
    }

    const handleXAmpChange = (e) => {
        filter.options.xAmplitude = e.target.value;
        mainImage.draw()
    }
    const handleXWaveChange = (e) => {
        filter.options.xWavelength = e.target.value;
        mainImage.draw()
    }
    const handleYAmpChange = (e) => {
        filter.options.yAmplitude = e.target.value;
        mainImage.draw()
    }
    const handleYWaveChange = (e) => {
        filter.options.yWavelength = e.target.value;
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
                <h3>Wave</h3>
            </span>
            {/* <input type="checkbox" defaultChecked={filter.options.warp}/> */}
            <Checkbox handler={handleWarpDistortCheck} title="Warp" defaultValue={warpActive}/>
            <Slider handler={handleXAmpChange} max={warpActive ? 100 : 1250} min={1} step={1} value={40} title={"X-Amplitude"}/>
            <Slider handler={handleXWaveChange} max={1250} min={1} step={1} value={40} title={"X-Wavelength"}/>
            <Slider handler={handleYAmpChange} max={warpActive ? 100 : 1250} min={1} step={1} value={40} title={"Y-Amplitude"}/>
            <Slider handler={handleYWaveChange} max={1250} min={1} step={1} value={40} title={"Y-Wavelength"}/>
        </div>
    )
}

export default WaveCard;