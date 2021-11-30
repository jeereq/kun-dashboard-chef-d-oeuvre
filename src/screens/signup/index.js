import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Icon } from "@iconify/react";
import LoginLayout from "../../layouts/auth";
import { InputContainer, Input, InputError, Form, Btn, H1 } from "./style";
import { COLOR } from "../../helpers/constance";
import Loader from "../../components/loader";

const schema = yup
	.object({
		email: yup.string().required(),
		username: yup.string().required(),
		password: yup.string().required(),
	})
	.required();

export default function Signup() {
	const [redirect, setRedirect] = useState(false);
	const [type, setType] = useState("password");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};
	const onTypeChange = () => {
		if (type === "password") setType("text");
		else setType("password");
	};

	if (redirect) return <Redirect to="/signup" />;

	return (
		<LoginLayout link="/login" message="Connecte toi !">
			<Loader />
			<Form onSubmit={handleSubmit(onSubmit)}>
				<H1>Bienvenue !</H1>
				<InputContainer>
					<Input
						type="text"
						{...register("username")}
						placeholder="nom d'utilisateur"
					/>
					<InputError className={errors.email ? "padding" : ""}>
						{errors.email?.message}
					</InputError>
					<Input type="email" {...register("email")} placeholder="Email" />
					<InputError className={errors.email ? "padding" : ""}>
						{errors.email?.message}
					</InputError>
					<Input
						type="text"
						{...register("password")}
						placeholder="Mot de passe"
					/>
					<InputError className={errors.email ? "padding" : ""}>
						{errors.email?.message}
					</InputError>
				</InputContainer>
				<Btn colorBg={errors.password || errors.email ? "red" : COLOR}>
					suivant
				</Btn>
			</Form>
		</LoginLayout>
	);
}
