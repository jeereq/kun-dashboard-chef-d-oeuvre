const initialeState = {
	user: {},
	users: [],
	restaurants: [],
};

const StateProvider = (state = initialeState, { payload, type }) => {
	switch (type) {
		case ADD_RESTAURANTS:
			return {
				...state,
				restaurants: payload,
			};
		case ADD_USERS:
			return {
				...state,
				users: payload,
			};
		case ADD_USER:
			return {
				...state,
				user: payload,
			};
		default:
			return state;
	}
};

export const ADD_USER = "ADD_USER";
export const ADD_USERS = "ADD_USERS";
export const ADD_RESTAURANTS = "ADD_RESTAURANTS";

export default StateProvider;
