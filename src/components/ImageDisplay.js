import React from "react";
import { easeOut, lerp } from "../utils";
import Canvas from "./Canvas";

import FileUpload from "./FileUpload";
import SaveAndLoad from "./SaveAndLoad"

import AddFilter from "./AddFilter";
import PreviewRes from "./PreviewRes";
import ExportButton from "./ExportButton";

import InfoButton from "./InfoButton";



const ImageDisplay = ({refreshApp, setExportDisplay, setInfoDisplay}) => {


    const handleZoom = (e) => {

        if(e.target.id == 'zoomIn'){
            zoom(1.5,500);
        } else {
            zoom(0.66,500);
        }
    }

    const zoom = (amount,duration) => {

                
        let canvas = document.querySelector('.imageCanv');
        let canvasWidth = getComputedStyle(canvas).width;
        let w = parseInt(canvasWidth.split('px')[0]);

        let targetW = w * amount;

        canvas.style.width = targetW + "px";
                

    }



    return (
        <div className="Image-Display">
            <div className="Menu-Bar">
                {/* <SaveAndLoad /> */}
                <ExportButton setDisplay={setExportDisplay}/>
                <AddFilter refreshApp={refreshApp} />
                <PreviewRes refreshApp={refreshApp}/>
            </div>
            <div className="Image-Cont flex-center">
                <Canvas />
            </div>
            <div className="Zoom-Cont">
                <button id="zoomIn" onMouseDown={handleZoom}>+</button>
                <button id="zoomOut" onMouseDown={handleZoom}>-</button>
            </div>
            <InfoButton handler={setInfoDisplay} />

        </div>
    )
}

export default ImageDisplay