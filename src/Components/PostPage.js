import React from "react";
import PostCard from "./PostCard";

const PostPage = () => {
  return (
    <div className="h-[100vh] flex justify-center">
      <div className=" border border-blue-800  lg:w-[80%] md:w-[80%]  w-full h-full flex justify-center items-center flex-col">
        <p>post page</p>
        <PostCard />
      </div>
    </div>
  );
};

export default PostPage;
