import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	SelectRestaurants,
	SelectUsers,
	SelectUser,
	SelectTotal,
} from "../redux/StateSelectors";
import {
	SET_RESTAURANTS,
	SET_USERS,
	SET_USER,
	SET_TOTAL,
} from "../redux/StateActions";
export default function useRedux() {
	const dispatch = useDispatch();

	const total = useSelector(({ admin }) => SelectTotal(admin));
	const user = useSelector(({ admin }) => SelectUser(admin));
	const users = useSelector(({ admin }) => SelectUsers(admin));
	const restaurants = useSelector(({ admin }) => SelectRestaurants(admin));

	const setTotal = (total) => dispatch(SET_TOTAL(total));
	const setUser = (user) => dispatch(SET_USER(user));
	const setUsers = (users) => dispatch(SET_USERS(users));
	const setRestaurants = (restaurants) =>
		dispatch(SET_RESTAURANTS(restaurants));

	return {
		total,
		user,
		users,
		restaurants,
		setRestaurants,
		setUsers,
		setUser,
		setTotal,
	};
}
