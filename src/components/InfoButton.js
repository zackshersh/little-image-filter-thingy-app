import React from 'react';

const InfoButton = ({handler}) => {

    const handleClick = () => {
        handler('flex');
    }

    return (
        <div className="Info-Button">
            <button onMouseDown={handleClick}>?</button>
        </div>
    )
}

export default InfoButton;