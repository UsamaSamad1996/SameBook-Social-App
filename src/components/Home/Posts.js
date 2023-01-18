import React, { useState, useEffect, useContext } from "react";
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
import { AuthContext } from "../../contextAPI/AuthContext";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

/////////////////////////////////////////////////////

const Posts = ({ post }) => {
  ////

  ///   Declarations  ///////////////////////////////

  const { user } = useContext(AuthContext);
  const [postUser, setPostUser] = useState({});
  const [likes, setLikes] = useState(post.likes.length);
  const [isLike, setIsLike] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  /////////////////////////////////////////////

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //////////////////////////////////////////////

  ///   Functions  /////////////////////////////

  useEffect(() => {
    (async () => {
      //get a user of a Post
      const response = await axios.get(`/users?userId=${post.userId}`);
      // console.log(response);

      const resData = await response.data;
      setPostUser(resData);
    })();
  }, [post.userId]);

  ///////////////////////////////////////////////

  useEffect(() => {
    setIsLike(post.likes.includes(user._id));
  }, [user._id, post.likes]);

  //////////////////////////////////////////////

  const handleLikes = () => {
    try {
      axios.put(`/posts/${post._id}/like`, { userId: user._id });
    } catch (error) {}

    if (isLike) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLike(!isLike);
  };

  ////////////////////////////////////////////////

  const deletePost = async () => {
    setIsDeleting(true);
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { userId: user._id },
      });

      setIsDeleting(false);
      setAnchorEl(null);
      alert(`${user.username}! Your Post Deleted Successfully`);
      navigate(`/Profile/${user._id}`);
    } catch (error) {}
  };

  ///////////////////////////////////////

  //// Return

  return (
    <div>
      <div
        style={{ boxShadow: "8px 7px 6px 0px rgba(166,153,153,0.68)" }}
        className="shareBox flex flex-col md:p-5 py-5 border-2 border-slate-300 rounded-lg md:m-5 my-6 bg-white"
      >
        {isDeleting ? (
          <div className="h-48 flex justify-center items-center">
            <CircularProgress color="info" size="100px" />
          </div>
        ) : (
          <div>
            <div className="shareTop flex px-4 pt-1 md:p-2 mb-2 flex-auto items-center">
              <Link to={`/Profile/${postUser._id}`}>
                {" "}
                <img
                  className="h-14 w-14 rounded-full object-cover border-2 border-blue-600"
                  src={postUser.profilePicture || Avatar}
                  alt="no poster"
                />
              </Link>

              {/* username, blue tick, post date */}
              <p className="text-xl font-semibold pl-3 mb-1 leading-5">
                {postUser.username}
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
              {/* post delete button */}
              {user._id === post.userId ? (
                <div className="deletePost flex flex-auto justify-end relative">
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <MoreVertIcon
                      style={{ fontSize: "2rem" }}
                      className="text-black hover:cursor-pointer"
                    />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem className="absolute" onClick={deletePost}>
                      Delete Post
                    </MenuItem>
                  </Menu>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* post description caption & post image */}
            {post.img ? (
              <div>
                <div className="description pl-4 pr-6 mb-2 md:mb-1 mt-5 md:mt-3 md:pl-2 md:pr-5 md:pb-2 text-lg  break-words">
                  <p>{post.desc}</p>
                </div>

                <div className="image ">
                  <img
                    className="object-fill bg-black"
                    style={{ height: "70%", width: "100%" }}
                    src={post.img}
                    alt="File Not Supported"
                  />
                </div>
              </div>
            ) : (
              <div className="description pl-4 pr-6 mb-4 md:mb-0 mt-5  md:pl-2 md:pr-5 md:pb-3 text-lg  break-words">
                <p>{post.desc}</p>
              </div>
            )}
            {/* heart & like images */}
            <div className="likesComment flex py-2 mt-2 mb-1 md:mb-0">
              <div className="likes flex ml-2 items-center justify-center">
                {likes > 0 ? (
                  <div className="flex ml-2 md:ml-0">
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
                  <div className="flex ml-2 md:ml-0">
                    <img
                      className="h-6 w-6 my-0 object-fill "
                      src={LOL}
                      alt="Hearts"
                    />
                  </div>
                )}

                <p className="pl-2 text-lg text-slate-700">
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

              <div className="counts flex flex-grow justify-end items-center text-lg text-slate-700">
                <p>{Math.round(Math.random() * 10)} Comments</p>

                <p className="ml-5 ">{likes > 0 ? `${likes} Likes` : ""}</p>
                <p className="ml-5 mr-5">
                  {Math.round(Math.random() * 10)} Shares
                </p>
              </div>
            </div>

            <hr />
            {/* likes comment & share Buttons */}
            <div className="Write flex justify-evenly pt-1 ">
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
        )}
      </div>
    </div>
  );
};

export default Posts;
