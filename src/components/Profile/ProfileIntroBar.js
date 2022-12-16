import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HouseIcon from "@mui/icons-material/House";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import WorkIcon from "@mui/icons-material/Work";
// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EmailIcon from "@mui/icons-material/Email";

const ProfileIntroBar = ({ user }) => {
  //// Declarations

  //// Return

  return (
    <div
      className="ml-1"
      // style={{
      //   height: "45rem",
      //   overflowY: "scroll",
      // }}
    >
      <div
        style={{ boxShadow: "8px 7px 6px 0px rgba(166,153,153,0.68)" }}
        className="Introduction pt-2 bg-white rounded-lg border-2 border-slate-300"
      >
        <div className="heading flex items-center ">
          <h1 className="text-3xl font-semibold text-black pt-3 pb-4 pl-4  ">
            Intro
          </h1>
        </div>
        <div className="IntroList ">
          <ul className="pl-5 leading-9  pb-5 text-1xl  text-slate-700 ">
            <li className="my-1 flex items-center">
              <LocationOnIcon className="mr-2 " /> Live in {user.city}
            </li>
            <li className="my-1 flex items-center ">
              <HouseIcon className="mr-2 " /> From {user.from}
            </li>
            <li className="my-1 flex items-center">
              <FavoriteIcon className="mr-2" />{" "}
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : ""}
            </li>
            <li className="my-1 flex items-center  ">
              <RssFeedIcon className="mr-2" /> Followed By{" "}
              {user.followers?.length} people
            </li>
            <li className="my-1 flex items-center">
              <WorkIcon className="mr-2" /> {""}
              {user.desc}
            </li>
            <li className="my-1 flex items-center">
              <EmailIcon className="mr-2" /> {""}
              {user.email}
            </li>
          </ul>
        </div>

        <hr />
        <div className="button flex items-center justify-center my-3 ">
          <button className="py-1 px-10   bg-blue-500 text-white text-lg font-semibold rounded-md mb-2">
            Edit
          </button>
        </div>
      </div>

      <div
        style={{ boxShadow: "8px 7px 6px 0px rgba(166,153,153,0.68)" }}
        className="Friends pt-2  bg-white rounded-lg my-5  border-2 border-slate-300"
      >
        <div className="heading flex items-center">
          <h1 className="text-3xl font-semibold text-black pt-3 pb-4 pl-4  ">
            Friends
          </h1>
        </div>

        <div className="grid grid-cols-3 grid-flow-row">
          {/* {users?.map((user) => (
            <div key={user.id} className="flex-grow flex  justify-center  my-1">
              <Link to="/Profile">
                <img
                  className="h-24 w-24  object-cover rounded-xl"
                  src={user.profilePicture}
                  alt="no poster"
                />

                <p className=" pl-1 w-16 flex flex-wrap text-slate-700 font-semibold mt-auto ">
                  {user.userName}
                </p>
              </Link>
            </div>
          ))} */}
        </div>

        <hr />
        {/* <div className="button flex items-center justify-center my-3 ">
          <button className="py-1 px-5  bg-sky-400 text-white text-lg font-semibold rounded-md mb-3">
            See More
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileIntroBar;
