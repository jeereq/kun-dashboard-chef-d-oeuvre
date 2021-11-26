import styled from "styled-components";

export const Form = styled.form`
	height: auto;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;
export const H1 = styled.h1`
	padding-left: 10%;
	padding-bottom: 20px;
	width: 100%;
`;
export const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	height: auto;
	width: 100%;
	transform: translatex(10%);
	border-radius: 2px;
`;

export const Input = styled.input`
	height: 60px;
	width: ${(props) => (props.min ? "95%" : "100%")};
	box-shadow: 0 0 15px #f8b232;
	border: none;
	padding-left: 10px;
	transition: 0.5s;
	&:focus {
		outline: none;
		transform: scale(1.1);
	}
`;

export const Btn = styled.button`
	height: 50px;
	width: auto;
	color: ${(props) => (props.colorBg ? "white" : "#f8b232")};
	background: ${(props) => {
		return props.colorBg ? props.colorBg : "white";
	}};
	border: none;
	border-radius: 2px;
	box-shadow: 0 0 15px #f8b232;
	font-weight: 900;
	margin: 20px;
	padding: 0 20px;
	transform: translatex(15%);
	transition: 0.5s;
	&:focus {
		outline: none;
		transform: scale(1.1);
	}
`;
