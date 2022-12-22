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
    <div className="body  h-screen flex flex-col    md:grid md:grid-cols-2 md:h-screen md:items-center md:bg-gray-100">
      <div className="AppNameDescription flex-auto flex flex-col justify-center  md:py-10 md:pl-10 md:ml-20 ">
        <h1 className="  px-5 text-center text-6xl md:text-5xl font-bold md:text-start text-blue-600 md:py-5 ">
          SameBook
        </h1>
        <p className=" px-5 mt-6 text-center text-2xl md:text-start  md:mt-3  md:b-2">
          Connect with Friends & the World around you with SameBook.{" "}
        </p>
        <p className=" hidden md:flex   md:text-2xl md:text-start md:my-2 md:pl-5 ">
          FurtherMore, Watch Movies, Videos, Photos & Clips of Friends & Public.
        </p>
      </div>

      <div className="loginForm flex-auto  px-5  md:px-1  md:py-5 flex flex-col justify-start pt-2 md:bg-white md:rounded-2xl md:w-3/5 md:ml-14  ">
        <form onSubmit={handleSubmit}>
          <div className="inputs mb-5 mt-0 flex-auto flex flex-col p-1  md:w-full md:ml-12  md:mb-2">
            <input
              className=" md:w-4/5 rounded-2xl p-3 placeholder-slate-500 border-2  border-slate-500 text-xl"
              type="email"
              placeholder="Email or Phone Number"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="true"
            />
            <br />
            <input
              className=" md:w-4/5 rounded-2xl p-3 placeholder-slate-500 border-2  border-slate-500 text-xl"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="false"
            />
          </div>
          <div className="button flex-auto flex flex-col p-1  md:w-full md:ml-12 ">
            <button
              type="submit"
              className="md:w-4/5 rounded-2xl p-3 placeholder-slate-500 text-white font-semibold mt-5 bg-blue-500 text-xl"
            >
              {isFetching ? (
                <CircularProgress color="primary" size="25px" />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>

        <div className="forgot md:flex-auto flex flex-col p-1  md:w-full md:ml-12  ">
          <button className="md:w-4/5 rounded-2xl p-3 placeholder-slate-500 text-blue-600 font-semibold mt-3 bg-white text-lg">
            Forgot Account?
          </button>
        </div>

        <hr />

        <div className="button md:flex-auto flex flex-col items-center p-1  md:w-full  md:mt-2 md:mb-5">
          <Link to="/Register">
            <button className="md:w-full h-12 px-10 rounded-2xl md:p-6 flex items-center placeholder-slate-500 text-white font-semibold mt-4 bg-green-500 text-lg">
              Create New Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
