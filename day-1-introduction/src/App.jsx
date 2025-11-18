import React from "react";
import './App.css'

function App() {


  return (
    <>
      <h2 className="active">Hello World!</h2>
      <h3>Lorem, ipsum dolor.</h3>
      <p style={text} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, esse.
      </p>
    </>
  );
}

let text = {
  "color" : "red",
  "font-size" : "21px",
  "text-decoration" : "underline"
}

export default App;
