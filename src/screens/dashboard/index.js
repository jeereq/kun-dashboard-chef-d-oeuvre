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
import { useQuery, gql } from "@apollo/client";

const GetUser = gql`
	query statistique {
		statistique {
			total
			user {
				top {
					_id
					username
					email
					phone_number
					genre
				}
				length
				femme_length
				homme_length
				homme {
					_id
				}
				femme {
					_id
				}
			}
			restaurant {
				length
				top {
					_id
					name
					visites
				}
			}
			meal {
				length
				top {
					_id
				}
			}
		}
	}
`;
export default function Dashboard() {
	const {
		user,
		users,
		restaurants,
		total,
		setTotal,
		statistique,
		setStatistique,
	} = useRedux();

	useQuery(GetUser, {
		onCompleted: ({ statistique }) => {
			console.log(statistique);
			setStatistique(statistique);
		},
		onError: (error) => {
			console.log(error);
		},
	});
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
								color={COLOR}
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
					number={statistique["user"] ? statistique.user.length : 0}
				/>
				<CardDashboard
					name="restaurants"
					icon={<Icon icon="ic:baseline-restaurant-menu" />}
					number={statistique["restaurant"] ? statistique.restaurant.length : 0}
				/>
				<CardDashboard
					name="meals"
					icon={<Icon icon="akar-icons:people-group" />}
					number={statistique["meal"] ? statistique.meal.length : 0}
				/>
				<CardDashboard
					name="comments"
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
