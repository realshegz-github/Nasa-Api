import { axios } from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Main from "./Component/Main";

function App() {

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Main/>
    </BrowserRouter>
  );
}

export default App;
