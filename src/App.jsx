import React, { Component } from "react";
import "./App.css";
import { hot } from "react-hot-loader";

class App extends Component {
    state = {
        count: 0
    };

 
    render() {
        return (
            <div>
                {this.state.count}
                <button
                    onClick={() =>
                        this.setState(state => ({
                            count: state.count + 1
                        }))
                    }
                >
                    +
                </button>
               
                <button
                    onClick={() =>
                        this.setState(state => ({
                            count: state.count - 1
                        }))
                    }
                >
                    -
                </button>
                <h1> hello dsfs?</h1>
                fhfhghfh fgdfg dhdhdh
            </div>
        );
    }
}

App.propTypes = {};

export default hot(module)(App);
