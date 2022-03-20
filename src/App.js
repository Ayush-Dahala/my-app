import Navbar from "./component/Navbar";
import About from "./component/About";
import Textbox from "./component/Textbox";
import React, { useState } from "react";
import Alert from "./component/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  setTimeout(() => {
    setAlert(null);
  }, 1500);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      Type: type,
    });
  }

  function toogleColor() {
    if (mode === "light") {
      document.body.style.background = "blue";
      setName1("enable red mode");
    } else {
      document.body.style.background = "red";
      setName1("enable blue mode");
    }
  }
  function toogle() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      setName("Enable light mode");
      showAlert("dark mode is on", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setName("Enable dark mode");
      showAlert("light mode is on", "Danger");
      setInterval(() => {
        document.title = "TextUtils  is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils";
      }, 1500);
    }
  }

  const [alert, setAlert] = useState("");
  const [name1, setName1] = useState("redMode");
  const [mode, setMode] = useState("dark");
  const [name, setName] = useState("Enable light mode");
  return (
    <>
     

     
      <Router>
      <Navbar
        mode={mode}
        toogle={toogle}
        name={name}
        name1={name1}
        toogleColor={toogleColor}
      />
       <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Textbox />}></Route>
          <Route path="Link" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
