import "./App.css";
import Input from "./components/Input.js";
import Button from "./components/Button.js";
import ButtonDel from "./components/ButtonDel.js";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const calc = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      setInput("");
    }
  };

  const buttonClick = (val) => {
    setInput(input + val);
  };

  const deleteClick = () => {
    setInput("");
  };

  const clearNumber = () => {
    setInput(input.slice(0, -1));
  };

  return (
    // calculator with react, using the math library
    <div className="App">
      <div className="container">
        <Input input={input} />

        <ButtonDel deleteActive={deleteClick}>Delete</ButtonDel>
        <Button buttonActive={clearNumber}>C</Button>

        <Button buttonActive={buttonClick}>7</Button>
        <Button buttonActive={buttonClick}>8</Button>
        <Button buttonActive={buttonClick}>9</Button>
        <Button buttonActive={buttonClick}>/</Button>

        <Button buttonActive={buttonClick}>4</Button>
        <Button buttonActive={buttonClick}>5</Button>
        <Button buttonActive={buttonClick}>6</Button>
        <Button buttonActive={buttonClick}>*</Button>

        <Button buttonActive={buttonClick}>1</Button>
        <Button buttonActive={buttonClick}>2</Button>
        <Button buttonActive={buttonClick}>3</Button>
        <Button buttonActive={buttonClick}>-</Button>

        <Button buttonActive={buttonClick}>.</Button>
        <Button buttonActive={buttonClick}>0</Button>
        <Button buttonActive={calc}>=</Button>
        <Button buttonActive={buttonClick}>+</Button>
      </div>
    </div>
  );
}

export default App;
