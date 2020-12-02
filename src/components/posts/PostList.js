import React from "react";
import { Link } from "react-router-dom";

import PostSummary from "./PostSummary";

const PostList = ({ posts }) => {
  return (
    <div className="post-list section">
      {posts &&
        posts.map((post) => {
          return (
            <Link to={`/post/${post.id}`}>
              <PostSummary post={post} key={post.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default PostList;
