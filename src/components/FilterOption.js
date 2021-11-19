import React from "react";


const FilterOption = ({handler,title,filter,defaultOptions}) => {
    return (
        <p data-filter={filter.name} data-defaultOptions={defaultOptions} className="Filter-Option" onMouseDown={handler}>{title}</p>
    )
}

export default FilterOption