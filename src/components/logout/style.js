import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLOR, COLORDOREE } from "../../helpers/constance";

export const LogoutLink = styled(Link)`
	position: fixed;
	top: 0;
	right: 0;
	color: white;
	text-decoration: none;
	padding: 10px;
	padding-bottom: 5px;
	background: ${COLORDOREE};
	font-size: 2em;
	&:hover {
		text-decoration: none;
		color: white;
	}
`;
