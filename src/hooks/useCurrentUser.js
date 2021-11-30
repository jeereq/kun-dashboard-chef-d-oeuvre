import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const GetUser = gql`
	query user($id: String!) {
		user(id: $id) {
			_id
			authorisation
			active
			username
			email
			phone_number
			createdAt
			updatedAt
		}
	}
`;

export default function useCurrentUser() {
	const { loading, data } = useQuery(GetUser, {
		variables: { id: localStorage.getItem("id") },
	});
	useEffect(() => {
		console.log(data);
	}, [data]);
	return data;
}
