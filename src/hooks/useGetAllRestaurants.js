import { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import useRedux from "./useRedux";

const GetRestaurants = gql`
	query restaurants {
		restaurants {
			_id
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

export default function useGetAllRestaurants() {
	const response = useQuery(GetRestaurants);
	const { setRestaurants } = useRedux();

	useEffect(() => {
		if (
			response.data !== undefined &&
			response.data["restaurants"] !== undefined
		) {
			setRestaurants(response);
		}
	}, [response.data]);

	const { loading, error, data } = response;

	return {
		dataAllRestaurants: data,
		loadingAllRestaurants: loading,
		errorAllRestaurants: error,
	};
}
