import React from 'react';
import "./Sidebar.css";
import SideBarRow from './SideBarRow/SideBarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from "@material-ui/icons";

function Sidebar() {
    return (
        <div className="sideBar">
            <SideBarRow src='https://avatars2.githubusercontent.com/u/56686827?
            s=400&u=4667f93156350bd84939c66a48a67e2
            ff359a0e2&v=4' title='Prashant Srivastava'/>
            <SideBarRow 
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"
            />
            <SideBarRow 
                Icon={EmojiFlagsIcon}
                title="Pages"
            />
            <SideBarRow 
                Icon={PeopleIcon}
                title="Friends"
            />
            <SideBarRow 
                Icon={ChatIcon}
                title="Messenger"
            />
            <SideBarRow 
                Icon={StorefrontIcon}
                title="Marketplace"
            />
            <SideBarRow 
                Icon={VideoLibraryIcon}
                title="Videos"
            />
            <SideBarRow 
                Icon={ExpandMoreOutlined}
                title="Marketplace"
            />
        </div>
    )
}
export default Sidebar
