import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  //// Declarations

  const history = useNavigate();
  /// Functions

  const handleSubmit = () => {
    history("/Home");
  };

  /// Return

  return (
    <div className="body grid grid-cols-2 h-screen items-center bg-gray-50">
      <div className="AppNameDescription py-10 pl-10 ml-20 ">
        <h1 className="text-5xl font-bold text-start text-blue-600 py-5 ">
          SameBook
        </h1>
        <p className="text-2xl text-start  mt-3  b-2">
          Connect with Friends & the World around you with SameBook.{" "}
        </p>
        <p className="text-2xl text-start my-2">
          FurtherMore, Watch Movies, Videos, Photos & Clips of Friends & Public.
        </p>
      </div>

      <div className="loginForm  py-5 flex flex-col bg-white rounded-2xl w-3/5">
        <form onSubmit={handleSubmit}>
          <div className="inputs flex-auto flex flex-col p-1  w-full ml-12  mb-2">
            <input
              className=" w-4/5 rounded-2xl p-3 placeholder-slate-500 border-2  border-slate-500 text-xl"
              type="email"
              placeholder="Email or Phone Number"
            />
            <br />
            <input
              className=" w-4/5 rounded-2xl p-3 placeholder-slate-500 border-2  border-slate-500 text-xl"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="button flex-auto flex flex-col p-1  w-full ml-12 ">
            <button
              type="submit"
              className="w-4/5 rounded-2xl p-3 placeholder-slate-500 text-white font-semibold mt-5 bg-blue-500 text-xl"
            >
              Login
            </button>
          </div>
        </form>

        <div className="forgot flex-auto flex flex-col p-1  w-full ml-12  ">
          <button className="w-4/5 rounded-2xl p-3 placeholder-slate-500 text-blue-600 font-semibold mt-3 bg-white text-lg">
            Forgot Account?
          </button>
        </div>

        <hr />

        <div className="button flex-auto flex flex-col p-1  w-full ml-24 mt-2 mb-5">
          <button className="w-3/5 rounded-2xl p-3 placeholder-slate-500 text-white font-semibold mt-4 bg-green-500 text-lg">
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
