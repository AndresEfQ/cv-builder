import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 12px 18px;
  border-radius: 5px;
  border: none;
  background-color: ${props => props.color ? props.color : "rgb(180, 0, 0)"};
  font-size: 16px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  margin: ${props => {
    return (
      props.position === "right" ? "12px 0 0 auto" : 
      props.position === "left" ? "12px auto 0 0" : 
      "12px auto 0 auto"
    )}
  };
  margin-top: 12px;

  &:hover {
    cursor: pointer;
  }
`;

class Button extends React.Component {
  render () {
    let button;
    if (this.props.inactive) {
      button = <StyledButton color="rgb(110, 110, 110)">{this.props.content}</StyledButton>
    } else {
      button = <StyledButton 
      color={this.props.color}
      onClick={this.props.onClick}
      position={this.props.position}
    >
      {this.props.content}
    </StyledButton>
    }
    return button
  }
}

export default Button;