import styled from "styled-components";
import { COLOR, COLORDOREE } from "../../helpers/constance";

export const Container = styled.div`
	height: auto;
	width: 100%;
	padding: 10px;
`;
export const StatistiqueHeader = styled.div`
	padding: 20px;
	display: flex;
	justify-content: space-around;
`;
export const Header = styled.div`
	padding: 0 10px;
	h2,
	h5 {
		color: #cccccc;
		display: flex;
		align-items: center;
	}

	span {
		padding-left: 10px;
		color: ${COLORDOREE};
	}
`;
export const Main = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
`;

export const Chart = styled.div`
	height: 50vh;
	width: 65%;
	background: ${COLOR};
	border-radius: 20px;
	box-shadow: 0 0 25px #00000021;
	margin-bottom: 15px;
`;
export const TopRestaurants = styled.div`
	height: 50vh;
	width: 30%;
	background: ${COLOR};
	border-radius: 20px;
	box-shadow: 0 0 25px #00000021;
	margin-bottom: 15px;
`;

export const Stat = styled.div`
	height: 50vh;
	width: 30%;
	background: ${COLOR};
	border-radius: 20px;
	box-shadow: 0 0 25px #00000021;
	margin-bottom: 15px;
`;
