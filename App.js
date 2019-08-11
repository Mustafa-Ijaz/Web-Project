import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRom from "./pages/SingleRoom";
import Booking from "./pages/booking";
import About from "./pages/about";
import Errorpg from "./pages/Error";
import {
  Route,
  Switch
} from "react-router-dom";

import NavBar from "./components/Navbar";

function App() {
  return ( <
    >
    <
    NavBar / >
    <
    Switch >
    <
    Route exact path = "/"
    component = {
      Home
    }
    /> <
    Route exact path = "/rooms/"
    component = {
      Rooms
    }
    /> <
    Route exact path = "/rooms/:slug"
    component = {
      SingleRom
    }
    /> <
    Route exact path = "/booking"
    component = {
      Booking
    }
    /> <
    Route exact path = "/about"
    component = {
      About
    }
    /> <
    Route component = {
      Errorpg
    }
    /> <
    /Switch> <
    />
  );
}

export default App;