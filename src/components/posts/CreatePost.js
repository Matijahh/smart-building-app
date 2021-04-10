import React, { Component } from "react";

/** Important Library Imports  */
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

/** Redux Actions Imports */
import { createPost } from "../../store/actions/postActions";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state);
    this.props.history.push("/");
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="container form-container valign-wrapper">
        <form onSubmit={this.handleSubmit} className="transparent">
          <h5 className="teal-text text-darken-4 center-align form-title">
            Schedule Event
          </h5>
          <div className="input-field transparent">
            <label htmlFor="title" className="teal-text text-darken-4">
              Event Title
            </label>
            <input
              type="text"
              id="title"
              className="teal-text text-darken-4"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field transparent">
            <label htmlFor="content" className="teal-text text-darken-4">
              What is the event for?
            </label>
            <textarea
              className="materialize-textarea teal-text text-darken-4"
              id="content"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field transparent center-align">
            <button className="waves-effect waves-light btn teal darken-4 white-text">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
