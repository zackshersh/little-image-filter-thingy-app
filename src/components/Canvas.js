import React, {useEffect,useState} from 'react';

let filters = [];
let img;

const Canvas = () => {

    const [transX, setTransX] = useState(0)
    const [transY, setTransY] = useState(0)

    const drag = (e) => {
        let pos1, pos2, pos3, pos4 = 0;
        
        // pos3 = e.clientX;
        // pos4 = e.clientY;

        // setTransX(e.clientX)
        // setTransY(e.clientY)

        e.target.onmousemove = function(e){
            // e.preventDefault()

            // let xNormalized = e.clientX - e.target.width/2;
            // let yNormalized = e.clientY - e.target.height/2;

            // console.log(xNormalized,yNormalized)

            // // pos1 = transX - e.clientX;
            // // pos2 = transY - e.clientY;

            // setTransX(xNormalized)
            // setTransY(yNormalized)

            // console.log(transX)
            // console.log(transY)

            // pos3 = e.clientX;
            // pos4 = e.clientY;

            // // e.target.style.top = (e.target.offsetTop - pos2) + "px"
            // // e.target.style.left = (e.target.offsetLeft - pos1) + "px"
            
        }

        e.target.onmouseup = function(e){
            e.target.onmouseup = null;
            e.target.onmousemove = null;
        }
    }

    return (
        <div className="canvas-component flex-center">
            <canvas style={{transform:`translate(${transX+'px'},${transY+'px'})`}} onMouseDown={drag} className="imageCanv"></canvas>
        </div>
    )

}

export default Canvas;