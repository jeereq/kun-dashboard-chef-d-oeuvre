import React, { useEffect } from "react";
import { Container } from "./style";
import { Notification, toaster } from "rsuite";
export default function Error({ message, onClick }) {
	return (
		<Container>
			<Message type={{ type: "error", message, onClick }} />
		</Container>
	);
}

const Message = React.forwardRef(({ type, ...rest }, ref) => {
	return (
		<Notification
			ref={ref}
			{...rest}
			type={type.type}
			header={type.type}
			onClick={type.onClick}
		>
			<p>{type.message.toString()}</p>
		</Notification>
	);
});
