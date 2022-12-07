import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../../images/usama.jpg";
import Messi from "../../images/srk.png";
import Vidyut from "../../images/vidyut.jpg";
import Rock from "../../images/rock.jpg";

const RightSideBar = () => {
  return (
    <div
      style={{
        height: "45rem",
        overflowY: "scroll",
      }}
    >
      <div className="rightbarwrapper pt-2 ">
        <h1 className="text-3xl font-semibold text-slate-600 py-3 pl-8">
          Friends List
        </h1>
        <ul className="sideBarList  leading-10 pl-7 list-inside text-lg ">
          <Link to="/Profile">
            <li className="sideBarItem py-2 flex items-center">
              <img
                className="h-14 w-14 rounded-full object-cover  "
                src={profileImage}
                alt="no poster"
              />
              <span
                className="bg-green-400 h-3 w-3 rounded-full ml-[-8px] mt-[-30px] z-10
              "
              ></span>
              <span className="pl-5 text-1xl text-slate-700 font-semibold">
                Usama Samad
              </span>
            </li>
          </Link>
          <Link to="/Profile">
            <li className="sideBarItem py-2 flex items-center">
              <img
                className="h-14 w-14 rounded-full object-cover  "
                src={Messi}
                alt="no poster"
              />
              <span
                className="bg-green-400 h-3 w-3 rounded-full ml-[-8px] mt-[-30px] z-10
              "
              ></span>
              <span className="pl-5 text-1xl text-slate-700 font-semibold">
                Shah Rukh Khan
              </span>
            </li>
          </Link>
          <Link to="/Profile">
            <li className="sideBarItem py-2 flex items-center">
              <img
                className="h-14 w-14 rounded-full object-cover  "
                src={Vidyut}
                alt="no poster"
              />
              <span
                className="bg-green-400 h-3 w-3 rounded-full ml-[-8px] mt-[-30px] z-10
              "
              ></span>
              <span className="pl-5 text-1xl text-slate-700 font-semibold">
                Vidyut Jamwaal
              </span>
            </li>
          </Link>
          <Link to="/Profile">
            <li className="sideBarItem py-2 flex items-center">
              <img
                className="h-14 w-14 rounded-full object-cover  "
                src={Rock}
                alt="no poster"
              />
              <span
                className="bg-green-400 h-3 w-3 rounded-full ml-[-8px] mt-[-30px] z-10
              "
              ></span>
              <span className="pl-5 text-1xl text-slate-700 font-semibold">
                Dewayn Johnson
              </span>
            </li>
          </Link>
          <Link to="/Profile">
            <li className="sideBarItem py-2 flex items-center">
              <img
                className="h-14 w-14 rounded-full object-cover  "
                src={profileImage}
                alt="no poster"
              />
              <span
                className="bg-green-400 h-3 w-3 rounded-full ml-[-8px] mt-[-30px] z-10
              "
              ></span>
              <span className="pl-5 text-1xl text-slate-700 font-semibold">
                Usama Samad
              </span>
            </li>
          </Link>
          <Link to="/Profile">
            <li className="sideBarItem py-2 flex items-center">
              <img
                className="h-14 w-14 rounded-full object-cover  "
                src={Messi}
                alt="no poster"
              />
              <span
                className="bg-green-400 h-3 w-3 rounded-full ml-[-8px] mt-[-30px] z-10
              "
              ></span>
              <span className="pl-5 text-1xl text-slate-700 font-semibold">
                Messi
              </span>
            </li>
          </Link>
          <Link to="/Profile">
            <li className="sideBarItem py-2 flex items-center">
              <img
                className="h-14 w-14 rounded-full object-cover  "
                src={Vidyut}
                alt="no poster"
              />
              <span
                className="bg-green-400 h-3 w-3 rounded-full ml-[-8px] mt-[-30px] z-10
              "
              ></span>
              <span className="pl-5 text-1xl text-slate-700 font-semibold">
                Vidyut Jamwaal
              </span>
            </li>
          </Link>
          <Link to="/Profile">
            <li className="sideBarItem py-2 flex items-center">
              <img
                className="h-14 w-14 rounded-full object-cover  "
                src={profileImage}
                alt="no poster"
              />
              <span
                className="bg-green-400 h-3 w-3 rounded-full ml-[-8px] mt-[-30px] z-10
              "
              ></span>
              <span className="pl-5 text-1xl text-slate-700 font-semibold">
                Usama Samad
              </span>
            </li>
          </Link>
          <Link to="/Profile">
            <li className="sideBarItem py-2 flex items-center">
              <img
                className="h-14 w-14 rounded-full object-cover  "
                src={Messi}
                alt="no poster"
              />
              <span
                className="bg-green-400 h-3 w-3 rounded-full ml-[-8px] mt-[-30px] z-10
              "
              ></span>
              <span className="pl-5 text-1xl text-slate-700 font-semibold">
                Shah Rukh Khan
              </span>
            </li>
          </Link>
          <Link to="/Profile">
            <li className="sideBarItem py-2 flex items-center">
              <img
                className="h-14 w-14 rounded-full object-cover  "
                src={Vidyut}
                alt="no poster"
              />
              <span
                className="bg-green-400 h-3 w-3 rounded-full ml-[-8px] mt-[-30px] z-10
              "
              ></span>
              <span className="pl-5 text-1xl text-slate-700 font-semibold">
                Vidyut Jamwaal
              </span>
            </li>
          </Link>
        </ul>
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
