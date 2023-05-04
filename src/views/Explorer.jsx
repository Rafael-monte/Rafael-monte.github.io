import {React, Component} from "react"
import ExplorerHeader from "../components/header/ExplorerHeader"
import './Explorer.css';
import SearchBar from "../components/search-bar/SearchBar";
import info from '../data/info.json'
import FolderIcon from "../components/icon/FolderIcon";
import FileIcon from "../components/icon/FileIcon";
export default class Explorer extends Component {


    state = {
        folders: [],
        infoFolders: []
    }

    getInfos = () => {
        let _folders = info.elements;
        let asJSX = _folders.map((el, idx) => {
            if (el.type === "file") {
                return (
                    <li key={idx} onClick={evt => this.changeOtherFolderColors(el.name)}>
                        <FileIcon folderName={el.name} content={el.content} bgColor={"inherit"}></FileIcon>
                    </li>
                )
            }
            return (
                <li key={idx} onClick={evt => this.changeOtherFolderColors(el.name)}>
                    <FolderIcon folderName={el.name} content={el.content} bgColor={"inherit"}></FolderIcon>
                </li>
            )
        })
        this.setState({
            folders: _folders,
            infoFolders: asJSX
        });
    }


    changeOtherFolderColors = (folderName) => {
        let _folders = this.state.folders.map((el, idx) => {
            if (el.type === "file") {
                return (
                    <li key={idx} onClick={evt => this.changeOtherFolderColors(el.name)}>
                            <FileIcon folderName={el.name} content={el.content} 
                            bgColor={el.name !== folderName? "inherit": "#1338BE"} onClick={evt => this.changeOtherFolderColors(el.name)}></FileIcon>
                    </li>
                )
            }
           return(
            <li key={idx} onClick={evt => this.changeOtherFolderColors(el.name)}>
                    <FolderIcon folderName={el.name} content={el.content} 
                    bgColor={el.name !== folderName? "inherit": "#1338BE"} onClick={evt => this.changeOtherFolderColors(el.name)}></FolderIcon>
            </li>
           ) 
        })
        this.setState({
            infoFolders: _folders
        });
    }

    componentDidMount() {
        this.getInfos();
    }

    render = () => {
        return (
            <div className="content">
                <ExplorerHeader></ExplorerHeader>
                <SearchBar></SearchBar>
                <div className="icons">
                    <ul className="icons-list">
                        {this.state.infoFolders}
                    </ul>
                </div>
            </div>
        )
    }
}