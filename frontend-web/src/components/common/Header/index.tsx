import { Outlet } from 'react-router-dom';
import * as Styles from './styles';
import { tabs } from './tabs';

function Header() {
	return (
		<Styles.Container>
			<Styles.Header>
				<Styles.Logo
					src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
					alt="Logo"
				/>
				<Styles.Nav>
					<Styles.Ul>
						{tabs.map(({ path, name }, index) => (
							<Styles.Li key={index}>
								<Styles.Link to={path}>{name}</Styles.Link>
							</Styles.Li>
						))}
					</Styles.Ul>
				</Styles.Nav>
			</Styles.Header>
			<Outlet />
		</Styles.Container>
	);
}

export { Header };
