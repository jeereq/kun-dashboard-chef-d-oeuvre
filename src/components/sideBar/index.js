import React from "react";
import { Container } from "./style";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function SideBar() {
	return (
		<Container>
			<h1 className="max">k'un</h1>
			<h1 className="min">k'</h1>
			<div>
				<NavLink to="/home/dashboard">
					<Icon icon="bx:bxs-dashboard" />
					<span>Dashboard</span>
				</NavLink>
				<NavLink to="/home/restaurants">
					<Icon icon="ic:baseline-restaurant-menu" />
					<span>Restaurants</span>
				</NavLink>
				<NavLink to="/home/users">
					<Icon icon="bx:bxs-user" />
					<span> Users</span>
				</NavLink>
			</div>
		</Container>
	);
}
