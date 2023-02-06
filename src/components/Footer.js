import React from "react";
import { FaGithub } from "react-icons/fa";
import "@fontsource/poppins";
import "./footer.css";

class Footer extends React.Component {
  render () {
    return (
      <footer>Copyright © <a href="https://github.com/AndresEfQ">AndresEfQ 2023 <FaGithub /></a></footer>
      
    )
  }
}

export default Footer