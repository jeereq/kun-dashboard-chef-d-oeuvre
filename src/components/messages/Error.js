import React, { useEffect } from "react";
import { Container } from "./style";
import { Notification, toaster } from "rsuite";
export default function Error({ message, onClick }) {
	return (
		<Container>
			<div>
				<Message type={{ type: "error" }} message={message} onClick={onClick} />
			</div>
		</Container>
	);
}

const Message = React.forwardRef(({ type, onClick, message, ...rest }, ref) => {
	return (
		<Notification
			ref={ref}
			{...rest}
			type={type.type}
			header={type.type}
			onClick={onClick}
		>
			<p>{message.toString()}</p>
		</Notification>
	);
});
