import React from "react";

const Checkbox = ({handler,title,defaultValue}) => {
    return (
        <div className="Checkbox-Cont">
            <input type="checkbox" defaultChecked={defaultValue} onChange={handler}/>
            <p>{title}</p>
        </div>
    )
}

export default Checkbox;