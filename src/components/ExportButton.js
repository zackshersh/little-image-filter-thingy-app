import React, {useState} from 'react';

import { mainImage } from '../App';

const ExportButton = ({setDisplay}) => {

    const handleMouseDown = () => {

        if(mainImage.image){
            setDisplay('flex')
        } else {
            alert('An image must be uploaded to export.')
        }
    }

    return (
        <div className="Export-Cont Menu-Bar-Cont">
            <button class="Menu-Bar-Button" onMouseDown={handleMouseDown}>Export</button>
        </div>
    )
}

export default ExportButton;