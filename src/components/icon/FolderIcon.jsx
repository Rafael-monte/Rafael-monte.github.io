import {React, Component} from "react"
import {FcOpenedFolder} from 'react-icons/fc'
import './icon.css';
export default class FolderIcon extends Component {
    render () {
        return (
        <div className="icon-container" style={{backgroundColor: this.props.bgColor}}>
            <FcOpenedFolder size={50}></FcOpenedFolder>
            <span className="icon-name">{this.props.folderName}</span>
        </div>
        )
    }
}