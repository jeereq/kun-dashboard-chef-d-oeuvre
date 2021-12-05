import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import useRedux from "./useRedux";

const GetUser = gql`
	query user($id: ID) {
		user(id: $id) {
			_id
			authorisation
			active
			username
			email
			image_profile
			phone_number
			createdAt
			updatedAt
		}
	}
`;

export default function useCurrentUser() {
	const response = useQuery(GetUser, {
		variables: { id: localStorage.getItem("id") },
	});
	const { setUser } = useRedux();

	useEffect(() => {
		if (response.data !== undefined && response.data["user"] !== undefined) {
			setUser(response);
		}
	}, [response.data]);

	const { loading, error, data } = response;

	return {
		dataCurrentUser: data,
		loadingCurrentUser: loading,
		errorCurrentUser: error,
	};
}
