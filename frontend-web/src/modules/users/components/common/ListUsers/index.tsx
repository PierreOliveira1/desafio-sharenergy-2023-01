import { User } from '@modules/users/dtos/user';
import { useInfoQuery } from '@modules/users/stores/useInfoQuery';
import { BoxUser } from '../BoxUser';
import * as Styles from './styles';

interface Props {
	users: User[];
}

function ListUsers({ users }: Props) {
	const { search } = useInfoQuery();

	return (
		<Styles.Content>
			{users.map((user, index) => {
				if(search) {
					const isSearch = `${user.name.first} ${user.name.last}`.toLowerCase().includes(search.toLowerCase());
					if(isSearch)
						return (
							<Styles.ContentUser key={index}>
								<BoxUser {...user} />
							</Styles.ContentUser>
						);
				} else {
					return (
						<Styles.ContentUser key={index}>
							<BoxUser {...user} />
						</Styles.ContentUser>
					);
				}
			})}
		</Styles.Content>
	);
}

export { ListUsers };
