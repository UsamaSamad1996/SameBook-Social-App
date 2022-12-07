import React from "react";
import Topbar from "../components/Topbar";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const ProfilePage = () => {
  return (
    <div className="profilePage">
      {" "}
      <div className="topbar">
        <Topbar className="w-full" />
      </div>
      <div className="coverPicture flex justify-center items-center ">
        <img
          style={{
            width: "70.5rem",
            height: "31rem",
            border: "1px solid #3bc6fc",
            borderRadius: "1rem",
            objectFit: "cover",
          }}
          src={require("../images/camel.avif")}
          alt="no poster"
        />
        <button className="p-3  bg-white text-black font-bold rounded-md ml-[-200px] mt-[400px]">
          <PermMediaIcon /> Edit Cover Photo
        </button>
      </div>
      <div className="1 flex justify-center">
        <div className="2 flex  w-4/6  border-b-2 border-stone-300 md:flex-wrap md:justify-center lg:flex-wrap lg:justify-center ">
          <div className="profileimageflex-auto">
            <img
              className=" w-64 h-64 rounded-full border-4 border-sky-400 object-cover mt-[-70px] ml-[50px] "
              src={require("../images/usama.jpg")}
              alt="no poster"
            />
          </div>
          <div className="title flex-auto flex flex-col justify-center xl:justify-start xl:pt-8 items-end md:items-center lg:items-center  ">
            <h1 className="text-black text-4xl font-bold  ">
              Syed Hameez Ur Rehman
            </h1>
            <p className="text-black text-xl font-semibold pt-2 ">
              172 friends
            </p>
          </div>
          <div className="buttons flex-auto  flex justify-evenly items-end  p-5 ">
            <button className="p-3  bg-sky-400 text-white font-bold rounded-md text-lg flex items-center">
              Add to Story <AddCircleOutlineOutlinedIcon className="pl-2" />
            </button>
            <button className="p-3  bg-sky-400 text-white font-bold rounded-md text-lg flex items-center">
              Edit Profile <PermMediaIcon className="pl-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
