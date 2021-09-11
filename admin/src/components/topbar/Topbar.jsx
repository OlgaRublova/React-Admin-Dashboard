import React from "react";
import "./topbar.css";
import {NotificationsNone, Language, Settings} from "@material-ui/icons";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">lamaadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_ow77J7HMGhm_jF8OxE74ej0ixwGQV0G1bIqHCur5KVoFgsPOeYaGfy7I1VopOXv6fQ&usqp=CAU"
                        alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    );
};


export default Topbar;




