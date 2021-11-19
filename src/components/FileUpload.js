import React, {useEffect,useState} from "react";


const FileUpload = ({eventHandler}) => {


    const [uploaded,setUploaded] = useState(false);

    const [uploadedStr,setUploadedStr] = useState('No File Uploaded')

    const handleChange = (e) => {
        eventHandler(e.target.files)
        setUploadedStr(e.target.files[0].name)
        setUploaded(true)
    }

    const handleUploadButton = () => {
        document.querySelector('#imageUpload').click()
    }

    

    return (
        <div className={`File-Upload ${uploaded ? 'File-Upload File-Upload-True' : 'File-Upload-False'}`}>
            <button onMouseDown={handleUploadButton}>Upload</button>
            <p>{uploadedStr}</p>
            <input style={{display:'none'}} onChange={handleChange} id="imageUpload" type="file"></input>
        </div>
    )
}

export default FileUpload;