import { ChevronDownIcon } from '@radix-ui/react-icons';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useSession } from '../ListSessions/stores/useSession';
import * as Styles from './styles';

interface Props {
	id: number;
	title: string;
	children: JSX.Element;
}

function Session({ children, title, id }: Props) {
	const { session, setSession } = useSession();

	const variantsIcon: Variants = {
		open: {
			transform: 'rotate(180deg)'
		},
		closed: {
			transform: 'rotate(0deg)'
		}
	};

	const variantsBoxHttpCodes: Variants = {
		open: {
			height: 'fit-content',
			display: 'flex',
			opacity: 1,
		},
		closed: {
			height: 0,
			display: 'none',
			opacity: 0,
		}
	};

	return (
		<Styles.Container>
			<Styles.Content
				onClick={() => setSession(session === id ? 0 : id)}
				role="button"
			>
				<Styles.BoxName>
					<Styles.Title>{title}</Styles.Title>
				</Styles.BoxName>
				<Styles.BoxIcon>
					<motion.div
						variants={variantsIcon}
						animate={session === id ? 'open' : 'closed'}
						transition={{ duration: session === id && .5 }}
					>
						<ChevronDownIcon width="1.5rem" height="1.5rem" />
					</motion.div>
				</Styles.BoxIcon>
			</Styles.Content>
			<AnimatePresence>
				<Styles.BoxHttpCodes
					variants={variantsBoxHttpCodes}
					animate={session === id ? 'open' : 'closed'}
					transition={{ duration: .5 }}
				>
					{children}
				</Styles.BoxHttpCodes>
			</AnimatePresence>
		</Styles.Container>
	);
}

export { Session };
