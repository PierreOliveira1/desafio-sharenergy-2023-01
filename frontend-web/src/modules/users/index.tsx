import { Input } from '@components/ui/Input';
import { useLoading } from '@stores/isLoading';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { ChangeEvent } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { ListUsers } from './components/common/ListUsers';
import { Data } from './dtos/data';
import { User } from './dtos/user';
import * as Styles from './styles';

function Users() {
	const [searchParams, setSearchParams] = useSearchParams();
	const { setIsLoading } = useLoading();
	const users = useQuery<Data<User>, Error>('users', async () => {
		const users = await fetch('https://randomuser.me/api/?inc=picture,name,email,login,dob&results=100');

		return await users.json();
	});

	function handleSearch(event: ChangeEvent<HTMLInputElement>) {
		setTimeout(() => {
			const search = event.target.value;
			if (search) {
				searchParams.set('search', search);
			} else {
				searchParams.delete('search');
			}
			setSearchParams(searchParams);
		}, 700);
	}

	const changeSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		handleSearch(event);
	}, []);

	useEffect(() => {
		if(!users.isLoading)
			setIsLoading(false);
	}, [users.isLoading, users.isFetching]);

	if(users.isSuccess) {
		return (
			<Styles.Container>
				<Styles.BoxSearch>
					<Input
						width='100%'
						placeholder='Busque um usuário...'
					/>
				</Styles.BoxSearch>
				<ListUsers
					users={users.data.results}
				/>
			</Styles.Container>
		);
	}

	return <></>;
}

export default Users;
