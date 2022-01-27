import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "../../layouts/home";
import Dashboard from "../dashboard";
import Users from "../users";
import Restaurants from "../restaurants";
import useRedux from "../../hooks/useRedux";
import useCurrentUser from "../../hooks/useCurrentUser";
import useGetAllUsers from "../../hooks/useGetAllUsers";
import useGetAllRestaurants from "../../hooks/useGetAllRestaurants";

export default function Home() {
	useGetAllUsers();
	useCurrentUser();
	useGetAllRestaurants();

	if (!localStorage.getItem("id") || !localStorage.getItem("token"))
		return <Redirect to="/" />;

	return (
		<Layout>
			<Switch>
				<Route path={`/home/users`} children={<Users />} />
				<Route path={`/home/restaurants`} children={<Restaurants />} />
				<Route path={`/home/dashboard`} children={<Dashboard />} />
				<Redirect from="/home" to="/home/dashboard" />
			</Switch>
		</Layout>
	);
}
