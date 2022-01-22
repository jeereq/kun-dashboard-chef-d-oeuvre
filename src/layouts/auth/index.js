import React from "react";
import { Container, FormContainer } from "./style";
import background from "../../assets/images/background-login.png";
export default function LoginLayout({ children, link }) {
	return (
		<Container>
			<div className="left">
				<FormContainer>{children}</FormContainer>
			</div>
			<div className="right">
				<img src={background} />
			</div>
		</Container>
	);
}
