import React from "react";
import styled from "styled-components";
import uniqid from "uniqid";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Button from "./Button";

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

  constructor(props) {
    super(props);

    this.state = {
      experience: [{
        id: uniqid(),
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      },
      {
        id: uniqid(),
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      }],
      education: [{
        id: uniqid(),
        university: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
      }],
    }
  }

  handleAddExperience = () => {

  }

  handleRemoveExperience = () => {

  }

  render () {
    let experienceSections = this.state.experience.map(element => <Experience removeExperience={this.handleRemoveExperience} />)
    return (
      <StyledSection>
        <PersonalInfo />
        {experienceSections}
        <Button
          content="Add Experience"
        />
        Here goes the information
      </StyledSection>
    )
  }
}

export default EditSection;