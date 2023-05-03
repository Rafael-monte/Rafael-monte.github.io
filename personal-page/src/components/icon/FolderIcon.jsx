import React from "react"
import {FcOpenedFolder} from 'react-icons/fc'
import './icon.css';
export default function FolderIcon(props) {
    var folderName=props.folderName ?? "unnamed"
    
    return(
        <div className="icon-container">
            <FcOpenedFolder size={50}></FcOpenedFolder>
            <span className="icon-name">{folderName}</span>
        </div>
    )
}