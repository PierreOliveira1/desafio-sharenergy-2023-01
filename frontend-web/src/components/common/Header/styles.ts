import styled from 'styled-components';
import { Link as LinkComponent } from 'react-router-dom';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
`;

export const Header = styled.header`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem;
	background-color: ${({ theme }) => theme.color.tertiary};
	z-index: 99;
	position: fixed;

	@media screen and (max-width: 900px) {
		flex-direction: column;
	}
`;

export const Logo = styled.img`
	width: 20%;

	@media screen and (max-width: 900px) {
		width: 40%;
		margin-bottom: 10px;
	}
`;

export const Nav = styled.nav`
	width: 60%;

	@media screen and (max-width: 900px) {
		width: 90%;
	}
`;

export const Ul = styled.ul`
	list-style: none;
	width: 100%;
	display: flex;
	justify-content: space-around;
`;

export const Li = styled.li``;

export const Link = styled(LinkComponent)`
	text-decoration: none;
	color: ${({ theme }) => theme.color.primary};
	font-weight: 700;
	font-size: 1.3rem;
	position: relative;
	width: fit-content;
	height: fit-content;
`;
