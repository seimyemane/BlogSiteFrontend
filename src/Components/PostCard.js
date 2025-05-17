import React from "react";
import Data from "./postData.json";
import { useState } from "react";
import SinglePost from "./SinglePost";
import { Link, useNavigate } from "react-router-dom";

const PostCard = () => {
  const [currentData, setCurrentData] = useState(null);

  const mapData = Data.map((data) => {
    return (
      <Link to={`/post/${data.slug}`} key={data.id}>
        <div
          style={{
            backgroundImage: `url(${data.imageUrl})`,
          }}
          className="w-100 h-100 m-2"
        >
          <div>
            <h1>{data.title}</h1>
            <p>{data.author}</p>
          </div>
        </div>
      </Link>
    );
  });

  console.log(currentData);
  return <div>{mapData}</div>;
};

export default PostCard;
