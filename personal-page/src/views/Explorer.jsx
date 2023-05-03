import {React, Component} from "react"
import ExplorerHeader from "../components/header/ExplorerHeader"
import './Explorer.css';
import SearchBar from "../components/search-bar/SearchBar";
import info from '../data/info.json'
import FolderIcon from "../components/icon/FolderIcon";
export default class Explorer extends Component {

    getInfos = () => {
        let folders = info.folders;
        let asJSX = folders.map((el, idx) => {
            return (
                <li key={idx}>
                    <FolderIcon folderName={el.folderName} content={el.content}></FolderIcon>
                </li>
            )
        })
        return asJSX
    }


    render = () => {
        return (
            <div className="content">
                <ExplorerHeader></ExplorerHeader>
                <SearchBar></SearchBar>
                <div className="icons">
                    <ul className="icons-list">
                        {this.getInfos()}
                    </ul>
                </div>
            </div>
        )
    }
}