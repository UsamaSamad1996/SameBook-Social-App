import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import SendIcon from "@mui/icons-material/Send";
import Heart from "../../images/hearts.png";
import Likes from "../../images/likes.png";
import CheckIcon from "@mui/icons-material/Check";
import Avatar from "../../images/avatar.png";
import LOL from "../../images/lol2.png";
import { format } from "timeago.js";
// import UsamaPic from "../../images/usama2.jpg";

//////

const Posts = ({ post }) => {
  ////
  // console.log(post);
  ///Declarations

  const [user, setUser] = useState({});
  const [likes, setLikes] = useState(post.likes.length);
  const [isLike, setIsLike] = useState(false);

  // console.log(user);

  //// Functions

  useEffect(() => {
    (async () => {
      //get a user of a Post
      const response = await axios.get(`/users?userId=${post.userId}`);
      // console.log(response);

      const resData = await response.data;
      setUser(resData);
    })();
  }, [post.userId]);

  const handleLikes = () => {
    // setLikes(isLike ? likes - 1 : likes + 1);
    // setIsLike(!isLike);
    if (isLike) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLike(!isLike);
  };

  // console.log(post);

  //// Return

  return (
    <div>
      <div
        style={{ boxShadow: "8px 7px 6px 0px rgba(166,153,153,0.68)" }}
        className="shareBox flex flex-col p-5 border-2 border-slate-300 rounded-lg m-5 bg-white"
      >
        <div className="shareTop flex p-2 mb-2 flex-auto items-center">
          <Link to={`/Profile/${user._id}`}>
            {" "}
            <img
              className="h-14 w-14 rounded-full object-cover border-2 border-blue-600"
              src={user.profilePicture || Avatar}
              alt="no poster"
            />
          </Link>
          <p className="text-xl font-semibold pl-3 mb-1 leading-5">
            {user.username}
            {/* {users.filter((user) => user.id === post?.userID)[0].userName} */}
            <span>
              {" "}
              <CheckIcon
                style={{ fontSize: "0.9rem" }}
                className="bg-blue-600 text-white rounded-full mb-[5px]"
              />
            </span>
            <br />{" "}
            <span className="text-sm font-normal">
              {format(post.createdAt)}
            </span>
          </p>
          <div className=" flex flex-auto justify-end">
            <MoreVertIcon style={{ fontSize: "2rem" }} />
          </div>
        </div>

        {post.img ? (
          <div>
            <div className="description pl-2 pr-5 pb-2 text-lg text-justify">
              <p>{post.desc}</p>
            </div>

            <div className="image">
              <img
                className="object-fill bg-black"
                style={{ height: "70%", width: "100%" }}
                src={post.img}
                alt="Image Not Supported"
              />
            </div>
          </div>
        ) : (
          <div className="description pl-2 pr-5 pb-4 text-lg text-justify">
            <p>{post.desc}</p>
          </div>
        )}

        <div className="likesComment flex py-2 ">
          <div className="likes flex ml-2 items-center justify-center">
            {likes > 0 ? (
              <div className="flex">
                <img
                  className="h-6 w-6 rounded-full object-fill "
                  src={Likes}
                  alt="Likes"
                />{" "}
                <img
                  className="h-6 w-6 rounded-full object-fill "
                  src={Heart}
                  alt="Hearts"
                />
              </div>
            ) : (
              <div className="flex">
                <img
                  className="h-6 w-6 my-0 object-fill "
                  src={LOL}
                  alt="Hearts"
                />
              </div>
            )}

            <p className="pl-2 text-lg text-slate-600">
              {likes > 1 && isLike === true
                ? `You & ${likes} Others`
                : likes > 1 && isLike === false
                ? `${likes} Likes`
                : likes === 1 && isLike === false
                ? `${likes} Like`
                : likes === 0 && isLike === false
                ? ` LoL No Likes`
                : likes === 1 && isLike === true
                ? `You Like It`
                : ""}
            </p>
          </div>

          <div className="counts flex flex-grow justify-end items-center text-lg text-slate-600">
            <p>{Math.round(Math.random() * 10)} Comments</p>

            <p className="ml-5 ">{likes > 0 ? `${likes} Likes` : ""}</p>
            <p className="ml-5 mr-5">{Math.round(Math.random() * 10)} Shares</p>
          </div>
        </div>

        <hr />

        <div className="Write flex justify-evenly pt-2 ">
          {isLike ? (
            <button
              onClick={handleLikes}
              className="pt-2 px-4  text-blue-600 text-xl font-semibold rounded-md"
            >
              <ThumbUpOffAltIcon /> Liked
            </button>
          ) : (
            <button
              onClick={handleLikes}
              className="pt-2 px-4  text-slate-500 text-xl font-semibold rounded-md"
            >
              <ThumbUpOffAltIcon /> Like
            </button>
          )}

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
