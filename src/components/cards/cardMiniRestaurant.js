import React from "react";
import { Badge } from "rsuite";
import { Icon } from "@iconify/react";
import { CardMiniRestaurantStyle } from "./style";
import { COLORDOREE } from "../../helpers/constance";

export default function CardMiniRestaurant({ numero, item: { name } }) {
	return (
		<CardMiniRestaurantStyle>
			<Badge color={"blue"} content={numero} />
			<div className="avatar">
				<Icon icon="bx:bxs-user-circle" font-size={30} />
			</div>
			<div className="name">{name}</div>
		</CardMiniRestaurantStyle>
	);
}
