import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../images/usama.jpg";
import postImage from "../../images/messi2.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import SendIcon from "@mui/icons-material/Send";

// import SRK from "../../images/camel.avif";
import Vidyut from "../../images/vidyut.jpg";
// import Rock from "../../images/rock.jpg";
import Heart from "../../images/hearts.png";
import Likes from "../../images/likes.png";

//////

const Posts = () => {
  return (
    <div>
      <div
        style={{ boxShadow: "8px 7px 6px 0px rgba(166,153,153,0.68)" }}
        className="shareBox flex flex-col p-5 border-2 border-slate-300 rounded-lg m-5"
      >
        <div className="shareTop flex p-2 mb-2 flex-auto items-center">
          <Link to="/Profile">
            {" "}
            <img
              className="h-14 w-14 rounded-full object-cover border-2 border-sky-300"
              src={profileImage}
              alt="no poster"
            />
          </Link>
          <p className="text-xl font-semibold pl-3 ">
            Usama Samad <br />{" "}
            <span className="text-sm font-normal ">Yesterday at 5:22 PM</span>
          </p>
          <div className=" flex flex-auto justify-end">
            <MoreVertIcon style={{ fontSize: "2rem" }} />
          </div>
        </div>

        <div className="description p-1 text-lg">
          <p>
            Trust me, your favorite player never reached this level and never
            will. Trust me, your favorite player never reached this level and
            never will. Trust me, your favorite player never reached this level
            and never will. <br />
            Trust me, your favorite player never reached this level and never
            will.
          </p>
        </div>
        <div className="image">
          <img
            className="object-fill bg-black"
            style={{ height: "80%", width: "100%" }}
            src={postImage}
            alt="Messi"
          />
        </div>
        <div className="likesComment flex py-2 ">
          <div className="likes flex ml-2 items-center justify-center">
            <img
              className="h-8 w-8 rounded-full object-fill "
              src={Likes}
              alt="Likes"
            />{" "}
            <img
              className="h-8 w-8 rounded-full object-fill "
              src={Heart}
              alt="Hearts"
            />{" "}
            <p className="pl-2 text-lg text-slate-600">Hamzah & 649 Others</p>
          </div>
          <div className="counts flex flex-grow justify-end items-center text-lg text-slate-600">
            <p>Comments 142</p>
            <p className="ml-5 ">Shares 50</p>
            <p className="ml-5 mr-5">Likes 500</p>
          </div>
        </div>

        <hr />
        <div className="Write flex justify-evenly pt-2 ">
          <button className="pt-2 px-4  text-slate-500 text-xl font-semibold rounded-md">
            <ThumbUpOffAltIcon /> Like
          </button>
          <button className="pt-2 px-4  text-slate-500 text-xl font-semibold rounded-md">
            <MarkUnreadChatAltOutlinedIcon /> Comment
          </button>
          <button className="pt-2 px-4  text-slate-500 text-xl font-semibold rounded-md">
            <SendIcon /> Share
          </button>
        </div>
      </div>

      <div
        style={{ boxShadow: "8px 7px 6px 0px rgba(166,153,153,0.68)" }}
        className="shareBox flex flex-col p-5 border-2 border-slate-300 rounded-lg m-5"
      >
        <div className="shareTop flex p-2 mb-2 flex-auto items-center">
          <Link to="/Profile">
            {" "}
            <img
              className="h-14 w-14 rounded-full object-cover border-2 border-sky-300"
              src={profileImage}
              alt="no poster"
            />
          </Link>
          <p className="text-xl font-semibold pl-3 ">
            Usama Samad <br />{" "}
            <span className="text-sm font-normal ">Yesterday at 5:22 PM</span>
          </p>
          <div className=" flex flex-auto justify-end">
            <MoreVertIcon style={{ fontSize: "2rem" }} />
          </div>
        </div>

        <div className="description p-1 text-lg">
          <p>
            Trust me, your favorite player never reached this level and never
            will. Trust me, your favorite player never reached this level and
            never will. Trust me, your favorite player never reached this level
            and never will. <br />
            Trust me, your favorite player never reached this level and never
            will.
          </p>
        </div>
        <div className="image">
          <img
            className="object-fill bg-black"
            style={{ height: "80%", width: "100%" }}
            src={Vidyut}
            alt="Messi"
          />
        </div>
        <div className="likesComment flex py-2 ">
          <div className="likes flex ml-2 items-center justify-center">
            <img
              className="h-8 w-8 rounded-full object-fill "
              src={Likes}
              alt="Likes"
            />{" "}
            <img
              className="h-8 w-8 rounded-full object-fill "
              src={Heart}
              alt="Hearts"
            />{" "}
            <p className="pl-2 text-lg text-slate-600">Hamzah & 649 Others</p>
          </div>
          <div className="counts flex flex-grow justify-end items-center text-lg text-slate-600">
            <p>Comments 142</p>
            <p className="ml-5 ">Shares 50</p>
            <p className="ml-5 mr-5">Likes 500</p>
          </div>
        </div>

        <hr />
        <div className="Write flex justify-evenly pt-2 ">
          <button className="pt-2 px-4  text-slate-500 text-xl font-semibold rounded-md">
            <ThumbUpOffAltIcon /> Like
          </button>
          <button className="pt-2 px-4  text-slate-500 text-xl font-semibold rounded-md">
            <MarkUnreadChatAltOutlinedIcon /> Comment
          </button>
          <button className="pt-2 px-4  text-slate-500 text-xl font-semibold rounded-md">
            <SendIcon /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
