import React, { Component } from "react";
import "./App.css";
import AddPresentation from "./components/AddPresentation";
import EachPresentation from "./components/EachPresentation";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        presenter_name: "kushal",
        evaluator_name: "Asabeneh",
        presentaion_topic: "po-mo-do-ro techniques",
        presentation_URL: "#"
      },
      {
        id: 2,
        presenter_name: "q",
        evaluator_name: "w",
        presentaion_topic: "e",
        presentation_URL: "#"
      },
      {
        id: 3,
        presenter_name: "a",
        evaluator_name: "b",
        presentaion_topic: "c",
        presentation_URL: "#"
      }
    ]
  };

  addPost = obj => {
    const posts = this.state.posts.slice();
    posts.push(obj);
    this.setState({ posts });
  };
  postHandaler = e => {
    let id = e.target.id;
    console.log(id);
  };
  deleteHandaler = id => {
    const post = [...this.state.posts];
    console.log(post);
    console.log(id);
    const posts = post.splice(id, 1);
    console.log(posts);
    console.log(id);
    this.setState({ posts });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route
                exact
                path="/"
                component={props => (
                  <EachPresentation
                    post={this.state}
                    
                    deleteclicked={() => this.deleteHandaler}
                  />
                )}
              />
              <Route
                exact
                path="/Add"
                component={props => (
                  <AddPresentation addPost={this.addPost} post={this.state} />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
