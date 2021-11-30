import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: "center";
	justify-content: "center";
	main {
		width: 100%;
		margin-left: 140px;
		@media screen and (max-width: 600px) {
			margin-left: 65px;
		}
	}
`;
