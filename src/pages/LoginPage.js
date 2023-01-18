import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contextAPI/AuthContext";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../contextAPI/AuthActions";
import { CircularProgress } from "@material-ui/core";

/////////////////

const LoginPage = () => {
  //// Declarations

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  /// Functions

  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      dispatch(loginStart());
      try {
        const response = await axios.post("auth/login", { email, password });
        dispatch(loginSuccess(response.data));
      } catch (error) {
        dispatch(loginFailure(error));
      }
    })({ email, password });
  };

  return (
    <div className="body  h-screen flex flex-col   xl:grid xl:grid-cols-2 xl:h-screen md:items-center bg-gray-100">
      <div className="AppNameDescription flex-auto flex flex-col justify-center  xl:py-10 xl:pl-10 xl:ml-20 md:w-[70%] lg:w-[90%]">
        <h1
          style={{ textShadow: "3px 5px 8px white" }}
          className="  px-5 text-center md:text-7xl text-6xl font-bold xl:text-start text-blue-700 xl:py-5 "
        >
          SameBook
        </h1>
        <p className=" xl:pl-5 px-10 mt-6 text-center text-xl md:text-2xl xl:text-start  text-slate-700 xl:mt-3  xl:b-2">
          Connect with Friends & the World around you with SameBook.{" "}
        </p>
        <p className=" hidden xl:flex   xl:text-2xl xl:text-start text-slate-700 xl:my-2 xl:pl-5 ">
          FurtherMore, Watch Movies, Videos, Photos & Clips of Friends & Public.
        </p>
      </div>

      <div className="loginForm flex-auto  px-5  xl:px-1  xl:pb-5 xl:pt-8 flex flex-col justify-start pt-2 xl:bg-white xl:rounded-2xl xl:w-3/5 xl:ml-14 md:w-[70%]  lg:w-[60%]">
        <form onSubmit={handleSubmit}>
          <div className="inputs mb-5 mt-0 flex-auto flex flex-col p-1  xl:w-full xl:ml-12  xl:mb-2">
            <input
              className=" xl:w-4/5 rounded-2xl p-3 placeholder-slate-500 xl:border-2 border-b-2 focus:outline-none border-slate-500 text-xl"
              type="email"
              placeholder="Email or Phone Number"
              require4
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              className=" xl:w-4/5 rounded-2xl p-3 placeholder-slate-500 xl:border-2 border-b-2 focus:outline-none  border-slate-500 text-xl"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="false"
            />
          </div>
          <div className="button flex-auto flex flex-col p-1  xl:w-full xl:ml-12 ">
            <button
              style={{ boxShadow: "8px 7px 6px 0px rgba(166,153,153,0.68)" }}
              type="submit"
              className="xl:w-4/5 rounded-2xl p-3 placeholder-slate-500 text-white font-semibold mt-5 bg-blue-500 hover:bg-blue-600 text-xl"
            >
              {isFetching ? (
                <CircularProgress color="primary" size="25px" />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>

        <div className="forgot xl:flex-auto flex flex-col p-1  xl:w-full xl:ml-12  ">
          <button className="xl:w-4/5 rounded-2xl p-3 placeholder-slate-500 text-white xl:text-blue-700 font-semibold mt-3 hover:text-red-500 bg-transparent text-lg">
            Forgot Account?
          </button>
        </div>

        <hr />

        <div className="button xl:flex-auto flex flex-col items-center p-1  xl:w-full  xl:mt-2 xl:mb-5">
          <Link to="/Register">
            <button
              style={{ boxShadow: "8px 7px 6px 0px rgba(166,153,153,0.68)" }}
              className="xl:w-full h-12 px-10 rounded-2xl xl:px-10 flex items-center placeholder-slate-500 text-white font-semibold mt-8 xl:mt-4 bg-green-500 hover:bg-green-600 text-lg"
            >
              Create New Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
