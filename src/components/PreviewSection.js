import React from "react";
import styled from "styled-components";
import "@fontsource/poppins";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2em;
  align-items: center;

  & header {
    color: white;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-size: 2.5em;
    font-weight: bold;
    background-color: rgba(180, 20, 20, 0.6);
    height: 4rem;
    width: calc(100% - 4rem);
    padding: 2rem;
    display: flex;
    justify-content: start;
    align-items: start;
  }
`;

class PreviewSection extends React.Component {
  render () {
    return (
      <StyledSection>
        <header>
          {this.props.state.personalInfo.firstName} {this.props.state.personalInfo.lastName}
        </header>
        <main></main>
        <aside></aside>

      </StyledSection>
    )
  }
}

export default PreviewSection