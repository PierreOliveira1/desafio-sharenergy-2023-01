import * as Styles from './styles';
import { httpCodesStorage } from '@modules/httpCode/storage/httpCodesStorage';
import { ListHttpCode } from '../ListHttpCode';
import { Session } from '../Session';

function ListSessions() {
	return (
		<Styles.Content>
			{httpCodesStorage.map(({ session, httpCodes, id }, index) => (
				<Session key={index} title={session} id={id}>
					<ListHttpCode httpCodes={httpCodes} />
				</Session>
			))}
		</Styles.Content>
	);
}

export { ListSessions };
