import styled from "styled-components";
import { COLOR, COLORGREY } from "../../helpers/constance";

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100%;
	.left {
		height: 100vh;
		width: 40%;
		display: flex;
		align-items: center;
		justify-content: center;
		@media screen and (max-width: 700px) {
			width: 70%;
		}
		@media screen and (max-width: 400px) {
			width: 80%;
		}
		@media screen and (max-width: 300px) {
			width: 90%;
		}
	}
	.right {
		position: relative;
		height: 100vh;
		width: 60%;
		overflow: hidden;
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: linear-gradient(transparent, black);
		}
		&::before {
			content: "bonjour, bienvenue";
			color: white;
			font-size: 4em;
			text-transform: small-caps;
			position: absolute;
			left: 50px;
			right: 0;
			bottom: 150px;
			z-index: 1;
		}
		img {
			width: 100%;
			objet-fit: cover;
		}
		@media screen and (max-width: 700px) {
			width: 30%;
		}
		@media screen and (max-width: 400px) {
			width: 20%;
		}
		@media screen and (max-width: 300px) {
			width: 10%;
		}
	}
`;
export const FormContainer = styled.div`
	width: 60%;
	height: 90vh;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	.link {
		width: 100%;
		padding: 10px;
		text-align: center;
		color: ${COLORGREY};
		text-decoration: none;
		transition: 0.5s;
		&:hover {
			color: ${COLOR};
		}
	}
	@media screen and (max-width: 700px) {
		width: 80%;
	}
	@media screen and (max-width: 400px) {
		width: 90%;
	}
	@media screen and (max-width: 300px) {
		width: 100%;
	}
`;
