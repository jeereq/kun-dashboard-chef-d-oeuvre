import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { Container, StatistiqueHeader } from "./style";
import useRedux from "../../hooks/useRedux";
import CardDashboard from "../../components/cards/dashboard";
import useCurrentUser from "../../hooks/useCurrentUser";

const GetUsers = gql`
	query users {
		users {
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

export default function Dashboard() {
	const { loading, data } = useQuery(GetUsers);
	const { setUsers } = useRedux();
	const currentUser = useCurrentUser();

	useEffect(() => {
		if (data !== undefined) {
			setUsers(data.users);
		}
	}, [data]);

	useEffect(() => {
		console.log(currentUser);
	}, [currentUser]);

	return (
		<Container>
			Dashboard ,
			<StatistiqueHeader>
				{/* {users.map((item, index) => (
					<CardDashboard key={index}>{index}</CardDashboard>
				))} */}
				<CardDashboard>users</CardDashboard>
				<CardDashboard>restaurants</CardDashboard>
				<CardDashboard>total</CardDashboard>
			</StatistiqueHeader>
		</Container>
	);
}
