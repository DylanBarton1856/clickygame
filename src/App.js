import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    score: 0,
    highscore: 0,
    array: [
      {
        link: "http://via.placeholder.com/640x360",
        id: 1
      },
      {
        link: "http://via.placeholder.com/640x360",
        id: 2
      },
      {
        link: "http://via.placeholder.com/640x360",
        id: 3
      },
      {
        link: "http://via.placeholder.com/640x360",
        id: 4
      }
    ],
    clicked: []
  };

  handleIncrement = i => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
    console.log(i);
    // check to see if clicked is in array, if not push to array, increment score        reshuffle
    if (this.state.clicked > 0) {
      for (var j = 0; j < this.state.clicked.length; j++) {
        if (i === this.state.clicked[j].id) {
          console.log("item has been clicked");
        } else {
          console.log("not clicked");
          this.setState((state, props) => {
            return { clicked: [...state.clicked, { id: i }] };
          });
        }
      }
    } else {
      this.setState((state, props) => {
        return { clicked: [...state.clicked, { id: i }] };
      });
    }
  };
  // if it is, reset score/game        reshuffle

  render() {
    return (
      <div className="App">
        {/* score */}
        {/* high score */}
        <p className="card-text">score: {this.state.score}</p>
        <p className="card-text">high score: {this.state.highscore}</p>

        {/* card component */}
        {this.state.array.map((images, i) => (
          <img
            src={images.link}
            onClick={() => {
              this.handleIncrement(images.id);
            }}
            key={images.id}
          />
        ))}

        {/* array of photos */}
      </div>
    );
  }
}

export default App;
