import styled from 'styled-components';

export const BoxUser = styled.div`
	width: 15rem;
	height: 20rem;
	border-radius: 10px;
	box-shadow: ${({ theme }) => theme.boxShadow};
	border: ${({ theme }) => theme.border};
	background-color: ${({ theme }) => theme.color.tertiary};
`;

export const BoxUserPicture = styled.div`
	width: 100%;
	height: 35%;
	display: flex;
	justify-content: center;
	padding: 1rem;
`;

export const UserPicture = styled.img`
	border-radius: 50%;
	border: 1px solid ${({ theme }) => theme.color.primary};
	transition: all 300ms;

	&:hover {
		transform: scale(1.2);
	}
`;

export const BoxInfo = styled.div`
	width: 100%;
	height: 65%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
`;

export const BoxNameAndUserName = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const FullName = styled.h2`
	font-size: 1.2rem;
	color: ${({ theme }) => theme.color.primary};
`;

export const UserName = styled.p`
	font-size: 0.8rem;
	color: ${({ theme }) => theme.color.primary};
`;

export const Email = styled.a`
	font-size: 0.7rem;
	margin-bottom: 10%;
	cursor: pointer;
	color: ${({ theme }) => theme.color.primary};
`;

export const Age = styled.p`
	color: ${({ theme }) => theme.color.primary};
	margin-top: 0.3rem;
`;
