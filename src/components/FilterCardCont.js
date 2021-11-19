import React from "react";

import { invert, noise, saturation, exposure, threshold, gradientMap } from "../pixelFilters";
import { bitmap, pixelate } from "../blockFilters";

import InvertCard from "./filter-cards/InvertCard";
import SaturationCard from "./filter-cards/SaturateCard";

import { mainImage } from "../App";
import { ByPixelFilter, ByBlockFilter } from "../ImageFunctions";
import NoiseCard from "./filter-cards/NoiseCard";
import ExposureCard from "./filter-cards/ExposureCard";
import ThresholdCard from "./filter-cards/ThresholdCard";
import GradientMapCard from "./filter-cards/GradientMapCard";
import BitmapCard from "./filter-cards/BitmapCard";
import PixelateCard from "./filter-cards/PixelateCard";
import WaveCard from "./filter-cards/WaveCard";

const FilterCardCont = ({refreshApp}) => {

    console.log(mainImage)

    const filterCards = mainImage.activeFilters.map((filter,index) => {

        let operationType = filter.operation.name


        switch (operationType) {
            case 'invert':
                return (<InvertCard key={index} filter={filter} filterIndex={index} refreshApp={refreshApp} />);
            case 'saturation':
                return (<SaturationCard key={index} filter={filter} filterIndex={index} refreshApp={refreshApp}  />);
            case 'noise':
                return (<NoiseCard key={index} filter={filter} filterIndex={index} refreshApp={refreshApp}  />);
            case 'exposure':
                return (<ExposureCard key={index} filter={filter} filterIndex={index} refreshApp={refreshApp}  />);
            case 'threshold':
                return(<ThresholdCard key={index} filter={filter} filterIndex={index} refreshApp={refreshApp}  />);
            case 'gradientMap':
                return(<GradientMapCard key={index} filter={filter} filterIndex={index} refreshApp={refreshApp}  />);
            case 'bitmap':
                return(<BitmapCard key={index} filter={filter} filterIndex={index} refreshApp={refreshApp}  />);
            case 'pixelate':
                return(<PixelateCard key={index} filter={filter} filterIndex={index} refreshApp={refreshApp}  />);
            case 'wave':
                return(<WaveCard key={index} filter={filter} filterIndex={index} refreshApp={refreshApp} />);
            default:
                return (<div className="Filter-Card">Default Card</div>)
            
        }
    });

    console.log(filterCards)

    return (
        <div className="Filter-Card-Cont">
            {/* <button onMouseDown={refreshApp}>+</button>
            <button onMouseDown={() => {mainImage.addFilter(new ByBlockFilter(bitmap,{canvas: mainImage.canvas, blockScaleFactor:4, randomPattern: false}));refreshApp()}}>+</button> */}
            {filterCards}
        </div>
    )
}

export default FilterCardCont