import { xyToIndex, fillDisplacementGaps } from "./utils";

import { mainImage } from "./App";

export function wave(imageData,{canvas,xAmplitude=20,xWavelength=120,xShift=0,yAmplitude=20,yWavelength=60,yShift=0,warp=true}){

    let data = imageData.data;
    
    let newImageData = new ImageData(imageData.width,imageData.height);
    let nData = newImageData.data;

    xAmplitude = Math.floor( mainImage.drawResFactor * xAmplitude );
    xWavelength = Math.floor( mainImage.drawResFactor * xWavelength );
    xShift = Math.floor( mainImage.drawResFactor * xShift );
    
    yAmplitude = Math.floor( mainImage.drawResFactor * yAmplitude );
    yWavelength = Math.floor( mainImage.drawResFactor * yWavelength );
    yShift = Math.floor( mainImage.drawResFactor * yShift );

    for(var y=0;y<imageData.height;y++){
        for(var x=0;x<imageData.width;x++){

            let x2, y2;

            if(!warp) {
                x2 = (x + (Math.sin(y/yWavelength)*yAmplitude))+yShift;
                y2 = (y + (Math.sin(x/xWavelength)*xAmplitude))+xShift;
            } else {
                x2 = (x + (Math.sin(x/xWavelength)*xAmplitude))+xShift;
                y2 = (y + (Math.sin(y/yWavelength)*yAmplitude))+yShift;
            }

            x2 = Math.floor(x2);
            y2 = Math.floor(y2);

            if(x2 > imageData.width){
                x2 = x2 - imageData.width;
            }
            if(y2 > imageData.height){
                y2 = y2 - imageData.height;
            } else if (y2 < 0){
                y2 = y2 + imageData.height;
            }

            if(x == 200 && y == 200){
                console.log(">>>>>>>",x,y);
                console.log("=======",x2,y2);
            }

            let offsetI = xyToIndex(x2,y2,imageData.width);

            let currentPixelI = xyToIndex(x,y,imageData.width);
            let cpi = currentPixelI;

            nData[cpi] = data[offsetI];
            nData[cpi+1] = data[offsetI+1];
            nData[cpi+2] = data[offsetI+2];
            nData[cpi+3] = data[offsetI+3];



        }
    }

    return newImageData;

}

// export function wave(imageData,{canvas,xAmplitude=20,xWavelength=120,xShift=0,yAmplitude=20,yWavelength=60,yShift=0,warp=true}){


//     // if warp is false then it distorys
//     let data = imageData.data

//     let newImageData = new ImageData(imageData.width,imageData.height);
//     let nData = newImageData.data;

//     xAmplitude = Math.floor( mainImage.drawResFactor * xAmplitude );
//     xWavelength = Math.floor( mainImage.drawResFactor * xWavelength );
//     xShift = Math.floor( mainImage.drawResFactor * xShift );
    
//     yAmplitude = Math.floor( mainImage.drawResFactor * yAmplitude );
//     yWavelength = Math.floor( mainImage.drawResFactor * yWavelength );
//     yShift = Math.floor( mainImage.drawResFactor * yShift );


//     for(var y=0;y<imageData.height;y++){
//         for(var x=0;x<imageData.width;x++){
//             let i1 = xyToIndex(x,y,imageData.width);

//             let r = data[i1];
//             let g = data[i1+1];
//             let b = data[i1+2];
//             let a = data[i1+3];

//             let x2, y2;

//             if(!warp) {
//                 x2 = (x + (Math.sin(y/yWavelength)*yAmplitude))+yShift;
//                 y2 = (y + (Math.sin(x/xWavelength)*xAmplitude))+xShift;
//             } else {
//                 x2 = (x + (Math.sin(x/xWavelength)*xAmplitude))+xShift;
//                 y2 = (y + (Math.sin(y/yWavelength)*yAmplitude))+yShift;
//             }

//             x2 = Math.floor(x2)
//             y2 = Math.floor(y2)

//             if(x2 > imageData.width){
//                 x2 -= imageData.width
//             } else  if (x2 < 0){
//                 x2 += imageData.width
//             }

//             if(y2 > imageData.height){
//                 y2 -= imageData.height
//             } else if (y2 < 0){
//                 y2 += imageData.height
//             }

//             let i2 = xyToIndex(x2,y2,imageData.width);
 
//             nData[i2] = r
//             nData[i2+1] = g
//             nData[i2+2] = b
//             nData[i2+3] = a

//             if(x==20 && y==20){
//                 console.log(i1)
//                 console.log(x,y)
//                 console.log(x2,y2)
//                 console.log(i2)
//             }
            
//         }
//     }

    
//     newImageData = fillDisplacementGaps(newImageData)
//     newImageData = fillDisplacementGaps(newImageData)


//     console.log(newImageData)
//     return newImageData
// }


// export function RGBOffset(imageData,{}){

// }