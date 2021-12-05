import React, { useEffect } from "react";
import { Loader } from "rsuite";
import {
	Container,
	StatistiqueHeader,
	Header,
	Chart,
	Main,
	Stat,
} from "./style";
import useRedux from "../../hooks/useRedux";
import { Icon } from "@iconify/react";
import CardTopRestaurants from "../../components/cards/cardRestaurants";
import CardDashboard from "../../components/cards/dashboard";
import { COLOR, COLORDOREE } from "../../helpers/constance";

export default function Dashboard() {
	const { user, users, restaurants, total, setTotal } = useRedux();
	useEffect(() => {
		users["data"] && restaurants["data"]
			? setTotal(users.data.users.length + restaurants.data.restaurants.length)
			: setTotal(0);
	}, [user, users, restaurants]);

	return (
		<Container>
			<Header>
				{user["data"] ? (
					<>
						<h2>
							{user.data.user.username} l'
							<span>administrateur</span>
						</h2>
						<h5>
							<Icon
								icon="healthicons:i-schedule-school-date-time-outline"
								color={COLORDOREE}
							/>
							{new Date().toLocaleDateString()}
						</h5>
					</>
				) : (
					<Loader color={COLORDOREE} />
				)}
			</Header>
			<StatistiqueHeader>
				<CardDashboard
					name="utilisateurs"
					icon={<Icon icon="bx:bxs-user" />}
					number={users["data"] ? users.data.users.length : 0}
				/>
				<CardDashboard
					name="restaurants"
					icon={<Icon icon="ic:baseline-restaurant-menu" />}
					number={restaurants["data"] ? restaurants.data.restaurants.length : 0}
				/>
				<CardDashboard
					name="total"
					icon={<Icon icon="akar-icons:people-group" />}
					number={total}
				/>
			</StatistiqueHeader>
			<Main>
				<Chart />
				<CardTopRestaurants />
				<Stat />
				<Stat />
				<Stat />
			</Main>
		</Container>
	);
}
