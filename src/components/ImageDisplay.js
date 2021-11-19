import React from "react";
import { easeOut, lerp } from "../utils";
import Canvas from "./Canvas";

import FileUpload from "./FileUpload";
import SaveAndLoad from "./SaveAndLoad"

import AddFilter from "./AddFilter";
import PreviewRes from "./PreviewRes";
import ExportButton from "./ExportButton";



const ImageDisplay = ({refreshApp,setExportDisplay}) => {


    const handleZoom = (e) => {

        if(e.target.id == 'zoomIn'){
            zoom(1.5,500);
        } else {
            zoom(0.66,500);
        }
    }

    const zoom = (amount,duration) => {

        
        // const steps = (duration/1000)*60;
        
        // let canvas = document.querySelector('.imageCanv');
        // let canvasWidth = getComputedStyle(canvas).width;
        // let w = parseInt(canvasWidth.split('px')[0]);
        
        // let time = 0;
        
        // let interval = setInterval(function(){
            
            //     let newWidth = Math.floor(lerp(w,(w*amount),easeOut(time/duration)));
            //     canvas.style.width = newWidth + 'px';
            
            //     if(time >= duration){
                //         clearInterval(interval);
                //         return
                //     }
                
                //     time += duration/steps
                
                // },duration/steps)
                
        let canvas = document.querySelector('.imageCanv');
        let canvasWidth = getComputedStyle(canvas).width;
        let w = parseInt(canvasWidth.split('px')[0]);

        let targetW = w * amount;

        canvas.style.width = targetW + "px";
        // console.log(w,)


                

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

        </div>
    )
}

export default ImageDisplay