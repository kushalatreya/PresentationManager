import React, { Component } from "react";
import "./eachPost.css";

export default class EachPresentation extends Component {
  
  render() {
    return (
      <div>
        {this.props.post.posts.map((element, index) => {
          return (
            <div className="each_post" key={element.id}>
              <p>{element.id}</p>
              <p>{element.presenter_name}</p>
              <p>{element.evaluator_name}</p>
              <p>{element.presentaion_topic}</p>
              <p>{element.presentation_URL}</p>
              <button>Edit</button>
              <button onClick={this.props.deleteclicked(this.props.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
