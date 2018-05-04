import React, { Component} from "react";
import Message from "./Components/Message/Message.js";
import "./App.css";


class App extends Component{
  render(){

    return(
      <div className="App">
        <h1> Knowvi </h1>
        <Message message="Get Excited About Good Grades" />
      </div>
    );

  }
}

export default App;
