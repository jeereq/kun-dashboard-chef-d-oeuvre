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
	border-radius: 20px;
	margin-bottom: 15px;
	background: white;
	padding: 15px;
	overflow:hidden;
	.more {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 15px;
		color: white;
		display: flex;
		justify-content: center;
		background: ${COLOR};
		&:hover {
			cursor: pointer;
		}
	}
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
	border-radius: 12.5px;
	cursor: pointer;
	&:hover {
		background: ${COLORGREY};
	}

	.avatar {
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 5px;
	}
	.name {
		padding: 0 5px;
	}
`;

export const CardDashboard = styled.div`
	height: 250px;
	width: 22.5%;
	color: black;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: flex-end;
	border-radius: 20px;
	padding-left: 30px;
	padding-bottom: 70px;
	background: white;
	box-shadow: 0 0 30px #00000015;
	font-weight: 100;
	cursor: pointer;
	&:hover {
		background: ${COLOR};
		color: white;
	}
	h3 {
		width: 100%;
		svg {
			margin-right: 5px;
		}
	}
	h4 {
		padding-top: 10px;
		width: 100%;
		font-size: 3em;
		font-weight: bold;
		text-align: left;
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
