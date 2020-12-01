import React from "react";

const PostSummary = ({ post }) => {
  return (
    <div className="card post-summary">
      <div className="card-content">
        <span className="card-title green-text text-darken-2">
          {post.title}
        </span>
        <p className="grey-text post-summary-posted-by">
          Posted by{" "}
          <span className="post-summary-username green-text text-lighten-2">
            @matijahh
          </span>
        </p>
        <p className="grey-text post-summary-date">3rd September, 2am</p>
      </div>
    </div>
  );
};

export default PostSummary;
