import React from "react";
import LoginLayout from "../../layouts/auth";

export default function ResetPassword() {
	return (
		<LoginLayout link="/login" message="Connecte toi !">
			reset-password
		</LoginLayout>
	);
}
