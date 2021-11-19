import React, {useState} from 'react';

import { mainImage } from '../App';

const PreviewRes = ({refreshApp}) => {

    const [ previewRes,setPreviewRes ] = useState(mainImage.drawResFactor);

    const [ optionsExpanded, setOptionsExpanded ] = useState(false);

    const handleExpandButton = (e) => {
        setOptionsExpanded(!optionsExpanded);
    }

    const handleResButton = (e) => {
        let buttonVal = e.target.dataset.val;
        setPreviewRes(parseFloat(buttonVal));
        setOptionsExpanded(false);

        mainImage.drawResFactor = buttonVal;
        refreshApp();
    }

    return (
        <div className="Preview-Res Menu-Bar-Cont">
            <div className="Res-Button-Cont">
                <button className="Menu-Bar-Button" onMouseDown={handleExpandButton}>Preview Resolution: {previewRes}x
                    {/* <span>{previewRes}x</span> */}
                </button>
            </div>
            <div className={`Res-Options-Cont ${optionsExpanded ? "Res-Options-Expanded-True" : "Res-Options-Expanded-False"}`}>
                <button onMouseDown={handleResButton} data-val="1" >1x</button>
                <button onMouseDown={handleResButton} data-val="0.5" >0.5x</button>
                <button onMouseDown={handleResButton} data-val="0.25" >0.25x</button>
                <button onMouseDown={handleResButton} data-val="0.1" >0.1x</button>
                {/* <button data-val="1" >1x</button> */}
            </div>
            {/* <input type="" */}
        </div>
    )
}

export default PreviewRes