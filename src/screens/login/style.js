import styled from "styled-components";

export const Form = styled.form`
	height: auto;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
`;
export const H1 = styled.h1`
	padding-bottom: 10px;
	width: 100%;
`;
export const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	height: auto;
	width: 100%;
	border-radius: 2px;
`;
export const InputError = styled.p`
	color: red;
	text-align: left;
	width: 100%;
	font-variant: small-caps;
	padding: ${(props) => (props.error ? "2.5px 0" : 0)};
`;

export const Input = styled.input`
	height: 65px;
	width: 100%;
	border: none;
	margin: 10px 0;
	padding-left: 10px;
	transition: 0.5s;
	background: #f7f8fa;
	border-radius: 5px;
	border: ${(props) => (props.error ? "2.5px solid red" : "none")};
	&:focus {
		outline: none;
	}
`;
export const ContainerPassword = styled.div`
	position: relative;
	width: 100%;
	.icon {
		position: absolute;
		right: 2.5%;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		width: auto;
	}
`;

export const Btn = styled.button`
	height: 50px;
	width: 100%;
	color: white;
	background: #63d79e;
	border: 2.5px solid transparent;
	border-radius: 5px;
	font-weight: 900;
	margin: 10px 0;
	transition: 0.5s;
	&:focus {
		outline: none;
		background: white;
		border: 2.5px solid #63d79e;
	}
	&:hover {
		outline: none;
		color: #63d79e;
		background: white;
		border: 2.5px solid #63d79e;
	}
`;
