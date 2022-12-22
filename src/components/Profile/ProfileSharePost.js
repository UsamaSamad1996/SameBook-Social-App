import React, { useState, useRef } from "react";
import Avatar from "../../images/avatar.png";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import SendIcon from "@mui/icons-material/Send";
import { AuthContext } from "../../contextAPI/AuthContext";
import { useContext } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

////////////////////

const ProfileSharePost = ({ postuser }) => {
  //////////// Declarations

  const desc = useRef();
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [isSharing, setIsSharing] = useState(false);
  const navigate = useNavigate();

  ////////// Functions

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    setIsSharing(true);

    await axios.post("/posts", newPost);

    setIsSharing(false);

    desc.current.value = "";

    navigate("/");
  };

  //// Return

  return (
    <div>
      <div
        style={{ boxShadow: "8px 7px 6px 0px rgba(166,153,153,0.68)" }}
        className="shareBox flex flex-col p-5 border-2 border-slate-300 rounded-lg ml-5 mb-7 bg-white"
      >
        <form onSubmit={handleSubmit}>
          <div className="shareTop flex p-2 mb-2 flex-auto items-center">
            {" "}
            <img
              className="h-14 w-16 rounded-full object-cover border-2 border-blue-500"
              src={postuser.profilePicture || Avatar}
              alt="no poster"
            />
            {/* Create Post Text Input Field */}
            <textarea
              className="w-full rounded-3xl p-3 ml-5 bg-slate-200 placeholder-slate-600 focus:h-40 hover:outline-none  outline-none"
              name="post"
              type="text"
              placeholder={`Whats on your mind ${postuser.username}? Post Here!`}
              ref={desc}
              rows={1}
              cols={50}
              maxLength={1000}
              required
            />
          </div>

          <hr />

          {/*  Buttons Div  */}

          <div className="sharebottom flex pt-3 flex-wrap flex-auto items-center justify-evenly">
            {/* pictures uploading button  */}
            <div className="py-1 px-2 my-1  bg-blue-500 text-white text-lg font-semibold rounded-md flex items-center cursor-pointer">
              <label htmlFor="file" className="cursor-pointer">
                <WallpaperIcon />
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  accept=".png, .jpeg, .jpg, .mp3"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <span className="pl-2 ">Photo</span>
              </label>
            </div>
            {/* Videos uploading Button */}
            <div className="py-1 px-2 my-1  bg-blue-500 text-white text-lg font-semibold rounded-md flex items-center">
              <label htmlFor="file" className="cursor-pointer">
                <PermMediaIcon />
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  accept=".mp4"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <span className="pl-2 ">Video</span>
              </label>
            </div>
            {/* Songs uploading Button */}
            <div className="py-1 px-2 my-1  bg-blue-500 text-white text-lg font-semibold rounded-md flex items-center">
              <MusicNoteIcon />
              <label htmlFor="file" className="cursor-pointer">
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  accept=".mp3"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <span className="pl-2 ">Songs</span>
              </label>
            </div>
            {/* Post Share Button */}
            <button
              type="submit"
              className="py-1 px-2 my-1  bg-green-400 text-white text-lg font-semibold rounded-md flex items-center"
            >
              {" "}
              {isSharing ? (
                <div className="flex items-center justify-center">
                  <CircularProgress color="success" size="25px" />
                  <p className="pl-2 ">Sharing</p>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <SendIcon /> <p className="pl-2 ">Share</p>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSharePost;
