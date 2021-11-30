import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { Container } from "./style";
import useRedux from "../../hooks/useRedux";

const GetRestaurants = gql`
	query restaurants {
		restaurants {
			_id
			token
			name
			localisations {
				longitude
				latitude
			}
			likes {
				_id
				restaurant_id
			}
			profil_image
			images
			profil_image
		}
	}
`;
export default function Restaurants() {
	const { loading, error, data } = useQuery(GetRestaurants);
	const { setRestaurants, restaurants } = useRedux();

	useEffect(() => {
		if (data !== undefined) {
			setRestaurants(data.restaurants);
		}
	}, [data]);

	useEffect(() => {
		console.log(error);
	}, [error]);

	return <Container>restaurants</Container>;
}
