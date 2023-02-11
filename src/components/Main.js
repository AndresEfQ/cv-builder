import React from "react";
import EditSection from "./EditSection";
import PreviewSection from "./PreviewSection";
import styled from "styled-components";
import uniqid from "uniqid";

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 4rem;
  position: relative;
`;

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      personalInfo: {
        id: uniqid(),
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        phone: '',
        email: '',
        description: '',
        photoUrl: '',
      },
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
      ...this.state,
      experience: [...this.state.experience, {
        id: uniqid(),
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      }],
    });
  }

  handleAddEducation = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
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
      ...this.state,
      experience: this.state.experience.filter((section) => section.id !== sectionId),
    });
  }

  handleRemoveEducation = (e, sectionId) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      education: this.state.education.filter((section) => section.id !== sectionId),
    });
  }

  handleExperienceInputChange = (e, sectionId) => {
    const input = e.target.id;
    const value = e.target.value;
    this.setState({
      ...this.state,
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
    });
  }

  handleEducationInputChange = (e, sectionId) => {
    const input = e.target.id;
    const value = e.target.value;
    this.setState({
      ...this.state,
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

  handlePersonalInfoInputChange = (e) => {
    const input = e.target.id;
    const value = e.target.value;
    this.setState({
      ...this.state,
      personalInfo: {
        ...this.state.personalInfo,
        [input]: value,
      }
    });
  }

  render () {
    return (
      <StyledMain>
        <EditSection
          state={this.state}
          handleAddExperience={this.handleAddExperience}
          handleAddEducation={this.handleAddEducation}
          handleRemoveExperience={this.handleRemoveExperience}
          handleRemoveEducation={this.handleRemoveEducation}
          handlePersonalInfoInputChange={this.handlePersonalInfoInputChange}
          handleExperienceInputChange={this.handleExperienceInputChange}
          handleEducationInputChange={this.handleEducationInputChange}
        />
        <PreviewSection 
          state={this.state}
        />
      </StyledMain>
    )
  }
}

export default Main