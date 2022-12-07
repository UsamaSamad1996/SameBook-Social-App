import React from "react";
import Posts from "./Posts";
import SharePost from "./SharePost";

const Feed = () => {
  return (
    <div
      style={{
        height: "45rem",
        overflowY: "scroll",
      }}
      className="col-span-2  w-full xl:px-10 md:px-1"
    >
      <SharePost />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
};

export default Feed;
