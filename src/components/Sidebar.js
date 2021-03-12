import {
  Chat,
  ExpandMore,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import RojanTegrePhoto from "../images/rojan.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src={RojanTegrePhoto} title="Rojan Tegre" />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMore} title="See More" />
    </div>
  );
}

export default Sidebar;
