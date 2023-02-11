import React from "react";
import styled from "styled-components";
import "@fontsource/poppins";
import avatar from "../images/empty_avatar.cedf234c.png"

const Container = styled.div`
  height: calc(100vh - 2.5em);
  flex: 1;
  overflow-y: scroll;
  position: sticky;
  top: -2em;
`;

const StyledSection = styled.section`
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 2em;
  align-items: center;
  box-shadow: 0px 0px 56px -9px rgba(0,0,0,1);

  & header {
    color: white;
    font-size: 2em;
    font-weight: bold;
    background-color: rgba(180, 20, 20, 0.6);
    height: 6rem;
    width: calc(100% - 4rem);
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }

  & h1, h4, h5 {
    margin: 0;
  }
  
  & h3 {
    color: rgba(180, 20, 20, 0.6);
    border-bottom: 1px solid rgb(200, 200, 200);
  }

  & main {
    display: flex;
    width: calc(100% - 2rem);
    padding: 1rem;
    gap: 1rem;

    & div {
      flex: 1;
    }
  }


  & img {
    width: 12rem;
  }
`;

class PreviewSection extends React.Component {
  render () {
    return (
      <Container>
        <StyledSection>
          <header>
            <h1>{this.props.state.personalInfo.firstName} {this.props.state.personalInfo.lastName}</h1>
            <h5>{this.props.state.personalInfo.title}</h5>
          </header>
          <main>
            <div>
              <section>
                <h3>Description</h3>
                <p>{this.props.state.personalInfo.description}</p>
              </section>
              <section>
                <h3>Experience</h3>
                {this.props.state.experience.map((section) => {
                  return (
                    <div key={section.id}>
                      <div>{section.from} {section.from ? '-' : '' } {section.to}</div>
                      <div>
                        <h4>{section.position}</h4>
                        <p>{section.company}{section.company ? ',' : ''} {section.city}</p>
                      </div>
                    </div>
                  )
                })}
              </section>
              <section>
                <h3>Education</h3>
                {this.props.state.education.map((section) => {
                  return (
                    <div key={section.id}>
                      <div>{section.from} {section.from ? '-' : ''} {section.to}</div>
                      <div>
                        <h4>{section.university}{section.university ? ',' : ''} {section.city}</h4>
                        <p>{section.degree ? 'Degree:' : ''} {section.degree}</p>
                        <p>{section.subject ? 'Subject:' : ''} {section.subject}</p>
                      </div>
                    </div>
                  )
                })}
              </section>
            </div>
            <aside>
                <img src={avatar} alt="Profile pic" />
                <section>
                  <h3>Personal Details</h3>
                  <h4>{this.props.state.personalInfo.address ? 'Address' : ''}</h4>
                  <p>{this.props.state.personalInfo.address}</p>
                  <h4>{this.props.state.personalInfo.phone ? 'Phone Number' : ''}</h4>
                  <p>{this.props.state.personalInfo.phone}</p>
                  <h4>{this.props.state.personalInfo.email ? 'Email' : ''}</h4>
                  <p>{this.props.state.personalInfo.email}</p>
                </section>
            </aside>
          </main>
        </StyledSection>
      </Container>
    )
  }
}

export default PreviewSection