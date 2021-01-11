import React from "react";
import moment from "moment";

const PostSummary = ({ post }) => {
  return (
    <div className="card post-summary">
      <div className="card-content">
        <span className="card-title teal-text text-darken-4">{post.title}</span>
        <p className="grey-text post-summary-posted-by">
          Posted by{" "}
          <span className="post-summary-username teal-text text-darken-4">
            {post.authorFirstName} {post.authorLastName}
          </span>
        </p>
        <p className="grey-text post-summary-date">
          {moment(post.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default PostSummary;
