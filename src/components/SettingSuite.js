import React from "react";

import FileUpload from "./FileUpload";
import AddFilter from "./AddFilter";
import FilterCardCont from "./FilterCardCont";

const SettingSuite = ({uploadHandler,refreshApp}) => {
    return (
        <div className="Setting-Suite">
            <FileUpload eventHandler={uploadHandler} />
            <FilterCardCont refreshApp={refreshApp} />
        </div>
    )
}

export default SettingSuite