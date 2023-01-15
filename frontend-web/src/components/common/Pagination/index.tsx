import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import * as Styles from './styles';

interface Props {
	page: number;
	setPage: (value: number) => void;
}

function Pagination({ page, setPage }: Props) {

	function handlePage(value: number) {
		setPage(value);
	}

	return (
		<Styles.Content>
			{page > 1 && (
				<Styles.Button type="button" onClick={() => handlePage(page - 1)}>
					<ChevronLeftIcon width="1.3rem" height="1.3rem" />
				</Styles.Button>
			)}

			{page > 1 && (
				<Styles.Button type="button" onClick={() => handlePage(page - 1)}>
					{page - 1}
				</Styles.Button>
			)}

			<Styles.Button type="button" onClick={() => handlePage(page)} focus>
				{page}
			</Styles.Button>

			<Styles.Button type="button" onClick={() => handlePage(page + 1)}>
				{page + 1}
			</Styles.Button>

			{page === 1 && (
				<Styles.Button type="button" onClick={() => handlePage(page + 2)}>
					{page + 2}
				</Styles.Button>
			)}

			<Styles.Button type="button" onClick={() => handlePage(page + 1)}>
				<ChevronRightIcon width="1.5rem" height="1.5rem" color='#FFFFFF' />
			</Styles.Button>
		</Styles.Content>
	);
}

export { Pagination };
