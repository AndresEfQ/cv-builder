import React from "react";
import styled from "styled-components";
import Cv from "./Cv";
import ReactToPrint from "react-to-print";
import Button from "./Button";
import "@fontsource/poppins";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";

const Container = styled.div`
  height: calc(100vh - 4.5em);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  position: sticky;
  top: -2em;
`;

class PreviewSection extends React.Component {
  render () {
    return (
      <Container>
        <Cv state={this.props.state} ref={el => (this.componentRef = el)}/>
        <ReactToPrint
          trigger={() => {
            return <Button content="Print" />
          }}
          content={() => this.componentRef}
        />
      </Container>
    )
  }
}

export default PreviewSection