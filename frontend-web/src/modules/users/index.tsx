import { Input } from '@components/ui/Input';
import { useLoading } from '@stores/isLoading';
import { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { ListUsers } from './components/common/ListUsers';
import { Data } from './dtos/data';
import { User } from './dtos/user';
import * as Styles from './styles';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Pagination } from '@components/common/Pagination';
import { useInfoQuery } from './stores/useInfoQuery';

function Users() {
	const { setIsLoading } = useLoading();
	const { page, setPage, setSearch, seed, setSeed } = useInfoQuery();
	const searchRef = useRef<HTMLInputElement>(null);
	const users = useQuery<Data<User>, Error>(['users', { seed, page }], async () => {
		const query = `https://randomuser.me/api/?inc=picture,name,email,login,dob&nat=br&results=100&page=${page}&seed=${seed}`;

		setIsLoading(true);

		const users = await fetch(query);

		const response: Data<User> = await users.json();

		setPage(response.info.page);
		setSeed(response.info.seed);

		return response;
	});

	function handleSearch(search: string) {
		if (search) {
			setSearch(search);
		} else {
			setSearch('');
		}
	}

	useEffect(() => {
		if(!users.isLoading)
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
	}, [users.isLoading, users.isFetching]);

	return (
		<Styles.Container>
			<Styles.BoxSearch>
				<Input
					ref={searchRef}
					width='100%'
					placeholder='Busque um usuário...'
					onKeyDown={event => {
						if(event.key === 'Enter') {
							event.preventDefault();
							handleSearch(searchRef.current?.value ?? '');
						}
					}}
					icon={<MagnifyingGlassIcon width="1.2rem" height="1.2rem" />}
					handleIconClick={event => {
						event.preventDefault();
						handleSearch(searchRef.current?.value ??'');
					}}
				/>
			</Styles.BoxSearch>
			{users.isSuccess && <ListUsers
				users={users.data.results}
			/>}
			<Pagination page={Number(page)} setPage={setPage} />
		</Styles.Container>
	);

}

export default Users;
