import React from "react";
import { Badge } from "rsuite";
import { Icon } from "@iconify/react";
import { CardMiniRestaurantStyle } from "./style";
import { COLORDOREE, COLOR } from "../../helpers/constance";

export default function CardMiniRestaurant({
	numero,
	item: { username, email, phone_number, genre },
}) {
	return (
		<CardMiniRestaurantStyle>
			<div className="avatar">
				<Icon icon="bx:bxs-user-circle" font-size={30} color={COLOR} />
			</div>
			<div className="name">{username}</div>
			<div className="name">{email}</div>
			<div className="name">{genre}</div>
			<div className="name">...</div>
		</CardMiniRestaurantStyle>
	);
}
