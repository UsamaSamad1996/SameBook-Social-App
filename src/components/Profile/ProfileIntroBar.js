import React from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HouseIcon from "@mui/icons-material/House";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RssFeedIcon from "@mui/icons-material/RssFeed";

// import profileImage from "../../images/usama.jpg";
// import Messi from "../../images/srk.png";
// import Vidyut from "../../images/vidyut.jpg";
// import Rock from "../../images/rock.jpg";
import { users } from "../../DummyData";

const ProfileIntroBar = () => {
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
          <ul className="pl-5 leading-10  pb-5 text-lg  text-slate-700 ">
            <li className="my-1">
              <LocationOnIcon /> Live in Karachi, Pakistan
            </li>
            <li className="my-1">
              <HouseIcon /> From Karachi, Pakistan
            </li>
            <li className="my-1">
              <FavoriteIcon /> Single
            </li>
            <li className="my-1">
              <RssFeedIcon /> Followed By 3116 people
            </li>
          </ul>
        </div>

        <hr />
        {/* <div className="button flex items-center justify-center my-3 ">
          <button className="py-1 px-5  bg-sky-400 text-white text-lg font-semibold rounded-md mb-3">
            See More
          </button>
        </div> */}
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
          {users?.map((user) => (
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
          ))}
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
