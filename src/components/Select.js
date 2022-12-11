import React, {useState} from 'react'


const Select = ({options,title,handler}) => {

    const optionItems = options.map((option,i) => 
        <option value={option} key={i}>{option}</option>
    )

    const ifTitle = () => {
        if(title){
            return (
                <label>{title}</label>
            )
        }
    }

    return (
        <div className="Select">
            <select onChange={handler}> {optionItems} </select>
            {ifTitle()}
        </div>
    )
}

export default Select