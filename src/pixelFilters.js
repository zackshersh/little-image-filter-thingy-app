
import { lerp, rndmInt, rndmSign } from "./utils"


export function invert(pixel){
    let r = 255 - pixel[0]
    let g = 255 - pixel[1]
    let b = 255 - pixel[2]
    let a = pixel[3]
    return [Math.floor(r),Math.floor(g),Math.floor(b),Math.floor(pixel[3])];
}

export function exposure(pixel,{value=40}){
    let r = pixel[0] + value;
    let g = pixel[1] + value;
    let b = pixel[2] + value;
    let a = pixel[3];
    return [r,g,b,a]
}

export function threshold(pixel,{cutoff=120}){
    let avg = (pixel[0]+pixel[1]+pixel[2])/3;
    if(avg > cutoff){
        return [255,255,255, pixel[3]]
    } else {
        return [0,0,0,255, pixel[3]]
    }
}

export function gradientMap(pixel,{darkColor=[0,0,0],lightColor=[255,255,255]}){

    // darkColor will replace the darkest parts of the original image, light will do the lightest

    let avg = (pixel[0]+pixel[1]+pixel[2])/3
    
    let avgNormalized = avg/255;

    let r = lerp(darkColor[0],lightColor[0],avgNormalized);
    let g = lerp(darkColor[1],lightColor[1],avgNormalized);
    let b = lerp(darkColor[2],lightColor[2],avgNormalized);

    return [Math.floor(r),Math.floor(g),Math.floor(b),Math.floor(pixel[3])];

}

export function noise(pixel,{max=50,monochromatic=true}){


    if(monochromatic){
        let rndmVal = rndmInt(max) * rndmSign()

        let r = pixel[0] + rndmVal
        let g = pixel[1] + rndmVal
        let b = pixel[2] + rndmVal
        return [Math.floor(r),Math.floor(g),Math.floor(b),Math.floor(pixel[3])];
    } else {
        let r = pixel[0] + (rndmInt(max) * rndmSign())
        let g = pixel[1] + (rndmInt(max) * rndmSign())
        let b = pixel[2] + (rndmInt(max) * rndmSign())

        return [Math.floor(r),Math.floor(g),Math.floor(b),Math.floor(pixel[3])];
    }
    let r = pixel[0] + rndmInt(max)
}

export function saturation(pixel,{amount=3}){

    let r = pixel[0]
    let g = pixel[1]
    let b = pixel[2]
    let grayVal = (r+g+b)/3

    let blendR = lerp(grayVal,r,amount)
    let blendG = lerp(grayVal,g,amount)
    let blendB = lerp(grayVal,b,amount)

    return [Math.floor(blendR),Math.floor(blendG),Math.floor(blendB),Math.floor(pixel[3])];
}


