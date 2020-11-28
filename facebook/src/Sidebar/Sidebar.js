import React from 'react';
import "./Sidebar.css";
import SideBarRow from './SideBarRow/SideBarRow';

function Sidebar() {
    return (
        <div className="sideBar">
            <SideBarRow />
            <SideBarRow />
            <SideBarRow />
            <SideBarRow />
        </div>
    )
}
export default Sidebar
