import React from "react";
import ProfilePosts from "./ProfilePosts";
import ProfileSharePost from "../Profile/ProfileSharePost";
import { useState, useEffect } from "react";
import axios from "axios";

const ProfileFeed = ({ username, user }) => {
  ///////////////////////////

  // Declarations

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      //get profile posts
      const response = await axios.get(`/posts/profile/${username}`);
      // console.log(response);
      if (!response.status === 200) throw Error("data not found");
      const resData = await response.data;
      setPosts(resData);
    })();
  }, [username]);

  //// Return

  return (
    <div
      // style={{
      //   // height: "45rem",
      //   overflowY: "scroll",
      // }}
      className="col-span-2  w-full xl:px-3 md:px-1"
    >
      {/* <ProfileSharePost id={user._id} /> */}
      {posts.map((post) => (
        <div key={post._id}>
          <ProfilePosts post={post} postuser={user} />
        </div>
      ))}
    </div>
  );
};

export default ProfileFeed;
