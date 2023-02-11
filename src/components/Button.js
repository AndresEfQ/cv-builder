import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 12px 18px;
  border-radius: 5px;
  border: none;
  background: ${props => props.color ? props.color : "linear-gradient(180deg, rgba(86,10,168,1) 8%, rgba(137,40,255,1) 100%)"};
  font-size: 16px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  margin: ${props => {
    return (
      props.position === "right" ? "12px 0 12px auto" : 
      props.position === "left" ? "12px auto 12px 0" : 
      "12px auto 12px auto"
    );}
  };

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