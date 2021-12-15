import React, {useState} from 'react';

import logoType from '../assets/image-filter-app.png';




const InfoModal = ({display, setDisplay}) => {
    return (
        <div style={{display:display}} className="Info-Modal">
            <div className="Info-Inner-Cont">
                <img src={logoType} />
                <p>This project was created by <a href="http://www.zack-is.online">Zack Hersh</a>. This application was created within the 
                    ReactJS framework and all source code can be found in this <a href="https://github.com/zackshersh/little-image-filter-thingy-app">github repository</a>.
                </p>
            </div>
        </div>
    )
}

export default InfoModal;