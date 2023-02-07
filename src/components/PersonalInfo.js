import React from "react";
import styled from "styled-components";
import "@fontsource/raleway/700.css";

const StyledFieldset = styled.fieldset`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledForm = styled.form`
  font-family: "Raleway", Arial, Helvetica, sans-serif;
  width: 100%;
  & textarea {
    resize: none;
  }
`;

const StyledUl = styled.ul`
  list-style: none;

  & li {
    margin: 0.5em;
    display: flex;
    flex-direction: column;

    & input {
      height: 1.5em;
      border-radius: 5px;
      border: 1px solid rgb(200, 200, 200);
      outline: none;
    }
  }
`;

class PersonalInfo extends React.Component {
  render () {
    return (
      <StyledForm>
        <StyledFieldset>
          <legend>Personal Information</legend>
          <StyledUl>
            <li>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" />
            </li>
            <li>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" />
            </li>
            <li>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title"  />
            </li>
            <li>
              <label htmlFor="photo">Photo</label>
              <input type="file" name="photo" id="photo"  />
            </li>
            <li>
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" />
            </li>
            <li>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" name="phone" id="phone" />
            </li>
            <li>
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" id="email"  />
            </li>
            <li>
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" cols="30" rows="3" placeholder="A short description of who are you and your skills" onResize={false}></textarea>
            </li>
          </StyledUl>
        </StyledFieldset>
      </StyledForm>
    )
  }
}

export default PersonalInfo