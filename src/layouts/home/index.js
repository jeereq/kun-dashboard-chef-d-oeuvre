import React from 'react';
import { Container } from './style';
import SideBar from '../../components/sideBar';

export default function Layout({ children }) {
	return (
		<Container>
			<SideBar />
			<main>{children}</main>
		</Container>
	);
}
