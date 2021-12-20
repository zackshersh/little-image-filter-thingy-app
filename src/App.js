import React, {useEffect,useState} from "react";
import Canvas from "./components/Canvas";
import FileUpload from "./components/FileUpload";

import ImageDisplay from "./components/ImageDisplay";
import SettingSuite from "./components/SettingSuite"

import { waitASec } from "./utils";

import { Image, sizeCanv, applyFilters, AppliedFilter } from './ImageFunctions'
import ExportModal from "./components/ExportModal";
import InfoModal from "./components/InfoModal";


export let mainImage = new Image();
console.log('%cMAINIMAGE CREATED FROM CLASS','color:cyan')


function App() {

  const [refresh,setRefresh] = useState(0);

  const [exportDisplay, setExportDisplay] = useState('none');

  const [infoDisplay, setInfoDisplay] = useState('none');

  const refreshApp = () => {
    console.log('%c<<<<<<<< REFRESHING APP >>>>>>>>>','background-color:cyan;color:black')
    setRefresh(refresh + 1)
  }

  const imageUploaded = async (files) => {
    console.log(files)

    if(!files || !files[0]){
      console.log('%c NO FILES','color:white,background:red')
      return;
    }
    console.log(files[0])
    let newImg = document.createElement('img');
    newImg.src = URL.createObjectURL(files[0]);
    // document.querySelector("#root").appendChild(newImg)
    console.log(newImg.style)

    newImg.onload = function(){
      mainImage.setImage(newImg);
      console.log('%c IMAGE LOADED','color:cyan')

    }
  }

  console.log('%cAPP REFRESHING!!','color:red')

   
  useEffect(() => {
    console.log('%c USE EFFECT')
    mainImage.init(document.querySelector('.imageCanv'))

  })

  return (
    <div className="App">
      <ExportModal display={exportDisplay} setDisplay={setExportDisplay} />
      <InfoModal display={infoDisplay} setDisplay={setInfoDisplay}/>
      <div className="Image-Editor">
        <ImageDisplay refreshApp={refreshApp} setExportDisplay={setExportDisplay} setInfoDisplay={setInfoDisplay}/>
        <SettingSuite refreshApp={refreshApp} uploadHandler={imageUploaded} />
      </div>

      {/* <button style={{position:'absolute',bottom:"40px",left:"240px",backgroundColor:"yellow"}} onMouseDown={() => {setRefresh(refresh + 1);}}>Refresh</button> */}
      {/* <img style={{display:'none'}} id="placeholder-image" src="./clouds.jpg" /> */}
    </div>
  );
}

export default App;
