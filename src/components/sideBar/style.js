import styled from "styled-components";
import { COLOR, COLORDOREE } from "../../helpers/constance";

export const Container = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	width: 150px;
	padding: 5px;
	box-shadow: 0 0 25px #00000021;
	h1 {
		color: white;
		background: ${COLOR};
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
			color: #717171;
			width: 100%;
			font-size: 1.05em;
			margin: 10px 0;
			padding: 10px 15px;
			text-decoration: none;
			transition: 0.5s;
			&::after {
				content: "";
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				width: 2.5px;
				background: transparent;
				transition: 0.5s;
				transform: translatex(150%);
			}
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
				border-radius: 3.5px;
				font-weight: bold;
				&::after {
					background: white;
				}
			}
		}
	}
`;
