import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HouseIcon from "@mui/icons-material/House";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contextAPI/AuthContext";
import { useContext } from "react";

/////////////////////////////////////////////////////////////////////

const ProfileIntroBar = ({ user }) => {
  //
  /////////////////////////////////////////////////////////////////////

  //// Declarations
  const { user: authUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("Not Available");
  const [city, setCity] = useState("Not Available");
  const [from, setFrom] = useState("Not Available");
  const [username, setUsername] = useState("");
  const [relationship, setRelationShip] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const update = {
      desc,
      city,
      username,
      from,
      userId: user._id,
      relationship,
    };

    await axios.put(`/users/${user._id}`, update);

    alert("Your Account Has Been Updated Successfully");

    navigate("/");
  };

  //// Return

  return (
    <div className="ml-1">
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
              <PersonIcon className="mr-2 " /> {user.username}
            </li>
            <li className="my-1 flex items-center">
              <LocationOnIcon className="mr-2 " /> Live in {user.city}
            </li>
            <li className="my-1 flex items-center ">
              <HouseIcon className="mr-2 " /> From {user.from}
            </li>
            <li className="my-1 flex items-center">
              <FavoriteIcon className="mr-2" />{" "}
              {user?.relationship === 1
                ? "Single"
                : user?.relationship === 2
                ? "Married"
                : user?.relationship === 3
                ? "Commited"
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
          {authUser._id === user._id ? (
            <div>
              <Button variant="contained" onClick={handleClickOpen}>
                Edit Details
              </Button>

              <Dialog fullWidth open={open} onClose={handleClose}>
                <DialogTitle>Customize your intro</DialogTitle>
                <form onSubmit={handleSubmit}>
                  <DialogContent>
                    <DialogContentText>
                      Details you select will be public.
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="normal"
                      id="username"
                      label="Add UserName"
                      type="text"
                      fullWidth
                      variant="outlined"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                      autoFocus
                      margin="normal"
                      id="work"
                      label="Add Work"
                      type="text"
                      fullWidth
                      variant="outlined"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    />
                    <TextField
                      autoFocus
                      margin="normal"
                      id="city"
                      label="Add Current City"
                      type="text"
                      fullWidth
                      variant="outlined"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <TextField
                      autoFocus
                      margin="normal"
                      id="from"
                      label="Where are you From?"
                      type="text"
                      fullWidth
                      variant="outlined"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                    />
                    <TextField
                      autoFocus
                      margin="normal"
                      id="relationship"
                      label="Write only Numbers: 1 for Single, 2 for Married or 3 for Commited"
                      type="number"
                      fullWidth
                      variant="outlined"
                      value={relationship}
                      onChange={(e) => setRelationShip(e.target.value)}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                  </DialogActions>
                </form>
              </Dialog>
            </div>
          ) : (
            ""
          )}
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
