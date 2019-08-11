import React, {
  Component
} from "react";
import logo from "../images/Jas_logo.svg";
import {
  FaAlignRight
} from "react-icons/fa";
import {
  Link
} from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return ( <
      nav className = "navbar" >

      <
      div className = "nav-center" >

      <
      div className = "nav-header" >


      <
      button type = "button"
      className = "nav-btn"
      onClick = {
        this.handleToggle
      } >
      <
      FaAlignRight className = "nav-icon" / >
      <
      /button> <
      /div> <
      ul className = {
        this.state.isOpen ? "nav-links show-nav" : "nav-links"
      } >
      <
      li >
      <
      Link to = "/" > HOME < /Link> </li > < li >
      <
      Link to = "/rooms" > ROOMS < /Link> </li >
      <
      li >
      <
      Link to = "/booking" > BOOKING < /Link> </li >
      <
      li >

      <
      Link to = "/about" > ABOUT < /Link> </li >

      <
      li >

      <
      Link to = "/contact" > CONTACT US < /Link> </li >
      <
      /ul> <
      /div> <
      /nav>
    );
  }
}