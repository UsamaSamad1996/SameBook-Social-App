import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import ChatIcon from "@mui/icons-material/Chat";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="flex items-center bg-sky-400 p-4 h-20 fixed top-0 left-0 right-0 z-10">
      <div className="  text-5xl font-bold flex-auto ml-10 text-white">
        <Link to="/Home">SameBook</Link>
      </div>

      <div className="flex-grow">
        <input
          className="w-4/5 rounded-3xl p-3 placeholder-slate-500"
          type="search"
          placeholder="Search friends & posts"
        />

        <SearchIcon
          style={{
            position: "absolute",
            top: "30",
            left: "1000",
          }}
          className=" text-sky-400 "
        />
      </div>

      <div className=" flex justify-evenly items-center flex-auto">
        <Link to="/Home">
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
        <div className="chatIcon flex">
          <ChatIcon
            style={{
              fontSize: "3rem",
            }}
            className="text-white text-2xl "
          />
          <p className="text-white text-center  bg-red-500 rounded-full h-5 w-5 text-sm ml-[-15px] mt-[px] z-10">
            3
          </p>
        </div>
        <Link to="/Profile">
          <div className="accountIcon">
            <img
              className="h-14 w-14 rounded-full object-cover border-2 border-white"
              src={require("../images/usama.jpg")}
              alt="no poster"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
