import React from "react";
import styled from "styled-components";
import Cv from "./Cv";
import ReactToPrint from "react-to-print";
import Button from "./Button";
import "@fontsource/poppins";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";

const Container = styled.div`
  height: calc(100vh - 2.5em);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  position: sticky;
  top: -2em;
`;

const SectionDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  margin-top: 1rem;
  font-family: "Inter", Arial, Helvetica, sans-serif;
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
    background: linear-gradient(180deg, rgba(86,10,168,1) 8%, rgba(137,40,255,1) 100%);
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
    font-weight: 600;
  }
  
  & h3 {
    color: rgba(86,10,168,0.9);
    border-bottom: 1px solid rgb(200, 200, 200);
  }

  & p {
    margin: 0;
    color: rgba(0,0,0,0.6)
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