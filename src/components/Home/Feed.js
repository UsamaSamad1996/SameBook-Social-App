import React, { useState, useEffect, useContext } from "react";
import SharePost from "./SharePost";
import axios from "axios";
import Posts from "./Posts";
import { AuthContext } from "../../contextAPI/AuthContext";
// import { posts } from "../../DummyData";

const Feed = () => {
  /// Declarations
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      //get timeline posts
      const posts = await axios.get(`/posts/timeline/${user._id}`);
      // console.log(posts);
      if (!posts.status === 200) throw Error("data not found");
      const postsData = await posts.data;
      setPosts(postsData);
    })();
  }, []);

  return (
    <div
      // style={{
      //   // height: "45rem",
      //   overflowY: "scroll",
      // }}
      className="col-span-2  w-full xl:px-10 md:px-1  hover:overflow-y-scroll  mb-16"
    >
      <SharePost />
      {posts.map((post) => (
        <div key={post._id}>
          <Posts post={post} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
