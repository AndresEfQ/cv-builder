import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2em;
  align-items: center;
`;

class PreviewSection extends React.Component {
  render () {
    return (
      <StyledSection>
        Here goes the preview of the CV
      </StyledSection>
    )
  }
}

export default PreviewSection