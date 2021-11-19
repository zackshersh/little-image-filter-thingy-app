import Canvas from "./components/Canvas"

export function waitASec(time){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            resolve('yuh')
        },time)
    })
}

export function lerp(a,b,t){
    return a + ((b-a)*t)
}

export function rndmInt(max){
    return Math.floor(Math.random()*(max))
}

export function rndmSign(){
    if(Math.random() > 0.5){
        return 1
    } else {
        return -1
    }
}

export function xyToIndex(x,y,w){
    return (y*(w*4))+(x*4)
}

export function dist(x1,y1,x2,y2){
    return Math.hypot(x2-x1,y2-y1);
}

export function fillPixelRect(imageData,x,y,w,h,[r,g,b,a]){
    let data = imageData.data;
    for(var y2=0;y2<h;y2++){
        for(var x2=0;x2<w;x2++){

            let i = xyToIndex(x+x2,y+y2,imageData.width);

            data[i] = r;
            data[i+1] = g;
            data[i+2] = b;
            data[i+3] = a;

        }
    }
}

export function easeIn(t){
    return t*t
}

export function easeOut(t){
    return 1 - Math.pow((1-t),2)
}


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
export function rgbToHex([r, g, b]) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    

    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
     ] : null;
}

export function fillDisplacementGaps(imageData){

    let data = imageData.data

    let newImageData = new ImageData(imageData.width,imageData.height);
    newImageData.data.set(data);
    let nData = newImageData.data;

    console.log('%cFILLING','color:orange')

    for(var y=0;y<imageData.height;y++){
        for(var x=0;x<imageData.width;x++){
            let i = xyToIndex(x,y,imageData.width);


            if(data[i+3] > 0){
                continue;
            }



            // console.log(i)
            // console.log(x)
            // console.log(xyToIndex(x+1,y,imageData.width))
            // console.log(x+1)


            if(data[xyToIndex(x+1,y,imageData.width)+3] > 0){
                let i2 = xyToIndex(x+1,y,imageData.width);
                nData[i] = data[i2]
                nData[i+1] = data[i2+1]
                nData[i+2] = data[i2+2]
                nData[i+3] = data[i2+3]
            } else if(data[xyToIndex(x,y+1,imageData.width)+3] > 0){
                let i2 = xyToIndex(x,y+1,imageData.width);
                nData[i] = data[i2]
                nData[i+1] = data[i2+1]
                nData[i+2] = data[i2+2]
                nData[i+3] = data[i2+3]
            } else if(data[xyToIndex(x+1,y+1,imageData.width)+1] > 0){
                let i2 = xyToIndex(x+1,y+1,imageData.width);
                nData[i] = data[i2]
                nData[i+1] = data[i2+1]
                nData[i+2] = data[i2+2]
                nData[i+3] = data[i2+3]
            }
        }
    }


    return newImageData
}