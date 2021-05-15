import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

// import { render } from "react-dom";

class App extends Component {
  state = {
    layoutName: "default",
    inputName: "input1",
    input: {},
    chancesUsed: 0,
    hintWord: "hollywood",
    word:"cube",
  };

  onChangeAll = (inputObj) => {
    this.setState({
      input: inputObj
    });

    console.log("Input changed", inputObj);
    console.log(this.state.input);
  };

  onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  handleShift = () => {
    let layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  };

  crossLetter = (curr_value) =>{
    console.log(curr_value.value);
    console.log("button pressed");
    console.log(typeof curr_value);
    console.log(this.state[this.curr_value]);
    console.log(this.state);
  }
  onChangeInput = (event) => {
    let inputVal = event.target.value;

    let updatedInputObj = {
      ...this.state.input,
      [this.state.inputName]: inputVal
    };

    this.setState(
      {
        input: updatedInputObj
      },
      () => {
        this.keyboard.setInput(inputVal);
      }
    );
  };

  setActiveInput = (inputName) => {
    this.setState(
      {
        inputName: inputName
      },
      () => {
        console.log("Active input", inputName);
      }
    );
  };

  render() {
    return (
      <div className="app">
        <div className="hollywood">
          <div className="row-top">
            <Button buttonAction={this.crossLetter} curr_value1={this.state.H} forwordRef={this.curr_value = "H"}>H</Button>
            <Button buttonAction={this.crossLetter} curr_value1={this.state.O1} ref1={this.curr_value = "O1"}>O</Button>
            <Button buttonAction={this.crossLetter} curr_value1={this.state.L1} ref1={this.curr_value = "L1"}>L</Button>
            <Button buttonAction={this.crossLetter} curr_value1={this.state.L2} ref1={this.curr_value = "L2"}>L</Button>
            <Button buttonAction={this.crossLetter} curr_value1={this.state.Y} ref1={this.curr_value = "Y"}>Y</Button>
            <Button buttonAction={this.crossLetter} curr_value1={this.state.W} ref1={this.curr_value = "W"}>W</Button>
            <Button buttonAction={this.crossLetter} curr_value1={this.state.O2} ref1={this.curr_value = "O2"}>O</Button>
            <Button buttonAction={this.crossLetter} curr_value1={this.state.O3} ref1={this.curr_value = "O3"}>O</Button>
            <Button buttonAction={this.crossLetter} curr_value1={this.state.D} ref1={this.curr_value = "D"}>D</Button>
          </div>
        </div>
        <div className="row">
        <input
          onFocus={() => this.setActiveInput("input1")}
          value={this.state.input["input1"] || ""}
          placeholder={"Input 1"}
          onChange={(e) => this.onChangeInput(e)}
        />
        <input
          onFocus={() => this.setActiveInput("input2")}
          value={this.state.input["input2"] || ""}
          placeholder={"Input 2"}
          onChange={(e) => this.onChangeInput(e)}
        />
        <input
          onFocus={() => this.setActiveInput("input3")}
          value={this.state.input["input3"] || ""}
          placeholder={"Input 3"}
          onChange={(e) => this.onChangeInput(e)}
        />
        <input
          onFocus={() => this.setActiveInput("input4")}
          value={this.state.input["input4"] || ""}
          placeholder={"Input 4"}
          onChange={(e) => this.onChangeInput(e)}
        />
        </div>
        <Keyboard
          keyboardRef={(r) => (this.keyboard = r)}
          inputName={this.state.inputName}
          layoutName={this.state.layoutName}
          onChangeAll={(inputObj) => this.onChangeAll(inputObj)}
          onKeyPress={(button) => this.onKeyPress(button)}
        />
      </div>
    );
  }
}

// render(<App />, document.getElementById("root"));


export default App;
