import React from "react";


const FilterOption = ({handler,title,filter,defaultOptions}) => {
    console.log(filter)
    console.log(filter.name)
    return (
        <p data-filter={filter.name} data-options={defaultOptions} className="Filter-Option" onMouseDown={handler}>{title}</p>
    )
}

export default FilterOption