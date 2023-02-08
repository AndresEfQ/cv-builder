import React from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import StyledButton from "./StyledButton";

const StyledSection = styled.section`
  margin: 2em;
  padding: 3em;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 56px -9px rgba(0,0,0,1);
`;

class EditSection extends React.Component {
  render () {
    return (
      <StyledSection>
        <PersonalInfo />
        <Experience />
        <StyledButton>Add Experience</StyledButton>
        Here goes the information
      </StyledSection>
    )
  }
}

export default EditSection;