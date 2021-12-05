import React from "react";
import { Container } from "./style";
import useRedux from "../../hooks/useRedux";

export default function Users() {
	const { users } = useRedux();

	return <Container>users</Container>;
}
