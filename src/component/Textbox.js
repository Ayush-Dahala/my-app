import React, {useState} from "react";

export default function Textbox(props) {
  
  const [text, setText] = useState("");

  
  function handleOnChange(event) {
    console.log("On change");
    setText(event.target.value);
  }


  function handleUpClick() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("you clicked uppercase","success");
  }

  function handleLoClick() {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("you clicked lowercase","success");
  }
  
   return (
    <>
    <div>
<div className="container mt-5" style={{color: props.mode==='dark'?'grey':'white'}}>
  <h1>text</h1>
  <textarea className='form-Control w-50 p-3' value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id='mybox' rows= '20' ></textarea>
</div>
<button className="btn" onClick={handleUpClick}>click here to convert into upper case</button>
<button className="btn" onClick={handleLoClick}>click here to convert into lower case</button>
    </div>
  <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <p>length of character with space is {text.length} </p>
    <p>no. of character without space {text.length-(text.split(" ").length-1)}</p>
    <p>no. of words {text.split(" ").length} </p>
    <h1>{text}</h1>
   

  </div>
  </>
  );
 

 
}
