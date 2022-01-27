import styled from "styled-components";
import { COLORGREY } from "../../helpers/constance";

export const Container = styled.div`
	height: auto;
	width: 100%;
	display: flex;
	align-items: "center";
	justify-content: "center";
	main {
		width: 100%;
		margin-left: 150px;
		background: ${COLORGREY};
		@media screen and (max-width: 600px) {
			margin-left: 65px;
		}
	}
`;
