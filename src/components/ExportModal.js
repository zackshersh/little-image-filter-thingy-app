import React, {useState, useEffect} from "react";

import Input from "./Input";
import Select from "./Select";

import { mainImage } from "../App";
import Slider from "./Slider";

const ExportModal = ({display, setDisplay}) => {


    const [exportSize, setExportSize] = useState(100);

    const [pixelSize, setPixelSize] = useState('1000x1000');

    const [format, setFormat] = useState('png');

    const [jpegQuality, setJpegQuality] = useState(1.0);

    const [filename,setFilename] = useState('filtered-image')


    useEffect(() => {
        updatePixelSize()
    })
    
    const updatePixelSize = () => {
        let fullW = mainImage.w/mainImage.drawResFactor;
        let fullH = mainImage.h/mainImage.drawResFactor;
    
        let sizedW = Math.floor(fullW*(exportSize/100));
        let sizedH = Math.floor(fullH*(exportSize/100));

        setPixelSize(`${sizedW}px x ${sizedH}px`)

    }

    const handleSizeInput = (e) => {
        // console.log(e.target.value)

        if(e.target.value){

            let val = e.target.value.slice(0,e.target.value.length-1);

            if(val){
                setExportSize(parseInt(val))
            } else {
                setExportSize(0)
            }

        } else {
            setExportSize(0)
        }
    }

    const handleFormatChange = (e) => {
        setFormat(e.target.value);

    }

    const handleJpegQuality = (e) => {
        setJpegQuality(parseFloat(e.target.value))

    }

    const handleFilename = (e) => {
        setFilename(e.target.value);

    }

    const ifJpeg = () => {
        if(format == 'jpeg'){
            return <Slider handler={handleJpegQuality} max={1} min={0.01} step={0.01} value={1} title={'JPEG Compression Quality'}  />
        }
    }

    const handleXOut = () => {
        setDisplay('none')
    }


    const handleExport = () => {
        mainImage.exportImage(filename,exportSize,format,jpegQuality);

        setDisplay('none')
    }


    return (
        <div style={{display: display}} className="Export-Modal">
            <div className="Export-Inner-Cont">
                {/* <button onMouseDown={handleXOut}>X</button> */}
                <h1>Export</h1>
                <div className="Export-Settings-Cont">
                    <div className="Export-Setting-Group">
                        <h3>Image Size</h3>
                        <Input size="Small" handler={handleSizeInput} value={exportSize} title="% of Original Size" suffix="%" extraText={pixelSize}/>
                    </div>
                    <div className="Export-Setting-Group">
                        <h3>Format</h3>
                        <Select handler={handleFormatChange} options={['png','jpeg']} title="Select an Image Format"/>
                        {ifJpeg()}
                    </div>
                    <div className="Export-Setting-Group">
                        <h3>Filename</h3>
                        <Input size="X-Large" handler={handleFilename} value={filename} title="filename" />
                    </div>
                </div>
                <button onMouseDown={handleExport}>{"Export & Download"}</button>
            </div>
        </div>
    )
}

export default ExportModal;