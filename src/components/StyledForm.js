import styled from "styled-components";
import "@fontsource/raleway/700.css";

const StyledForm = styled.form`
	box-sizing: border-box;
	padding: 0;
	margin: 1.5em 0;
	font-family: "Raleway", Arial, Helvetica, sans-serif;
	width: calc(100% - 4em);
	display: flex;
	flex-direction: column;
	
	& fieldset {
		width: 100%;
		border-radius: 10px;
		background-color: rgb(230, 230, 230);
		border: none;
		position: relative;
	}

	& legend {
		position: absolute;
		top: -25px
	}
	
	& textarea {
		resize: none;
		border-radius: 5px;
		border: none;
		font-family: inherit;
	}

	& ul {
		list-style: none;
		margin: 0;
		padding: 0;
		width: 100%
	}

	& li {
		margin: 0.5em;
		display: flex;
		flex-direction: column;
	}

	& input {
		height: 2em;
		border-radius: 5px;
		border: none;
		outline: none;
	}
`;

export default StyledForm;
