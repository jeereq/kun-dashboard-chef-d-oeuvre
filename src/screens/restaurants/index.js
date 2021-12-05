import React, { useEffect } from "react";
import { Container } from "./style";
import useRedux from "../../hooks/useRedux";

export default function Restaurants() {
	const { restaurants } = useRedux();

	return <Container>restaurants</Container>;
}
