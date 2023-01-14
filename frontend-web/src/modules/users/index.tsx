import { Input } from '@components/ui/Input';
import { useQuery } from 'react-query';
import { ListUsers } from './components/common/ListUsers';
import { Data } from './dtos/data';
import { User } from './dtos/user';
import * as Styles from './styles';

function Users() {
	const users = useQuery<Data<User>, Error>('users', async () => {
		const users = await fetch('https://randomuser.me/api/?inc=picture,name,email,login,dob&results=100');

		return await users.json();
	});

	if(users.isSuccess)
		return (
			<Styles.Container>
				<Styles.BoxSearch>
					<Input
						width='60%'
						placeholder='Busque um usuário...'
					/>
				</Styles.BoxSearch>
				<ListUsers
					users={users.data.results}
				/>
			</Styles.Container>
		);

	return <></>;
}

export default Users;
