import React from "react";
import { Link } from "react-router-dom";

import PostSummary from "./PostSummary";

const PostList = ({ posts }) => {
  return (
    <div className="post-list section">
      <h5 className="teal-text text-darken-4 center-align form-title">
        Your Events
      </h5>
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
