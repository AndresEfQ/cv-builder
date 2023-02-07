import React from "react";
import EditSection from "./EditSection";
import PreviewSection from "./PreviewSection";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  gap: 4em;
`;

class Main extends React.Component {
  render () {
    return (
      <StyledMain>
        <EditSection />
        <PreviewSection />
      </StyledMain>
    )
  }
}

export default Main