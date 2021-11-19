import React, {useState} from "react";


import { mainImage } from "../../App";

const InvertCard = ({filter,filterIndex,refreshApp}) => {

    const [filterActive,setFilterActive] = useState(filter.active)

    const handleDisplayCheck = (e) => {
        if(e.target.checked){
            filter.active = true;
        } else {
            filter.active = false; 
        }
        
        mainImage.draw()
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
                    <input onChange={handleDisplayCheck} type="checkbox" defaultChecked={filterActive}/>
                </div>
                <h3>Invert</h3>
            </span>
        </div>
    )
}

export default InvertCard