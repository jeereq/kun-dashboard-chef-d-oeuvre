import styled from "styled-components";
import { COLOR } from "../../helpers/constance";

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100%;
	background-image: url(../../assets/images/vague_basse.png);
	.left {
		height: 100vh;
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
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
		height: 100vh;
		width: 50%;
		background-color: #f8b232;
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
	align-items: flex-end;
	flex-wrap: wrap;
	.link {
		width: 100%;
		padding: 10px;
		text-align: center;
		color: black;
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
