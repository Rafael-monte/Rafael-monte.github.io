import {React, Component} from "react"
import {FcFile} from 'react-icons/fc'
import './icon.css';
export default class FileIcon extends Component {
    render () {
        return (
        <div className="icon-container" style={{backgroundColor: this.props.bgColor}}>
            <FcFile size={50}></FcFile>
            <span className="icon-name">{this.props.folderName}</span>
        </div>
        )
    }
}