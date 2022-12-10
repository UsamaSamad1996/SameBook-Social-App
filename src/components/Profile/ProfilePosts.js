import React, { useState } from "react";
import { Link } from "react-router-dom";
// import profileImage from "../../images/usama.jpg";
// import postImage from "../../images/messi2.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import SendIcon from "@mui/icons-material/Send";

// import SRK from "../../images/camel.avif";
// import Vidyut from "../../images/vidyut.jpg";
// import Rock from "../../images/rock.jpg";
import Heart from "../../images/hearts.png";
import Likes from "../../images/likes.png";
import { users } from "../../DummyData";
import CheckIcon from "@mui/icons-material/Check";

//////

const ProfilePosts = ({ post }) => {
  ////

  ///Declarations

  const [likes, setLikes] = useState(post.like);
  const [isLike, setIsLike] = useState(false);

  const member = users.find((user) => user.id === post.userID);

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

  //// Return

  return (
    <div>
      <div
        style={{ boxShadow: "8px 7px 6px 0px rgba(166,153,153,0.68)" }}
        className="shareBox flex flex-col p-5 border-2 border-slate-300 rounded-lg ml-5 bg-white"
      >
        <div className="shareTop flex p-2 mb-2 flex-auto items-center">
          <Link to="/Profile">
            {" "}
            <img
              className="h-14 w-14 rounded-full object-cover border-2 border-blue-600"
              src={member.profilePicture}
              alt="no poster"
            />
          </Link>
          <p className="text-xl font-semibold pl-3 mb-1 leading-5">
            {member.userName}
            {/* {users.filter((user) => user.id === post?.userID)[0].userName} */}
            <span>
              {" "}
              <CheckIcon
                style={{ fontSize: "0.9rem" }}
                className="bg-blue-600 text-white rounded-full mb-[5px]"
              />
            </span>
            <br /> <span className="text-sm font-normal">{post.date}</span>
          </p>
          <div className=" flex flex-auto justify-end">
            <MoreVertIcon style={{ fontSize: "2rem" }} />
          </div>
        </div>

        <div className="description p-1 text-lg">
          <p>{post.description}</p>
        </div>

        <div className="image">
          <img
            className="object-fill bg-black"
            style={{ height: "60%", width: "100%" }}
            src={post.photo}
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
            <p className="pl-2 text-lg text-slate-600">
              Hamzah & {likes} Others
            </p>
          </div>
          <div className="counts flex flex-grow justify-end items-center text-lg text-slate-600">
            <p>Comments {post.comment}M</p>

            <p className="ml-5 ">Likes {post.like}M</p>
            <p className="ml-5 mr-5">Shares 50</p>
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

export default ProfilePosts;
