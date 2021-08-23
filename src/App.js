//This is a comment//
import './App.css';
import React, {useState} from "react"; 
function App() { 
  let [inp, setInp] = useState("");
  let [res, setRes] = useState("");
  function eva(a){
    setInp(inp + a);
  }
  function cls(){
    setInp(inp = "");
    setRes(res = "");
  }
  function evaluate(){
    setRes(res = eval(inp));
  }
  return (
    <div id ="main">
      <div id="top">
        <div id = "screen">
          <p id = "input">{inp}</p>
          <p id = "result">{res}</p>
        </div>
      </div>
      <div id = "bottom">
        <div id = "keypad">
         <button onClick ={() => eva("7")}>7</button>
         <button onClick ={() => eva("8")}>8</button>
         <button onClick ={() => eva("9")}>9</button>
         <button onClick ={cls}>CLS</button>
         <button onClick ={() => eva("4")}>4</button>
         <button onClick ={() => eva("5")}>5</button>
         <button onClick ={() => eva("6")}>6</button>
         <button onClick ={() => eva(" / ")}>/</button>
         <button onClick ={() => eva("1")}>1</button>
         <button onClick ={() => eva("2")}>2</button>
         <button onClick ={() => eva("3")}>3</button>
         <button onClick ={() => eva(" * ")}>X</button>
         <button onClick ={() => eva("0")}>0</button>
         <button onClick ={() => eva(" + ")}>+</button>
         <button onClick ={() => eva(" - ")}>-</button>
         <button onClick ={evaluate}>=</button>
        </div>
      </div> 
    </div>
  );
}

export default App;