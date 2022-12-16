import React, { useState, useEffect } from "react";
import Avatar from "../../images/avatar.png";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import axios from "axios";

////////////////////

const ProfileSharePost = ({ id }) => {
  //////////// Declarations

  const [user, setUser] = useState({});

  ///// Functions

  useEffect(() => {
    (async () => {
      //get a user
      const response = await axios.get(`/users?userId=${id}`);
      console.log(response);
      if (!response.status === 200) throw Error("data not found");

      const resData = await response.data;
      setUser(resData);
    })();
  }, [id]);
  //// Return

  return (
    <div>
      <div
        style={{ boxShadow: "8px 7px 6px 0px rgba(166,153,153,0.68)" }}
        className="shareBox flex flex-col p-5 border-2 border-slate-300 rounded-lg ml-5 mb-5 bg-white"
      >
        <div className="shareTop flex p-2 mb-2 flex-auto items-center">
          <Link to="/Profile">
            {" "}
            <img
              className="h-14 w-16 rounded-full object-cover border-2 border-blue-500"
              src={user.profilePicture || Avatar}
              alt="no poster"
            />
          </Link>
          <input
            className="w-full rounded-3xl p-3 ml-5 bg-slate-200 placeholder-slate-600"
            type="text"
            placeholder="What's on Your Mind ??"
          />
        </div>
        <hr />
        <div className="sharebottom flex pt-3 flex-wrap flex-auto items-center justify-evenly">
          <button className="py-1 px-2 my-1  bg-blue-500 text-white text-lg font-semibold rounded-md flex items-center">
            <WallpaperIcon /> <p className="pl-2 ">Photo</p>
          </button>
          <button className="py-1 px-2 my-1  bg-blue-500 text-white text-lg font-semibold rounded-md flex items-center">
            <PermMediaIcon /> <p className="pl-2 ">Video</p>
          </button>
          <button className="py-1 px-2 my-1  bg-blue-500 text-white text-lg font-semibold rounded-md flex items-center">
            <MusicNoteIcon /> <p className="pl-2 ">Song</p>
          </button>
          <button className="py-1 px-2 my-1  bg-green-400 text-white text-lg font-semibold rounded-md flex items-center">
            <SendIcon /> <p className="pl-2 ">Share</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSharePost;
