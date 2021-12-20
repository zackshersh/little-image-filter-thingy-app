
import { xyToIndex, fillPixelRect, rndmInt, fillDisplacementGaps, dist } from "./utils";

import { mainImage } from "./App";



export function pixelate(imageData,{pixelWidth=12,pixelsPerRow}){

    let data = imageData.data

    let newImageData = new ImageData(imageData.width,imageData.height);
    let nData = newImageData.data;
    
    let widthPerPixel = 8

    if(pixelWidth){
        widthPerPixel = pixelWidth
    } else if (pixelsPerRow){
        widthPerPixel = Math.floor(imageData.width/pixelsPerRow)
    }

    widthPerPixel = Math.floor(widthPerPixel * mainImage.drawResFactor)

    // two for loops get position of every big pixel
    for(var y=0;y<imageData.height;y+=widthPerPixel){
        for(var x=0;x<imageData.width;x+=widthPerPixel){

            let index = xyToIndex(x,y,imageData.width);
            let bigPixelValues = [data[index],data[index+1],data[index+2],data[index+3]];
            
            fillPixelRect(newImageData,x,y,widthPerPixel,widthPerPixel,[...bigPixelValues])
        }
    }
    
    console.log(document.event)

    return newImageData

}

export function bitmap(imageData,{canvas,blockScaleFactor=2,randomPattern=false}){
    let data = imageData.data;

    let newImageData = new ImageData(imageData.width,imageData.height);
    let nData = newImageData.data;


    let pattern = [
        0,8,2,10,
        12,4,14,6,
        13,11,1,9,
        15,7,13,5
    ]

    blockScaleFactor = Math.floor(blockScaleFactor * mainImage.drawResFactor);

    if(blockScaleFactor < 1){
        blockScaleFactor = 1;
    }

    let patternW = Math.sqrt(pattern.length);


    for(var y=0;y<imageData.height;y+=patternW*blockScaleFactor){
        for(var x=0;x<imageData.width;x+=patternW*blockScaleFactor){

            if(randomPattern){
                pattern = []
                let nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
                let len = nums.length;
                for(var i=0;i<len;i++){
                    let index = rndmInt(nums.length);
                    pattern.push(nums[index]);
                    nums.splice(index,1)
                }
            } 


            let index = xyToIndex(x,y,imageData.width);

            let r = data[index];
            let g = data[index+1];
            let b = data[index+2];
            let a = data[index+3];

            let brightness = (r+g+b)/3

            let mappedBrightness = Math.floor((brightness/255)*pattern.length);

            let patternIndex = 0;

            // if(y==0 && x<=20){
            //     console.log('..........')
            //     console.log(x,y)
            //     console.log('brightness:', brightness)
            //     console.log('mappedBrightness:', mappedBrightness)
            // }
            for(var y2=0; y2<(patternW*blockScaleFactor); y2+=blockScaleFactor){
                for(var x2=0; x2<(patternW*blockScaleFactor); x2+=blockScaleFactor){

                    if(pattern[patternIndex] < mappedBrightness){
                        fillPixelRect(newImageData, x+x2, y+y2, blockScaleFactor, blockScaleFactor, [255,255,255,a])
                    } else {
                        fillPixelRect(newImageData, x+x2, y+y2, blockScaleFactor, blockScaleFactor, [0,0,0,a])

                    }


                    patternIndex++;
                }
            }

        }

    }



    console.log('%cBITMAP COMPLETE','color:rgb(0,255,0)')

    return newImageData;


}


export function voronoi(imageData, {numOfPoints=120}){

    let w = imageData.width;
    let h = imageData.height;

    let data = imageData.data;

    let newImageData = new ImageData(imageData.width,imageData.height);
    let nData = newImageData.data;

    let grid = [];

    let squaresPerSide = 10;

    let squareW = Math.floor(w/squaresPerSide)
    let squareH = Math.floor(h/squaresPerSide)

    for(var i=0;i<squaresPerSide;i++){

        let row = []

        for(var j=0;j<squaresPerSide;j++){
            row.push([])
        }

        grid.push(row)
    }

    console.log(grid)
    

    let points = [];



    //generate points
    for(var i=0;i<numOfPoints;i++){
        let x = rndmInt(w);
        let y = rndmInt(h);

        let index = xyToIndex(x,y,w);
        let color = {r:data[index],g:data[index+1],b:data[index+2],a:data[index+3]};

        let gridX = Math.floor(x/squareW);
        let gridY = Math.floor(y/squareH);

        grid[gridX][gridY].push({x:x, y:y, r:color.r, g:color.g, b:color.b, a:color.a})

        // points.push({x:x, y:y, r:color.r, g:color.g, b:color.b, a:color.a});
    }

    console.log(grid)

    console.log(points)

    for(var y=0;y<h;y++){
        for(var x=0;x<w;x++){
            let index = xyToIndex(x,y,w);

            let closestDistYet = 2000;
            let closestColor = [255,0,0,255];

            let surroundingPoints = [];

            let xOnGrid = Math.floor(x/squareW);
            let yOnGrid = Math.floor(y/squareH);

            
            if(grid[xOnGrid][yOnGrid]){
                console.log(grid[xOnGrid][yOnGrid])
                surroundingPoints.push(...grid[xOnGrid][yOnGrid]);
            }

            if(x==20 && y==20){
                console.log(surroundingPoints)
            }

            points.forEach(point => {
                let distance = dist(x,y,point.x,point.y);
                if(distance < closestDistYet){
                    closestDistYet = distance;
                    closestColor = [point.r,point.g,point.b,point.a];
                }
            })

            nData[index] = closestColor[0];
            nData[index+1] = closestColor[1];
            nData[index+2] = closestColor[2];
            nData[index+3] = closestColor[3];
        }
    }


    return newImageData;
    
}