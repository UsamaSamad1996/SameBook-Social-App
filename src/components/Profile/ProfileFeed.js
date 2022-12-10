import React from "react";
import ProfilePosts from "./ProfilePosts";
import ProfileSharePost from "../Profile/ProfileSharePost";
import { posts } from "../../DummyData";

const ProfileFeed = () => {
  return (
    <div
      // style={{
      //   // height: "45rem",
      //   overflowY: "scroll",
      // }}
      className="col-span-2  w-full xl:px-3 md:px-1"
    >
      <ProfileSharePost />
      {posts.map((post) => (
        <div key={post.id}>
          <ProfilePosts post={post} />
        </div>
      ))}
    </div>
  );
};

export default ProfileFeed;
