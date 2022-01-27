import React, { useEffect, useState } from "react";
import { Progress } from "rsuite";
import { Icon } from "@iconify/react";
import { CardDashboard, ProgressBar } from "./style";
import { COLORDOREE } from "../../helpers/constance";
import useRedux from "../../hooks/useRedux.js";
export default function Dashboard({ children, name, icon, number }) {
	const [pourcentage, setPourcentage] = useState(0);

	const { total } = useRedux();

	useEffect(() => {
		const result = (number / total) * 100;

		if (result === Infinity) setPourcentage(0);
		else setPourcentage(result);
	}, [total, number]);

	return (
		<CardDashboard>
			{icon}
			<h3>{name}</h3>
			<h4>
				<span>{number !== undefined ? number : 0}</span>
			</h4>
		</CardDashboard>
	);
}
