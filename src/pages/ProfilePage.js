import React, { useState, useEffect } from "react";
import Topbar from "../components/Topbar";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ProfileFeed from "../components/Profile/ProfileFeed";
import ProfileIntroBar from "../components/Profile/ProfileIntroBar";
import axios from "axios";
import Avatar from "../../src/images/avatar.png";
import Camel from "../images/camel.avif";
import { useParams } from "react-router-dom";

////

const ProfilePage = () => {
  /// Declarations

  const { id } = useParams();
  const [postUser, setPostUser] = useState({});

  useEffect(() => {
    (async () => {
      //get a user
      const response = await axios.get(`/users?userId=${id}`);
      // console.log(response);
      if (!response.status === 200) throw Error("data not found");

      const resData = await response.data;
      setPostUser(resData);
    })();
  }, [id]);

  // console.log(postUser);
  //// Return

  return (
    <div className="profilePage  bg-gray-100">
      {" "}
      <div className="topbar">
        <Topbar className="w-full" />
      </div>
      <div className="coverPicture flex justify-center items-center ">
        <img
          style={{
            width: "70.5rem",
            height: "31rem",
            borderRadius: "1rem",
            objectFit: "cover",
          }}
          src={postUser.coverPicture || Camel}
          alt="no poster"
        />
        <button className="p-3  bg-white text-black font-bold rounded-md ml-[-200px] mt-[400px]">
          <PermMediaIcon /> Edit Cover Photo
        </button>
      </div>
      <div className="1 flex justify-center ">
        <div
          style={{ boxShadow: "8px 7px 6px 0px rgba(166,153,153,0.68)" }}
          className="2 flex  w-4/6  border-b-2 border-stone-400 md:flex-wrap md:justify-center lg:flex-wrap lg:justify-center bg-white ml-6 rounded-2xl pb-5"
        >
          <div className="profileimageflex-auto">
            <img
              className=" w-60 h-60 rounded-full border-8 border-white object-contain bg-white mt-[-90px] ml-[50px] "
              src={postUser.profilePicture || Avatar}
              alt="no poster"
            />
          </div>

          <div className="title flex-auto flex flex-col justify-center xl:justify-start xl:pt-8 items-end md:items-center lg:items-center  ">
            <h1 className="text-black text-4xl font-bold ">
              {postUser.username}
            </h1>
            <p className="text-slate-700 text-xl font-semibold pt-2">
              {postUser.followers?.length === 1
                ? `${postUser.followers?.length} Friend`
                : postUser.followers?.length > 1
                ? `${postUser.followers?.length} Friends`
                : ""}
            </p>
          </div>

          <div className="buttons flex-auto  flex justify-evenly items-end  p-5 ">
            <button className="px-3 py-2 bg-blue-500 text-white font-bold rounded-md text-lg flex items-center">
              Add to Story <AddCircleOutlineOutlinedIcon className="pl-2" />
            </button>
            <button className="px-3 py-2 bg-blue-500 text-white font-bold rounded-md text-lg flex items-center">
              Edit Profile <PermMediaIcon className="pl-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="profileBody flex  justify-center">
        <div className="gridContainer grid grid-cols-3 grid-flow-col w-4/6 relative top-5  ml-7 rounded-2xl mt-2">
          <ProfileIntroBar user={postUser} />
          <ProfileFeed username={postUser.username} postuser={postUser} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
