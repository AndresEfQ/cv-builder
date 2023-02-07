import React from "react";
import styled from "styled-components";
import "@fontsource/raleway/700.css";

const StyledForm = styled.form`
	font-family: "Raleway", Arial, Helvetica, sans-serif;
	width: 100%
	
	& textarea {
		resize: none;
	}

	& ul {
		list-style: none;
	}

	& li {
		margin: 0.5em;
		display: flex;
		flex-direction: column;
	}

	& input {
		height: 1.5em;
		border-radius: 5px;
		border: 1px solid rgb(200, 200, 200);
		outline: none;
	}
`;

export default StyledForm;
