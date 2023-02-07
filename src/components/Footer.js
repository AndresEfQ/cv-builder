import React from "react";
import { FaGithub } from "react-icons/fa";
import "@fontsource/poppins";
import styled from "styled-components";

const StyledFooter = styled.footer`
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-weight: 500;
  background-color: rgb(70, 70, 70);
  color: rgb(216, 216, 216);
  padding: 0.4em;
  text-align: center;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: rgb(216, 216, 216);

  &:hover {
    color: black;
  }
`;

class Footer extends React.Component {
  render () {
    return (
      <StyledFooter>Copyright © <StyledA href="https://github.com/AndresEfQ">AndresEfQ 2023 <FaGithub /></StyledA></StyledFooter>
    )
  }
}

export default Footer