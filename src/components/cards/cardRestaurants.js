import React from "react";
import useRedux from "../../hooks/useRedux";
import { TopRestaurants } from "./style";
import MiniRestaurant from "./cardMiniRestaurant";
import { NavLink } from "react-router-dom";

export default function CardTopRestaurants() {
	const { restaurants } = useRedux();
	return (
		<TopRestaurants>
			<h4>Meilleurs restaurants</h4>
			{restaurants["data"] ? (
				<div>
					{restaurants.data.restaurants.map((item, index) => (
						<MiniRestaurant key={index} numero={index + 1} item={item} />
					))}
				</div>
			) : (
				<div>loading...</div>
			)}
			<NavLink to="/home/restaurants" className="more">
				voir plus
			</NavLink>
		</TopRestaurants>
	);
}
