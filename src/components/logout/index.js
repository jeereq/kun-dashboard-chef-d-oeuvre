import React from "react";
import { LogoutLink } from "./style";
import { Icon } from "@iconify/react";

export default function Logout() {
	return (
		<LogoutLink
			to="/"
			onClick={() => {
				localStorage.setItem("token", "");
				localStorage.setItem("id", "");
			}}
		>
			<Icon icon="entypo:log-out" />
		</LogoutLink>
	);
}
