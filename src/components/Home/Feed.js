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
      // if (!posts.status === 200) throw Error("data not found");
      // const postsData = await posts.data;
      setPosts(
        posts.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    })();
  }, [user._id]);

  return (
    <div
      // style={{
      //   width: "50%",
      // }}
      className="  px-0 mx-0 xl:px-10 md:px-1    relative md:ml-[25%]  md:w-[50%]"
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
