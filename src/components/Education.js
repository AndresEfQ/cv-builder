import React from "react";
import Button from "./Button";
import styled from "styled-components";

const FlexDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

class Education extends React.Component {
  render () {

    return (
    <FlexDiv>
      <ul>
        <li>
          <label htmlFor="university">University Name</label>
          <input type="text" name="university" id="university" onChange={(e) => this.props.changeInput(e, this.props.id)} />
        </li>
        <li>
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" onChange={(e) => this.props.changeInput(e, this.props.id)} />
        </li>
        <li>
          <label htmlFor="degree">Degree</label>
          <input type="text" name="degree" id="degree" onChange={(e) => this.props.changeInput(e, this.props.id)} />
        </li>
        <li>
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" onChange={(e) => this.props.changeInput(e, this.props.id)} />
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
        onClick={(e) => this.props.removeEducation(e, this.props.id)} />
    </FlexDiv>
    )
  }
}

export default Education;
