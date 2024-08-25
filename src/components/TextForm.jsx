import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    console.log("message", e.target.value);

    setText(e.target.value);
  };

  const handleCase = (convert) => {
    if (convert === "upper") {
      setText(text?.toUpperCase());
    } else {
      setText(text?.toLowerCase());
    }
  };
  const handleClearClick =()=>{
    let newText=" "
    setText(newText)
  }
  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  return (
    <>
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="my boxs"
          rows="8"
          onChange={handleChange}
        ></textarea>
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <button className="btn btn-primary" onClick={() => handleCase("upper")}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={() => handleCase("lower")}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" >
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
    </div>
    </>
  );
};

export default TextForm;
