import React, { useState, useMemo, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Icon } from "@iconify/react";
import LoginLayout from "../../layouts/auth";
import {
	InputContainer,
	Input,
	InputError,
	Form,
	Btn,
	H1,
	ContainerPassword,
} from "./style";
import { COLOR } from "../../helpers/constance";
import { useLazyQuery, gql } from "@apollo/client";
import Loader from "../../components/loader";
import ErrorMessage from "../../components/messages/Error";

const schema = yup
	.object({
		email: yup.string().required(),
		password: yup.string().required(),
	})
	.required();

const GET_LOGIN = gql`
	query Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			authorisation
			_id
		}
	}
`;

export default function Login() {
	const [redirect, setRedirect] = useState(false);
	const [type, setType] = useState("password");
	const [login, { loading, error, data }] = useLazyQuery(GET_LOGIN);
	const [Error, setError] = useState(error);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (content) => {
		login({ variables: content });
	};

	const onTypeChange = () => {
		type === "password" ? setType("text") : setType("password");
	};

	const onError = () => {
		setError(null);
	};

	useMemo(() => {
		if (data !== undefined && data["login"] !== null) {
			const { _id, token } = data.login;
			setRedirect(true);
			localStorage.setItem("token", token);
			localStorage.setItem("id", _id);
		}
	}, [data]);

	useEffect(() => {
		setError(error);
	}, [error]);

	if (redirect) return <Redirect to="/home" />;

	return (
		<LoginLayout link="/reset-password" message="Mot de passe oublié ?">
			{loading && <Loader />}
			{Error && <ErrorMessage message={Error} onClick={onError} />}
			<Form onSubmit={handleSubmit(onSubmit)}>
				<H1>Bienvenue !</H1>
				<InputContainer>
					<Input type="email" {...register("email")} placeholder="Email" />
					<InputError className={errors.email ? "padding" : ""}>
						{errors.email?.message}
					</InputError>
					<ContainerPassword>
						<Input
							autoComplete="off"
							type={type}
							{...register("password")}
							placeholder="Mot de passe"
							mininm
						/>
						<div className="icon" onClick={onTypeChange}>
							<Icon
								icon="icon-park-outline:eyes"
								fontSize={20}
								color={type === "text" ? COLOR : "black"}
							/>
						</div>
					</ContainerPassword>

					<InputError className={errors.password ? "padding" : ""}>
						{errors.password?.message}
					</InputError>
				</InputContainer>
				<Btn
					type="submit"
					colorBg={errors.password || errors.email ? "red" : COLOR}
				>
					login
				</Btn>
				<Btn onClick={() => setRedirect(true)}>signup</Btn>
			</Form>
		</LoginLayout>
	);
}
