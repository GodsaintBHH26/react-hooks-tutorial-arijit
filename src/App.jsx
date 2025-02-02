import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import useLocalStorage from "./useLocalStorage";

function App() {

  const [name, setName] = useLocalStorage('username', '');
  const [id, setId] = useLocalStorage('userid', '');

  return (
    <>
    <input type="text" placeholder="Enter Your Name" value={name} onChange={e=>setName(e.target.value)} />
    <h2>Hello, {name} </h2>

    <input type="text" placeholder="Enter Your Name" value={id} onChange={e=>setId(e.target.value)} />
    <h2>Your ID: {id} </h2>
    </>
  );
}

export default App;
