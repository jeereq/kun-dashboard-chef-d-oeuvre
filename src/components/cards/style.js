import styled from "styled-components";
import { COLORDOREE, COLOR, COLORGREY } from "../../helpers/constance";

export const Container = styled.div`
	height: 100vh;
	width: 100%;
`;
export const TopRestaurants = styled.div`
	position: relative;
	height: 50vh;
	width: 30%;
	background: ${COLOR};
	border-radius: 20px;
	box-shadow: 0 0 25px #00000021;
	margin-bottom: 15px;
	padding: 15px;
	.more {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 15px;
		color: white;
		display: flex;
		justify-content: center;
		&:hover {
			cursor: pointer;
		}
	}
`;
export const ProgressBar = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	transform: translatey(-75%);
`;
export const CardMiniRestaurantStyle = styled.div`
	position: relative;
	height: 50px;
	width: 100%;
	margin-bottom: 5px;
	padding: 5px;
	padding-left: 10px;
	display: flex;
	align-items: center;
	justify-content: flex-arround;

	.avatar {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const CardDashboard = styled.div`
	position: relative;
	height: 120px;
	width: 30%;
	border-radius: 20px;
	background: ${COLOR};
	padding-top: 5px;
	padding-left: 15px;
	margin-top: 20px;
	box-shadow: 0 0 25px #00000021;
	h3 {
		display: flex;
		align-items: center;
		svg {
			margin-right: 5px;
		}
	}
	h4 {
		position: absolute;
		right: 0;
		bottom: 0;
		width: auto;
		color: ${COLORDOREE};
		background: ${COLORGREY};
		padding: 5px 20px;
		padding-bottom: 10px;
		border-radius: 60px 0px;
		margin: 5px;
		font-size: 3em;
		text-align: center;
		span {
			background: ${COLORDOREE};
			color: white;
			padding: 2.5px 10px;
			border-radius: 50%;
		}
	}
	@media screen and (max-width: 600px) {
		padding-left: 0px;
		h3 {
			justify-content: center;
			font-weight: 900;
			svg {
				margin-right: 0;
			}
			span {
				display: none;
			}
		}
		h4 {
			font-size: 1.5em;
			font-weight: 900;
		}
	}
`;
