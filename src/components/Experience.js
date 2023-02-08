import React from "react";
import StyledForm from "./StyledForm";

class Experience extends React.Component {
  render () {

    return (
      <StyledForm>
        <fieldset>
          <legend>Experience</legend>
          <ul>
            <li>
              <label htmlFor="position">Position</label>
              <input type="text" name="position" id="position" />
            </li>
            <li>
              <label htmlFor="company">Company</label>
              <input type="text" name="company" id="company" />
            </li>
            <li>
              <label htmlFor="city">City</label>
              <input type="text" name="title" id="title"  />
            </li>
            <li>
              <label htmlFor="from">From</label>
              <input type="text" name="from" id="from" />
            </li>
            <li>
              <label htmlFor="to">To</label>
              <input type="text" name="to" id="to" />
            </li>
          </ul>
        </fieldset>
      </StyledForm>
    )
  }
}

export default Experience;