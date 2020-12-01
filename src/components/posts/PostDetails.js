import React from "react";

const PostDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section post-details">
      <div className="card">
        <div className="card-content">
          <span className="card-title center-align green-text text-darken-2">
            Post Title {id}
          </span>
          <p className="post-content grey-text text-darken-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            eaque doloribus, explicabo harum ipsum temporibus? Consectetur nam
            aliquam error aspernatur ad, asperiores amet libero esse autem
            dolorum, quae dolorem sequi.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Beatae eaque doloribus, explicabo harum ipsum
            temporibus? Consectetur nam aliquam error aspernatur ad, asperiores
            amet libero esse autem dolorum, quae dolorem sequi.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Beatae eaque doloribus,
            explicabo harum ipsum temporibus? Consectetur nam aliquam error
            aspernatur ad, asperiores amet libero esse autem dolorum, quae
            dolorem sequi.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <p>
            Posted by{" "}
            <span className="post-summary-username green-text text-lighten-2">
              @matijahh
            </span>
          </p>
          <p>2nd September, 2am</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
