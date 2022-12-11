import React, { useState, useEffect } from "react";
import SharePost from "./SharePost";
import axios from "axios";
import Posts from "./Posts";
// import { posts } from "../../DummyData";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async () => {
  //     const response = await axios.get(
  //       "posts/timeline/639082b2153b59078409a023"
  //     );
  //     console.log(response);
  //   };
  // }, []);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "posts/timeline/639082b2153b59078409a023"
      );
      // console.log(response);
      if (!response.status === 200) throw Error("data not found");

      const resData = await response.data;
      setPosts(resData);
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
