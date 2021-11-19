import React, {useState} from "react";

const Input = ({title,handler,size,value,suffix,extraText}) => {


    let width = 200;

    if(size){
        switch(size){
            case 'Small':
                width = 100;
                break;
            case 'Medium':
                width = 150;
                break;
            case 'Large':
                width = 250;
            case 'X-Large':
                width = 350;
        }
    }

    const ifTitle = () => {
        if(title){
            return <label>{title}</label>
        } 
    }

    const ifExtraText = () => {
        if(extraText){
            return <p>{extraText}</p>
        }
    }

    return (
        <div className="Input">
            <div>
                <input style={{width: width}} onChange={handler} value={`${value}${suffix ? suffix : ""}`}/>
                {ifExtraText()}
            </div>
            {ifTitle()}
        </div>
    )
}

export default Input;