import { User } from '@modules/users/dtos/user';
import { BoxUser } from '../BoxUser';
import * as Styles from './styles';

interface Props {
	users: User[];
}

function ListUsers({ users }: Props) {
	return (
		<Styles.Content>
			{users.map((user, index) => (
				<Styles.ContentUser key={index}>
					<BoxUser {...user} />
				</Styles.ContentUser>
			))}
		</Styles.Content>
	);
}

export { ListUsers };
