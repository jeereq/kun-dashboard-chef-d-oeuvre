import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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

const schema = yup
	.object({
		email: yup.string().required(),
		password: yup.string().required(),
	})
	.required();

export default function ResetPassword() {
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

	return (
		<LoginLayout link="/login" message="Connecte toi !">
			<Form onSubmit={handleSubmit(onSubmit)}>
				<H1>Entrez votre email !</H1>
				<InputContainer>
					<Input type="email" {...register("email")} placeholder="Email" />
					<InputError className={errors.email ? "padding" : ""}>
						{errors.email?.message}
					</InputError>
				</InputContainer>
				<Btn type="submit" colorBg={errors.email ? "red" : COLOR}>
					login
				</Btn>
			</Form>
		</LoginLayout>
	);
}
