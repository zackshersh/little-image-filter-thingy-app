import React, {useEffect,useState} from "react";


const FileUpload = ({eventHandler}) => {


    const [uploaded,setUploaded] = useState(false);

    const [uploadedStr,setUploadedStr] = useState('No File Uploaded')

    const shortenString = (string, maxLength) => {
        if(string.length > maxLength){
            return string.substring(0,maxLength) + "..."
        } else {
            return string
        }
    }

    const handleChange = (e) => {
        eventHandler(e.target.files)
        setUploadedStr(shortenString(e.target.files[0].name, 48))
        setUploaded(true)
    }

    const handleUploadButton = () => {
        document.querySelector('#imageUpload').click()
    }


    

    return (
        <div className={`File-Upload ${uploaded ? 'File-Upload File-Upload-True' : 'File-Upload-False'}`}>
            <button onMouseDown={handleUploadButton}>Upload</button>
            <p>{uploadedStr}</p>
            <input style={{display:'none'}} onChange={handleChange} id="imageUpload" type="file" accept=".jpg, .png"></input>
        </div>
    )
}

export default FileUpload;