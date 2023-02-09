import React from "react";
import Button from "./Button";
import styled from "styled-components";

const FlexDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

class Experience extends React.Component {
  render () {

    return (
    <FlexDiv>
      <ul>
        <li>
          <label htmlFor="position">Position</label>
          <input type="text" name="position" id="position" onChange={(e) => this.props.changeInput(e, this.props.id)} />
        </li>
        <li>
          <label htmlFor="company">Company</label>
          <input type="text" name="company" id="company" onChange={(e) => this.props.changeInput(e, this.props.id)} />
        </li>
        <li>
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" onChange={(e) => this.props.changeInput(e, this.props.id)} />
        </li>
        <li>
          <label htmlFor="from">From</label>
          <input type="text" name="from" id="from" onChange={(e) => this.props.changeInput(e, this.props.id)} />
        </li>
        <li>
          <label htmlFor="to">To</label>
          <input type="text" name="to" id="to" onChange={(e) => this.props.changeInput(e, this.props.id)} />
        </li>
      </ul>
      <Button 
        content="Remove" 
        position="right" 
        onClick={(e) => this.props.removeExperience(e, this.props.id)} />
    </FlexDiv>
    )
  }
}

export default Experience;