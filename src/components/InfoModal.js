import React, {useState} from 'react';

import logoType from '../assets/image-filter-app.png';




const InfoModal = ({display, setDisplay}) => {

    const handleX = () => {
        setDisplay('none');
    };

    return (
        <div style={{display:display}} className="Info-Modal">
            <div className="Info-Inner-Cont">
                <button className="X-Out" onMouseDown={handleX}>X</button>
                <img src={logoType} />
                <i>v 1.0.0</i>
                <p><i>Little Image Filter Web App Thingy</i> is a web app designed to allow users to upload images and apply a series of filters to 
                create customizable effects</p>
                <p>This project was created by <a href="http://www.zack-is.online">Zack Hersh</a>. This application was created within the 
                    ReactJS framework and all source code can be found in this <a href="https://github.com/zackshersh/little-image-filter-thingy-app">github repository</a>.
                </p>
            </div>
        </div>
    )
}

export default InfoModal;