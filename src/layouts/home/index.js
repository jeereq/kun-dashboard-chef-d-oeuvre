import React from "react";
import { Container } from "./style";
import SideBar from "../../components/sideBar";
import Logout from "../../components/logout";

export default function Layout({ children }) {
	return (
		<Container>
			<SideBar />
			<main>
				{children}
				<Logout />
			</main>
		</Container>
	);
}
