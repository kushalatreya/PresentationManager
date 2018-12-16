import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <ul key="nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Add">Add Presentation</Link>
                    </li>
                    <li>
                        <Link to="/Each">Each Presentation</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
