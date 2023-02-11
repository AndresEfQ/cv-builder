import React from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import StyledForm from "./StyledForm";
import Experience from "./Experience";
import Education from "./Education";
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

  render () {
    let experienceSections = this.props.state.experience.map(section => <Experience 
      key={section.id} 
      id={section.id}
      removeExperience={this.props.handleRemoveExperience}
      changeInput={this.props.handleExperienceInputChange}
    />);
    let educationSections = this.props.state.education.map(section => <Education
      key={section.id}
      id={section.id}
      removeEducation={this.props.handleRemoveEducation}
      changeInput={this.props.handleEducationInputChange}
    />)
    return (
      <StyledSection>
        <PersonalInfo
          changeInput={this.props.handlePersonalInfoInputChange}
          loadPhoto={this.props.handlePhotoLoad} 
        />
        <StyledForm>
          <fieldset>
            <legend>Experience</legend>
              {experienceSections}
          </fieldset>
          <Button
            content="Add Experience" 
            onClick={this.props.handleAddExperience}
          />
          <fieldset>
            <legend>Education</legend>
            {educationSections}
          </fieldset>
          <Button 
            content="Add Education"
            onClick={this.props.handleAddEducation}
          />
        </StyledForm>
      </StyledSection>
    )
  }
}

export default EditSection;