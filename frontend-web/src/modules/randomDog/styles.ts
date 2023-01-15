import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding-top: 100px;
`;

export const BoxIframe = styled.div`
	position: relative;
	overflow: hidden;
	width: 20rem;
	height: 20rem;
`;

export const Iframe = styled.iframe`
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const Image = styled.img`
	width: 20rem;
`;

export const Refresh = styled.button`
	width: 150px;
	height: 40px;
	border-radius: 100px;
	color: ${({ theme }) => theme.color.tertiary};
	font-weight: 700;
	font-size: 1.1rem;
	background-color: ${({ theme }) => theme.color.primary};
	cursor: pointer;
	position: absolute;
	bottom: 5%;
`;
