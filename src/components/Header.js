import React from "react";
import "./Header.css";
import facebookLogo from "../images/facebook.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import {
  NotificationsActive,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircleOutlined,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={facebookLogo} alt="facebook logo" />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <SubscriptionsOutlined />
        </div>
        <div className="header__option">
          <StorefrontOutlined />
        </div>
        <div className="header__option">
          <SupervisedUserCircleOutlined />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Rojan Tegre</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
