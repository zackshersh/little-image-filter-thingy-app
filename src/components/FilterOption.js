import React from "react";


const FilterOption = ({handler,title,filter,name,defaultOptions}) => {

    return (
        <p data-filter={name} data-options={defaultOptions} className="Filter-Option" onMouseDown={handler}>{title}</p>
    )
}

export default FilterOption