import React from "react";
import styled from "styled-components";
import uniqid from "uniqid";
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

  handleAddExperience = (e) => {
    e.preventDefault();
    this.setState({
      experience: [...this.state.experience, {
        id: uniqid(),
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      }],
      education: this.state.education,
    });
  }

  handleAddEducation = (e) => {
    e.preventDefault();
    this.setState({
      experience: this.state.experience,
      education: [...this.state.education, {
        id: uniqid(),
        university: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
      }],
    });
  }

  handleRemoveExperience = (e, sectionId) => {
    e.preventDefault();
    this.setState({
      experience: this.state.experience.filter((section) => section.id !== sectionId),
      education: this.state.education,
    });
  }

  handleRemoveEducation = (e, sectionId) => {
    e.preventDefault();
    this.setState({
      experience: this.state.experience,
      education: this.state.education.filter((section) => section.id !== sectionId),
    });
  }

  handleExperienceInputChange = (e, sectionId) => {
    const input = e.target.id;
    const value = e.target.value;
    this.setState({
      experience: this.state.experience.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            [input]: value,
          }; 
        } else {
          return section;
        }
      }),
      education: this.state.education,
    });
  }

  handleEducationInputChange = (e, sectionId) => {
    const input = e.target.id;
    const value = e.target.value;
    this.setState({
      experience: this.state.experience,
      education: this.state.education.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            [input]: value,
          };
        } else {
          return section;
        }
      }),
    });
  }

  render () {
    let experienceSections = this.state.experience.map(section => <Experience 
      key={section.id} 
      id={section.id}
      removeExperience={this.handleRemoveExperience}
      changeInput={this.handleExperienceInputChange}
    />);
    let educationSections = this.state.education.map(section => <Education
      key={section.id}
      id={section.id}
      removeEducation={this.handleRemoveEducation}
      changeInput={this.handleEducationInputChange}
    />)
    return (
      <StyledSection>
        <PersonalInfo />
        <StyledForm>
          <fieldset>
            <legend>Experience</legend>
              {experienceSections}
          </fieldset>
          <Button
            content="Add Experience" 
            onClick={this.handleAddExperience}
          />
          <fieldset>
            <legend>Education</legend>
            {educationSections}
          </fieldset>
          <Button 
            content="Add Education"
            onClick={this.handleAddEducation}
          />
        </StyledForm>
        <div>
          TEST STATE
          <br /> <br />
          <span>{this.state.experience.map((section) => {
            return (
              <div>
                position: {section.position} <br />
                company: {section.company} <br />
                city: {section.city} <br />
                from: {section.from} <br />
                to: {section.to}
                <br /> <br />
              </div>
            )
          })}</span>
          <span>{this.state.education.map((section) => {
            return (
              <div>
                university: {section.university} <br />
                city: {section.city} <br />
                degree: {section.degree} <br />
                subject: {section.subject} <br />
                from: {section.from} <br />
                to: {section.to}
                <br /> <br />
              </div>
            )
          })}</span>
        </div>
      </StyledSection>
    )
  }
}

export default EditSection;