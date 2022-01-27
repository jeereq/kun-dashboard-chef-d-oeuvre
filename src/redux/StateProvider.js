const initialeState = {
	user: {},
	users: {},
	restaurants: {},
	total: 0,
	statistique: {},
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
		case ADD_TOTAL:
			return {
				...state,
				total: payload,
			};
		case ADD_STATISTIQUES:
			return {
				...state,
				statistique: payload,
			};
		default:
			return state;
	}
};

export const ADD_TOTAL = "ADD_TOTAL";
export const ADD_USER = "ADD_USER";
export const ADD_USERS = "ADD_USERS";
export const ADD_RESTAURANTS = "ADD_RESTAURANTS";
export const ADD_STATISTIQUES = "ADD_STATISTIQUES";

export default StateProvider;
