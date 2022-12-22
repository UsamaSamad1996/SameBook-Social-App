import React from "react";
import { Link } from "react-router-dom";
// import profileImage from "../../images/usama.jpg";
// import Messi from "../../images/srk.png";
// import Vidyut from "../../images/vidyut.jpg";
// import Rock from "../../images/rock.jpg";
import { users } from "../../DummyData";

const RightSideBar = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "25%",
        height: "43.9rem",
      }}
      className="hover:overflow-y-scroll z-0 ml-[75%] hidden md:flex"
    >
      <div className="rightbarwrapper pt-2 ">
        <div className="heading flex items-center">
          <h1 className="text-3xl font-semibold text-slate-600 pt-3 pb-4 pl-10  ">
            Online Friends List
          </h1>
          <p className="bg-green-400 h-3 w-3 rounded-full ml-3"></p>
        </div>
        {users?.map((user) => (
          <ul
            key={user.id}
            className="sideBarList  leading-10 pl-7 list-inside text-lg "
          >
            <Link to="/Profile">
              <li className="sideBarItem py-2 flex items-center">
                <img
                  className="h-14 w-14 rounded-full object-cover  "
                  src={user.profilePicture}
                  alt="no poster"
                />
                <span
                  className="bg-green-400 h-3 w-3 rounded-full ml-[-8px] mt-[-30px] z-10
               "
                ></span>
                <span className="pl-5 text-1xl text-slate-700 font-semibold">
                  {user.userName}
                </span>
              </li>
              <li className="sideBarItem py-2 flex items-center">
                <img
                  className="h-14 w-14 rounded-full object-cover  "
                  src={user.profilePicture}
                  alt="no poster"
                />
                <span
                  className="bg-green-400 h-3 w-3 rounded-full ml-[-8px] mt-[-30px] z-10
               "
                ></span>
                <span className="pl-5 text-1xl text-slate-700 font-semibold">
                  {user.userName}
                </span>
              </li>
            </Link>
          </ul>
        ))}

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

export default RightSideBar;
