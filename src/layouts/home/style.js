import styled from "styled-components";

export const Container = styled.div`
	height: auto;
	width: 100%;
	display: flex;
	align-items: "center";
	justify-content: "center";
	main {
		width: 100%;
		margin-left: 120px;
		background: #1e1e1e;
		@media screen and (max-width: 600px) {
			margin-left: 65px;
		}
	}
`;
