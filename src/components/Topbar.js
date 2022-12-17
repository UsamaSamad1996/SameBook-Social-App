import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import ChatIcon from "@mui/icons-material/Chat";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AuthContext } from "../contextAPI/AuthContext";
import { useContext } from "react";
import axios from "axios";
import Avatar2 from "../images/avatar.png";
// import { useNavigate } from "react-router-dom";
import {
  loginStart,
  loginFailure,
  loginSuccess,
} from "../contextAPI/AuthActions";

const Topbar = () => {
  //// Declarations

  const { user, dispatch } = useContext(AuthContext);
  const [popover, setPopOver] = useState(null);
  const open = Boolean(popover);
  // const history = useNavigate();

  /// Functions

  const handleClick = (e) => {
    setPopOver(e.currentTarget);
  };
  const handleClose = () => {
    setPopOver(null);
  };

  const logOut = (e) => {
    e.preventDefault();

    (async () => {
      dispatch(loginStart());
      try {
        const response = await axios.post("auth/login", {});
        dispatch(loginSuccess(response.data));
      } catch (error) {
        dispatch(loginFailure(error));
      }
    })();
  };

  ////// Return

  return (
    <div className="BodyofTopBar flex items-center bg-blue-500 p-4 h-20 fixed top-0 left-0 right-0 z-10">
      {/* TopBar Divided Into 3 Divisions - this is the !st div of App LOGO */}
      <div className="  text-5xl font-bold flex-auto ml-10 text-white">
        <Link to="/">SameBook</Link>
      </div>

      {/* TopBar Divided Into 3 Divisions - this is the 2nd div of Search Bar on TOpbar*/}
      <div className="flex-grow">
        <input
          className="w-4/5 rounded-3xl p-3 placeholder-slate-500"
          type="search"
          placeholder="Search friends & posts"
        />
        <SearchIcon className=" text-blue-500 ml-[-35px] " />
      </div>

      {/* TopBar Divided Into 3 Divisions - This is The 3rd Div & Last also */}
      <div className=" flex justify-evenly items-center flex-auto">
        {/* this is the div of HomeIcon On TopBar */}
        <Link to="/">
          <div className="homeIcon flex ">
            <HomeIcon
              style={{
                fontSize: "3rem",
              }}
              className="text-white"
            />
            <p className="text-white text-center  bg-red-500 rounded-full h-5 w-5 text-sm ml-[-15px] mt-[px] z-10">
              2
            </p>
          </div>
        </Link>
        {/* this is the div of Notification Icon On TopBar */}
        <div className="notificationIcon flex">
          <AddAlertIcon
            style={{
              fontSize: "3rem",
            }}
            className="text-white "
          />
          <p className="text-white text-center  bg-red-500 rounded-full h-5 w-5 text-sm ml-[-15px] mt-[px] z-10">
            1
          </p>
        </div>
        {/* this is the div of Chat Icon on TopBar */}
        <div className="chatIcon flex">
          <ChatIcon
            style={{
              fontSize: "3rem",
            }}
            className="text-white text-2xl "
          />
          {/* <p className="text-white text-center  bg-red-500 rounded-full h-5 w-5 text-sm ml-[-15px] mt-[px] z-10">
            3
          </p> */}
        </div>
        {/* this is the div of Profile Icon Link To User Profile Page on Topbar*/}
        <Link to={`/Profile/${user._id}`}>
          <div className="accountIcon">
            <img
              className="h-14 w-14 rounded-full object-cover border-2 border-white bg-white"
              src={user.profilePicture || Avatar2}
              alt="no poster"
            />
          </div>
        </Link>
        {/* this is the div of options Contain Logout PopOver on TopBar End*/}
        <div className="logout flex ml-[-20px] mr-[-20px]">
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon
                style={{
                  fontSize: "2.5rem",
                }}
                className="text-white text-2xl "
              />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={popover}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem> */}

              <MenuItem onClick={logOut}>LogOut</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
