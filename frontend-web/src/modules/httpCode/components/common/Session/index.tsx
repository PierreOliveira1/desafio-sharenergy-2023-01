import { ChevronDownIcon } from '@radix-ui/react-icons';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import * as Styles from './styles';

interface Props {
	title: string;
	children: JSX.Element;
}

function Session({ children, title }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	const variantsIcon: Variants = {
		open: {
			transform: 'rotate(180deg)'
		},
		closed: {
			transform: 'rotate(0deg)'
		}
	};

	return (
		<>
			<Styles.Content onClick={() => setIsOpen(state => !state)} role="button">
				<Styles.BoxName>
					<Styles.Title>{title}</Styles.Title>
				</Styles.BoxName>
				<Styles.BoxIcon>
					<motion.div variants={variantsIcon} animate={isOpen ? 'open' : 'closed'}>
						<ChevronDownIcon width="1.5rem" height="1.5rem" />
					</motion.div>
				</Styles.BoxIcon>
			</Styles.Content>
			<Styles.BoxHttpCodes>
				{children}
			</Styles.BoxHttpCodes>
		</>
	);
}

export { Session };
