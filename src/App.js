//import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputarr, SetInputarr] = useState([]);
  const [inputdata, SetInputdata] = useState({ name: "", rollNo: "" });
}

function changehandle(e) {
  SetInputdata({ ...inputdata, [e.target.name]: e.target.value });
}

function changehandle() {
  SetInputarr([...inputarr,  {name, rollNo }]);

  console.log(inputdata, "input data what we Enter");
  SetInputdata({ name: "", rollNo: "" });
}

function changehandle2() {
  console.log("Object strore in array", inputarr);
}
return (
  <div className="App">
    <input
      type="text"
      autoComplete="off"
      name="name"
      value={inputdata.name}
      onChange={changehandle}
      placeholder="Enter Name"
    />
    <br />

    <input
      type="text"
      autoComplete="off"
      name="rollNo"
      value={inputdata.rollNo}
      onChange={changehandle}
      placeholder="Roll No"
    />
    <br />

    <button onClick={changehandle2}>Add It</button>
    <br />
    <button onClick={changehandle2}>Check array in console</button>
    <br />
    <table border={1} width="30%" cellPadding={10}>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Roll No</td>
        </tr>
        {inputarr.map((info, ind) => {
          return (
            <tr key={ind}>
              <td>{info.name}</td>
              <td>{info.rollNo}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default App;
