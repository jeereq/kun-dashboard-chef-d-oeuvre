import React, { useState } from "react";
import LoginLayout from "../../layouts/auth";
import { InputContainer, Input, Form, Btn, H1 } from "./style";
import { COLOR } from "../../helpers/constance";
import { Redirect } from "react-router-dom";

export default function Login() {
	const [redirect, setReirect] = useState(false);

	if (redirect) return <Redirect to="/signup" />;

	return (
		<LoginLayout link="/reset-password" message="Mot de passe oublié ?">
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					const {
						target: { email, password },
					} = e;
					console.log(email.value, password.value);
				}}
			>
				<H1>Bienvenue !</H1>
				<InputContainer>
					<Input name="email" placeholder="Email" />
					<Input name="password" placeholder="Mot de passe" min />
				</InputContainer>
				<Btn type="submit" colorBg={COLOR}>
					login
				</Btn>
				<Btn onClick={() => setReirect(true)}>signup</Btn>
			</Form>
		</LoginLayout>
	);
}
