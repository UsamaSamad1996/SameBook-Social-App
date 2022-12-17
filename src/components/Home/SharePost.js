import React, { useRef, useState } from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contextAPI/AuthContext";
import Avatar from "../../images/avatar.png";

const SharePost = () => {
  /////////////////

  /// Description

  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  ////////// Functions

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //// Return

  return (
    <div>
      <div
        style={{ boxShadow: "8px 7px 6px 0px rgba(166,153,153,0.68)" }}
        className="shareBox flex flex-col p-5 border-2 border-slate-300 rounded-lg m-5 bg-white"
      >
        <form onSubmit={handleSubmit}>
          <div className="shareTop flex p-2 mb-2 flex-auto items-center">
            <Link to={`/Profile/${user._id}`}>
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
              placeholder={`Whats on your mind ${user.username}? Post Here!`}
              ref={desc}
            />
          </div>

          <div>
            <img src={file} alt="" />
          </div>
          <hr />

          <div className="sharebottom flex pt-3 flex-wrap flex-auto items-center justify-evenly">
            <div className="py-1 px-2 my-1  bg-blue-500 text-white text-lg font-semibold rounded-md flex items-center cursor-pointer">
              <label htmlFor="file" className="cursor-pointer">
                <WallpaperIcon />
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  accept=".png, .jpeg, .jpg"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <span className="pl-2 ">Photo</span>
              </label>
            </div>

            <button className="py-1 px-2 my-1  bg-blue-500 text-white text-lg font-semibold rounded-md flex items-center">
              <PermMediaIcon /> <p className="pl-2 ">Video</p>
            </button>
            <button className="py-1 px-2 my-1  bg-blue-500 text-white text-lg font-semibold rounded-md flex items-center">
              <MusicNoteIcon /> <p className="pl-2 ">Song</p>
            </button>
            <button
              type="submit"
              className="py-1 px-2 my-1  bg-green-400 text-white text-lg font-semibold rounded-md flex items-center"
            >
              <SendIcon /> <p className="pl-2 ">Share</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SharePost;
