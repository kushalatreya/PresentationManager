import React, { Component } from "react";
import "./addPresentation.css";

export default class AddPresentation extends Component {
  state = {
    id: "",
    presenter_name: "",
    evaluator_name: "",
    presentaion_topic: "",
    presentation_URL: ""
    };
  saveSubmit = e => {
    e.preventDefault();
    this.props.addPost(this.state);
  };
  handleSubmit = e => {
    e.preventDefault();
    let target = e.target;
    let name = target.name;
    let value = target.value;
    const _id = this.props.post.posts[this.props.post.posts.length - 1].id + 1;
    this.setState({ [name]: value, id: _id });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.saveSubmit}>
          <label>Presenter Name: </label>
          <input
            type="text"
            name="presenter_name"
            placeholder="presenter name here"
            onChange={this.handleSubmit}
          />
          <br />
          <label>Evaluator Name: </label>
          <input
            type="text"
            name="Evaluator_name"
            placeholder="Evaluator name here"
            onChange={this.handleSubmit}
          />
          <br />
          <label>Presentation Topic: </label>
          <input
            type="text"
            name="Presentation_Topic"
            placeholder="Presentation Topic here:"
            onChange={this.handleSubmit}
          />
          <br />
          <label>Presentation URL: </label>
          <input
            type="text"
            name="Presentation_URL"
            placeholder="Presentation URL here:"
            onChange={this.handleSubmit}
          />

          <button>Add Presenter</button>
        </form>
      </div>
    );
  }
}
