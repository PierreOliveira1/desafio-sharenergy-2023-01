import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
	width: 100%;
	display: flex;
`;

export const Content = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	cursor: pointer;
`;

export const BoxName = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	align-items: center;
	padding-left: 2%;
`;

export const Title = styled.h3`
	font-size: medium;
	font-weight: 700;
	color: ${({ theme }) => theme.color.primary};
	user-select: none;
`;

export const BoxIcon = styled.div`
	width: 20%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right: 2%;
`;

export const BoxHttpCodes = styled(motion.div)`
	width: 100%;
	padding-left: 2%;
	display: flex;
	align-items: center;
`;
