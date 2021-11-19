import React, {useState, useEffect} from "react";


import { ByBlockFilter, ByPixelFilter } from "../ImageFunctions";
import { invert, exposure, saturation, gradientMap, noise, threshold } from '../pixelFilters';
import { pixelate, bitmap } from "../blockFilters";
import { wave } from "../displacementFilters";

import { mainImage } from "../App";

import FilterOption from "./FilterOption";

const AddFilter = ({refreshApp}) => {

    const [expanded,setExpanded] = useState(false);
    const [width,setWidth] = useState('100%');
    const [height,setHeight] = useState(0);
    const [padding,setPadding] = useState(0);

    const handleExpand = () => {
        if(expanded){
            setWidth('100%')
            setHeight(0)
            setPadding(0)
            document.querySelector('.AF-Button').textContent = "Filters +"
            setExpanded(false)
        } else {
            setWidth('100%');
            setHeight('auto');
            setPadding(24);
            document.querySelector('.AF-Button').textContent = "Filters -"
            // setTop('0px');
            // setLeft('0px')
            setExpanded(true);
        }
    }

    const handleFilterOption = (e) => {
        console.log(e.target.dataset.filter)
        handleExpand()

        let allFilters = [invert,exposure,saturation,gradientMap,noise,threshold,pixelate,bitmap,wave];
        let filterNames = ["invert","exposure","saturation","gradientMap","noise","threshold","pixelate","bitmap","wave"];

        console.log(e.target.dataset)
        let defaultOptions = JSON.parse(e.target.dataset.options)
        allFilters.forEach((filter,index) => {
            // console.log(filterNames[index])
            // console.log(e.target.dataset.filter)
            if(e.target.dataset.filter == filterNames[index]){
                let tc = e.target.textContent.toLowerCase()
                console.log('FILTER MATCHED = ' + filterNames[index]);
                if(tc == 'bitmap' || tc == 'pixelate' || tc=='wave'){
                    mainImage.addFilter(new ByBlockFilter(filter,filterNames[index],{...defaultOptions}))
                } else {
                    mainImage.addFilter(new ByPixelFilter(filter,filterNames[index],{...defaultOptions}))

                }
                console.log(mainImage.activeFilters)
            }
        })

        refreshApp()

 
    }

    
    // let borderRadius;
    
    // useEffect(() => {
    //     console.log(document.querySelector('.Add-Filter-Button'))
    //     borderRadius = getComputedStyle(document.querySelector('.AF-Button')).borderRadius;
    //     console.log(borderRadius)
    // })

    return (
        <div className="Add-Filter Menu-Bar-Cont">
            <div className="Add-Filter-Button">
                <button className="AF-Button Menu-Bar-Button" onMouseDown={handleExpand}>Filters +</button>
            </div>
            <div style={{width:width,height:height,paddingBottom:padding,paddingTop:padding*2}} className="Add-Filter-Options">
                <FilterOption handler={handleFilterOption} filter={bitmap} name="bitmap" title={'Bitmap'} defaultOptions={JSON.stringify({blockScaleFactor:4,randomPattern:false})} />
                <FilterOption handler={handleFilterOption} filter={exposure} name="exposure" title={'Exposure'} defaultOptions={JSON.stringify({value:40})}/>
                <FilterOption handler={handleFilterOption} filter={gradientMap} name="gradientMap" title={'Gradient Map'} defaultOptions={JSON.stringify({darkColor:[0,0,255],lightColor:[255,255,255]})}/>
                <FilterOption handler={handleFilterOption} filter={invert} name="invert" title={'Invert'} defaultOptions={JSON.stringify({filler:1})}/>
                <FilterOption handler={handleFilterOption} filter={noise} name="noise" title={'Noise'} defaultOptions={JSON.stringify({max:100,monochromatic:true})}/>
                <FilterOption handler={handleFilterOption} filter={pixelate} name="pixelate" title={'Pixelate'} defaultOptions={JSON.stringify({pixelWidth:12})}/>
                <FilterOption handler={handleFilterOption} filter={saturation} name="saturation" title={'Saturation'} defaultOptions={JSON.stringify({amount:3})}/>
                <FilterOption handler={handleFilterOption} filter={threshold} name="threshold" title={'Threshold'} defaultOptions={JSON.stringify({cutoff:120})}/>
                <FilterOption handler={handleFilterOption} filter={wave} name="wave" title={'Wave'} defaultOptions={JSON.stringify({xAmplitude:20,xWavelength:120,xShift:0,yAmplitude:20,yWavelength:60,yShift:0,warp:false})}/>
            </div>
        </div>
    )
};

export default AddFilter

