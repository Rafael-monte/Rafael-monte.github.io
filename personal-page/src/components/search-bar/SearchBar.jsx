import React from "react";
import './SearchBar.css';
import {FcOpenedFolder} from 'react-icons/fc'

export default function SearchBar(props) {
    const DEFAULT_PATH="~/Documents/apresentacao"
    var path = props.path ?? DEFAULT_PATH;
    console.log(path);

    return (
        <div className="bar">
            <FcOpenedFolder size={30}></FcOpenedFolder>
            <h3 id="path">{path}</h3>
        </div>
    );
}