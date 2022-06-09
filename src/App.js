import React, { Component } from "react";
import "./App.css";
import imgsrc from "./img_saoudi.jpg";
function intervalID() {let myCallback
   return console.log(setInterval(myCallback, 1000))};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }
  changeState = () => {
    this.setState({
      login: !this.state.login,
    });
  };
  Person = {
    fullName: "Ousama Saoudi",
    bio: "Currently  looking for a new opportunity with a first experience as a junior embedded software engineer at sagemcom software and technologies working in the Gateway department I think my profile would fit perfectly with your recent job requirements.Motivated and always looking to learn from the best, working at primatec would be an enriching experience for me.",
    imgSource: (
      <img width={400} height={300} src={imgsrc} alt="imageinSource" />
    ),
    profession: "Electronics engineer",
  };

  render() {
    const { login } = this.state;
    return (
      <button
        type="button"
        className={login ? "btn-primary" : "btn-danger"}
        onClick={this.changeState}
      >
        {login ? (
          <div>
            <h1>The component has been rendered for {intervalID} seconds</h1>
            <h1>{this.Person.fullName}</h1>
            <h2>{this.Person.bio}</h2>
            <h3>{this.Person.imgSource}</h3>
            <h2>{this.Person.profession}</h2>
          </div>
        ) : (
          <h1>Show profile</h1>
        )}
      </button>
    );
  }
}

export default App;
