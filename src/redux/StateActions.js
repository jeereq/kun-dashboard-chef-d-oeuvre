import {
	ADD_USER,
	ADD_USERS,
	ADD_RESTAURANTS,
	ADD_TOTAL,
} from "./StateProvider";

export const SET_USER = (USER) => ({
	type: ADD_USER,
	payload: USER,
});

export const SET_TOTAL = (TOTAL) => ({
	type: ADD_TOTAL,
	payload: TOTAL,
});

export const SET_USERS = (USERS) => ({
	type: ADD_USERS,
	payload: USERS,
});

export const SET_RESTAURANTS = (RESTAURANTS) => ({
	type: ADD_RESTAURANTS,
	payload: RESTAURANTS,
});
