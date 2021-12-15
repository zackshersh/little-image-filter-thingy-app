import React from 'react';

const InfoButton = (handler) => {
    return (
        <div className="Info-Button">
            <button onMouseDown={handler}></button>
        </div>
    )
}

export default InfoButton;