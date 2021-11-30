import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	SelectRestaurants,
	SelectUsers,
	SelectUser,
} from "../redux/StateSelectors";
import { SET_RESTAURANTS, SET_USERS, SET_USER } from "../redux/StateActions";
export default function useRedux() {
	const dispatch = useDispatch();

	const user = useSelector(({ admin }) => SelectUser(admin));
	const users = useSelector(({ admin }) => SelectUsers(admin));
	const restaurants = useSelector(({ admin }) => SelectRestaurants(admin));

	const setUser = (user) => dispatch(SET_USER(user));
	const setUsers = (users) => dispatch(SET_USERS(users));
	const setRestaurants = (restaurants) =>
		dispatch(SET_RESTAURANTS(restaurants));

	return { user, users, restaurants, setRestaurants, setUsers, setUser };
}
