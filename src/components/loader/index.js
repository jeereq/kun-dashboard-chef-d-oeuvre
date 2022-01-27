import React from "react";
import { Loader } from "rsuite";
import { Container } from "./style";

export default function LoaderCircle() {
	return (
		<Container>
			<Loader center content="loading" color="red" />
		</Container>
	);
}
