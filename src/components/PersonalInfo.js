import React from "react";
import "@fontsource/raleway/700.css";
import styled from "styled-components";
import StyledForm from "./StyledForm";

const StyledInputFile = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 100%;

  & input[type="file"] {
    position: absolute;
    z-index: -1;
    top: 10px;
    left: 8px;
    font-size: 17px;
    color: rgb(190, 190, 190);
  }

  & div {
    position: relative;
  }

  & label {
    display: inline-block;
    padding: 12px 18px;
    cursor: pointer;
    border-radius: 5px;
    background: linear-gradient(180deg, rgba(86,10,168,1) 8%, rgba(137,40,255,1) 100%);
    font-size: 16px;
    font-weight: bold;
    color: rgb(255, 255, 255);
  }
`;

class PersonalInfo extends React.Component {
  render () {
    return (
      <StyledForm>
        <fieldset>
          <legend>Personal Information</legend>
          <ul>
            <li>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" onChange={this.props.changeInput} />
            </li>
            <li>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" onChange={this.props.changeInput} />
            </li>
            <li>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" onChange={this.props.changeInput}  />
            </li>
            <li>
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" onChange={this.props.changeInput} />
            </li>
            <li>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" name="phone" id="phone" onChange={this.props.changeInput} />
            </li>
            <li>
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" id="email"  onChange={this.props.changeInput} />
            </li>
            <li>
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" cols="30" rows="3" placeholder="A short description of who are you and your skills" onChange={this.props.changeInput}></textarea>
            </li>
            <li>
              <StyledInputFile>
                <div>
                  <label htmlFor="photo">Photo</label>
                  <input type="file" name="photo" id="photo" onChange={this.props.loadPhoto} accept=".jpg, .jpeg, .png" />
                </div>
              </StyledInputFile>
            </li>
          </ul>
        </fieldset>
      </StyledForm>
    )
  }
}

export default PersonalInfo
