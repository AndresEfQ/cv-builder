import React from "react";
import styled from "styled-components";
import "@fontsource/raleway/700.css";
import StyledForm from "./StyledForm";

class PersonalInfo extends React.Component {
  render () {
    return (
      <StyledForm>
        <fieldset>
          <legend>Personal Information</legend>
          <ul>
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
          </ul>
        </fieldset>
      </StyledForm>
    )
  }
}

export default PersonalInfo
