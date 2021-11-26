import React from "react";
import { Container, FormContainer } from "./style";
import { NavLink } from "react-router-dom";

export default function LoginLayout({ children, link, message }) {
	return (
		<Container>
			<div className="left">
				<FormContainer>
					{children}
					<NavLink to={link} className="link">
						{message}
					</NavLink>
				</FormContainer>
			</div>
			<div className="right"></div>
		</Container>
	);
}
