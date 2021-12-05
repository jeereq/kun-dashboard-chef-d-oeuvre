import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import useRedux from "./useRedux";

const GetUser = gql`
	query users {
		users {
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

export default function useGetAllUsers() {
	const response = useQuery(GetUser, {
		variables: { id: localStorage.getItem("id") },
	});
	const { setUsers } = useRedux();

	useEffect(() => {
		if (response.data !== undefined && response.data["users"] !== undefined) {
			setUsers(response);
			console.log(response);
		}
	}, [response.data]);

	const { loading, error, data } = response;

	return { dataAllUsers: data, loadingAllUsers: loading, errorAllUsers: error };
}
