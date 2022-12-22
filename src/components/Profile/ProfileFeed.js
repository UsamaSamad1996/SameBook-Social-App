import React, { useContext } from "react";
import ProfilePosts from "./ProfilePosts";
import ProfileSharePost from "../Profile/ProfileSharePost";
import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../contextAPI/AuthContext";

const ProfileFeed = ({ username, postuser }) => {
  ///////////////////////////

  // Declarations

  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      //get profile posts
      const profilePosts = await axios.get(`/posts/profile/${username}`);

      setPosts(
        profilePosts.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
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
      {user._id === postuser._id ? (
        <ProfileSharePost postuser={postuser} />
      ) : (
        ""
      )}

      {posts.map((post) => (
        <div key={post._id}>
          <ProfilePosts post={post} postuser={postuser} />
        </div>
      ))}
    </div>
  );
};

export default ProfileFeed;
