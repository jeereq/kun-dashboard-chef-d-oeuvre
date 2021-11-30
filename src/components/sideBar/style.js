import styled from "styled-components";
import { COLOR } from "../../helpers/constance";

export const Container = styled.div`
	position: fixed;
	height: 100vh;
	width: auto;
	padding: 5px;
	background: ${COLOR};
	h1 {
		color: ${COLOR};
		background: white;
		padding: 0px 10px;
		border-radius: 3.5px;
		text-align: center;
		width: auto;
		font-size: 2.5em;
		&.min {
			display: none;
		}
		&.max {
			display: block;
		}
		@media screen and (max-width: 600px) {
			&.min {
				display: block;
			}
			&.max {
				display: none;
			}
		}
	}

	div {
		padding-top: 20px;
		a {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			color: white;
			width: 100%;
			font-size: 1.05em;
			margin: 10px 0;
			padding: 10px 15px;
			text-decoration: none;
			transition: 0.5s;
			svg {
				margin-right: 5px;
			}

			@media screen and (max-width: 600px) {
				padding: 10px 5px;
				justify-content: center;
				svg {
					margin-right: 0;
				}
				span {
					display: none;
				}
			}

			&.active,
			&:hover {
				color: ${COLOR};
				background: white;
				border-radius: 3.5px;
				font-weight: bold;
			}
		}
	}
`;
