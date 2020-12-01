import React, { Component } from "react";
import { connect } from "react-redux";
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
  }

  render() {
    return (
      <div className="container form-container valign-wrapper">
        <form onSubmit={this.handleSubmit} className="transparent">
          <h5 className="white-text center-align form-title">Schedule Event</h5>
          <div className="input-field transparent">
            <label htmlFor="title" className="white-text">
              Event Title
            </label>
            <input
              type="text"
              id="title"
              className="white-text"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field transparent">
            <label htmlFor="content" className="white-text">
              What is the event for?
            </label>
            <textarea
              className="materialize-textarea white-text"
              id="content"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field transparent center-align">
            <button className="waves-effect waves-light btn green darken-2 white-text">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};

export default connect(null, mapDispatchToProps)(CreatePost);
