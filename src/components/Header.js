import React from "react";
import "@fontsource/cinzel/900.css";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: rgb(70, 70, 70);
  color: rgb(216, 216, 216);
  font-family: "Cinzel", serif;
  font-weight: 900;
  font-size: 4em;
  text-align: center;
`;

class Header extends React.Component {
  render () {
    return (
      <StyledHeader>CV Builder</StyledHeader>
    )
  }
}

export default Header;