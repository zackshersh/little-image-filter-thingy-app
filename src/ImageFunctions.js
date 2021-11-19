
import { act } from "@testing-library/react";
import { invert } from "./pixelFilters";
import * as pixelFilters from './pixelFilters';
import * as blockFilters from './blockFilters';
import * as displacementFilters from './displacementFilters';

import * as cnsl from './consoleUtils'

export class Image {
    constructor(){
        this.canvas = null;
        this.w = 400;
        this.h = 400;
        this.image = null;
        this.activeFilters = [];
        this.filtersCompiled = [];
        this.renderWorkers = [];
        this.drawCountdown = 500;
        this.drawInterval = null;
        this.drawResFactor = 0.5;


    }

    init(canvas){

        this.canvas = canvas
        console.log('%c Initializing Image Object','background-color:orange;color:black')
        console.log('%c                             ','background-color: orange;color:black;width:200px;white-space:prewrap;')
        console.log(this);
        console.log('%c                             ','background-color: orange;color:black;width:200px;white-space:prewrap')

        this.ctx = this.canvas.getContext('2d');

        this.setCanvas();

        let numOfWorkers = 4;
        this.renderWorkers = [];

        // this.addFilter(new ByPixelFilter(pixelFilters.invert,{}));
        // this.addFilter(new ByPixelFilter(pixelFilters.exposure,{value:30}));
        // this.addFilter(new ByPixelFilter(pixelFilters.threshold,{cutoff:200}));
        // this.addFilter(new ByPixelFilter(pixelFilters.gradientMap,{lightColor:[255,0,0],darkColor:[0,0,50]}));
        // this.addFilter(new ByPixelFilter(pixelFilters.saturation,{amount:10}));
        // this.addFilter(new ByPixelFilter(pixelFilters.noise,{max:100,monochromatic:false}));

        // this.addFilter(new ByBlockFilter(displacementFilters.wave,{canvas:this.canvas,xAmplitude:200,xWavelength:120,yAmplitude:12,yWavelength:200}));
        // this.addFilter(new ByBlockFilter(blockFilters.voronoi,{numOfPoints:124}));
        // this.addFilter(new ByBlockFilter(blockFilters.bitmap,{canvas:this.canvas,blockScaleFactor:4}))
        // this.addFilter(new ByPixelFilter(pixelFilters.gradientMap,{darkColor:[0,0,100],lightColor:[255,240,255]}))

        console.log('%cTHIS.IMAGE --------------','color:orange');
        console.log(this.image);
        console.log('%c ------------------------','color:orange')

        this.compileFilters()

        if(this.image){
            this.draw()
        }
    }

    // startDrawCountdown(){
    //     this.drawInterval = setInterval(() => {
    //         this.drawCountdown -= 10;

    //         if(this.drawCountdown < )
    //     },10)
    // }

    clearFilters(){
        this.filters = [];
    }

    addFilter(activeFilter){
        console.log('ADDING FILTER')
        this.activeFilters.push(activeFilter);
        this.compileFilters()
    }
    
    removeFilter(filterIndex){
        this.activeFilters.splice(filterIndex,1);
        this.compileFilters();
    }

    compileFilters(){
        this.filtersCompiled = [];

        
        // goes through every active filter
            // if filter is byPixel it batches them together because they can be run in sequence for each pixel (don't need to loop through for every byPixelFilter)
            // if filter is byBlock it pushes array of the previously batched pixel filters in filtersCompiled and then pushes itself into filtersCompiled
        let byPixelFilterBatch = [];
        
        this.activeFilters.forEach(filter => {
            let type = filter.constructor.name;

            if(!filter.active){
                return;
            }

            if(type == "ByPixelFilter"){
                byPixelFilterBatch.push(filter)
            } else if (type == "ByBlockFilter"){
                if(byPixelFilterBatch.length > 0){
                    this.filtersCompiled.push(byPixelFilterBatch);
                    byPixelFilterBatch = [];
                }

                this.filtersCompiled.push(filter)
            }
        })

        if(byPixelFilterBatch.length > 0){
            this.filtersCompiled.push(byPixelFilterBatch);
            byPixelFilterBatch = []
        }
        
    }


    setImage(img){
        console.log('%c Image Set','color:orange')
        this.image = img;

        this.canvas.style.width = '50vw';

        let imgStyles = getComputedStyle(this.image);

        let w = imgStyles.width;
        let h = imgStyles.height;

        let totalPixels = w*h;


        this.setCanvas();
        this.draw();
    }

