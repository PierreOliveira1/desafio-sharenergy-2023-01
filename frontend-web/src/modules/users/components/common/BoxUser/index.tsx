import * as Styles from './styles';
import { User } from '@modules/users/dtos/user';


function BoxUser(props: User) {
	const { picture: { medium }, name: { first, last }, login: { username }, email, dob: { age } } = props;

	return (
		<Styles.BoxUser>
			<Styles.BoxUserPicture>
				<Styles.UserPicture
					src={medium}
				/>
			</Styles.BoxUserPicture>
			<Styles.BoxInfo>
				<Styles.BoxNameAndUserName>
					<Styles.FullName>
						{`${first} ${last}`}
					</Styles.FullName>
					<Styles.UserName>
						{`@${username}`}
					</Styles.UserName>
					<Styles.Age>
						{`${age} anos`}
					</Styles.Age>
				</Styles.BoxNameAndUserName>
				<Styles.Email href={`mailto:${email}`}>
					{`${email}`}
				</Styles.Email>
			</Styles.BoxInfo>
		</Styles.BoxUser>
	);
}

export { BoxUser };
