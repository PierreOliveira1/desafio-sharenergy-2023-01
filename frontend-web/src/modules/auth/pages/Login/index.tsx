import { Button } from '@components/ui/Button';
import { Checkbox } from '@components/ui/Checkbox';
import { Input } from '@components/ui/Input';
import { theme } from '@styles/theme';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { redirect } from 'react-router-dom';
import { fetchApi } from '../../../../lib/fetchApi';
import * as Styles from './styles';

type Inputs = {
	username: string;
	password: string;
	rememberMe: string;
}

function Login() {
	const { register, handleSubmit } = useForm<Inputs>();

	const mutation = useMutation(({ username, password }: Inputs) => {
		return fetchApi('/auth/signin', {
			method: 'POST',
			body: JSON.stringify({
				username,
				password
			})
		});
	});

	const onSubmit: SubmitHandler<Inputs> = async ({ username, password, rememberMe }) => {
		console.log(rememberMe);
		mutation.mutate({ username, password, rememberMe }, {
			onSuccess: () => {
				redirect('/home');
			}
		});
	};

	return(
		<Styles.Container>
			<Styles.Content>
				<Styles.Logo
					src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
					alt="Logo"
				/>
				<Styles.Form onSubmit={handleSubmit(onSubmit)}>
					<Input
						width='80%'
						type="text"
						placeholder='Usuário...'
						{...register('username')}
					/>
					<Styles.BoxInputCheckbox>
						<Input
							width='80%'
							type="text"
							placeholder='Senha...'
							isPassword
							margin='0 0 10px 0'
							{...register('password')}
						/>
						<Styles.BoxCheckbox>
							<Checkbox color={theme.color.tertiary} {...register('rememberMe')} label='Manter-me conectado' />
						</Styles.BoxCheckbox>
					</Styles.BoxInputCheckbox>
					<Button isSubmit value="Entrar" />
				</Styles.Form>
			</Styles.Content>
		</Styles.Container>
	);
}

export default Login;