    setCanvas(){

        if(this.image){

            this.w = this.image.width*this.drawResFactor;
            this.h = this.image.height*this.drawResFactor;

            this.canvas.width = this.w;
            this.canvas.height = this.h;

        } else {
            this.canvas.width = this.w;
            this.canvas.height = this.h;

        }
    
        // this.canvas.style.width = "50vw"

    }

    drawDefault(){
        this.ctx.fillStyle = 'rgb(170,170,170)';
        this.ctx.beginPath();
        this.ctx.fillRect(0,0,this.w,this.h);
        this.ctx.closePath()
    }

    draw(finalRender){

        // console.log(this.w,this.h)

        if(!this.image){
            return
        }

        this.compileFilters()

        let performanceStart = performance.now()
        console.log('%c DRAWIMG IMAGE','color:orange;')
        this.ctx.beginPath();
        this.ctx.fillStyle = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
        this.ctx.fillRect(0,0,this.image.width,this.image.height);
        this.ctx.closePath();

        this.ctx.drawImage(this.image,0,0,this.w,this.h);


        if(this.filtersCompiled.length > 0){
            let filteredData = this.applyFilters();
            // console.log(filteredData)
            this.ctx.putImageData(filteredData,0,0)
        }

        let performanceStop = performance.now();
        console.log(`%cIMAGE DRAWN WITH ${this.activeFilters.length} FILTERS \n IN ${(performanceStop-performanceStart)/1000} SECONDS`,'background-color:yellow;color:black;padding:3px')
    }

    applyFilters(){
        // let data = imageData.data;

        let imageData = this.ctx.getImageData(0,0,this.w,this.h)

        //previous val will be the imageData provided as a reduce argument in first iteration, after that it will be image data returned from previous interation
            // reducer function will always return the imageData
        //current val will be the current grouping
        
        const reducerFunction = (previousVal,currentVal) => {

            let newImageData = previousVal;
            let newData = newImageData.data;

            if(currentVal instanceof Array){
                for(var i=0;i<newData.length;i+=4){
                    let pixel = [newData[i],newData[i+1],newData[i+2],newData[i+3]];

                    currentVal.forEach(filter => {
                        pixel = filter.operation(pixel,filter.options)
                    })


                    newData[i] = pixel[0]
                    newData[i+1] = pixel[1]
                    newData[i+2] = pixel[2]
                    newData[i+3] = pixel[3]
                    
                }

                return newImageData;

            } else {

                let blockFilteredData = currentVal.operation(newImageData,currentVal.options)

                return blockFilteredData
            }

            return 'hello'
        }



        return this.filtersCompiled.reduce(reducerFunction,imageData)


    }

    exportImage(filename,scale,format,jpegQuality){
        console.log('%cEXPORTING IMAGE','background-color:orange;color:black');

        let prevResFacSave = this.drawResFactor;

        this.drawResFactor = scale/100;
        this.setCanvas()
        // console.log(this.drawResFactor)
        this.draw()

        this.renderToImg(filename,format,jpegQuality);

        this.drawResFactor = prevResFacSave;
        this.setCanvas();
        this.draw();
    }

    renderToImg(filename,format,jpegQuality){


        let prevImg = document.querySelector('#draw-output')
        if(prevImg){
            prevImg.remove();
        }

        let imageElem = document.createElement('img');
        imageElem.id = "draw-output";
        imageElem.style.display = 'none';
        
        let blob;

        function blobCallback(blob){
            let a = document.createElement('a');
            a.style.display = 'none';

            let url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = filename
            a.click();
        }

        if(format == 'jpeg'){
            this.canvas.toBlob(blobCallback,'image/jpeg',jpegQuality);
        } else {
            this.canvas.toBlob(blobCallback,'image/png');
        }

    
        // let url = window.URL.createObjectURL(blob);
        // console.log(url)

        // imageElem.src = blob;

        // document.querySelector('.App').appendChild(imageElem)

        // console.log(imageElem)
    }


}

export const sizeCanv = (img,canv) => {
    canv.width = img.width;
    canv.height = img.height;

    if(img.width >= img.height){
        canv.style.width = "60vw"
        canv.style.height = "auto"
    } else {
        canv.style.height = "60vw"
        canv.style.width = "auto"

    }
}

 


export class ByPixelFilter{
    constructor(operation,options){
        this.operation = operation;
        this.options = options;
        this.active = true;
    }
}

export class ByBlockFilter{
    constructor(operation,options){
        this.operation = operation;
        this.options = options;
        this.active = true;
    }
}