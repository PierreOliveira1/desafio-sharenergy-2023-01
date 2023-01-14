import { Button } from '@components/ui/Button';
import { Checkbox } from '@components/ui/Checkbox';
import { Input } from '@components/ui/Input';
import { theme } from '@styles/theme';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from '@config/envs';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { fetchApi } from '@lib/fetchApi';
import * as Styles from './styles';
import { OnErrorLogin } from './dtos/onErrorLogin';
import { OnSuccessLogin } from './dtos/onSuccessLogin';
import { useLoading } from '@stores/isLoading';
import { useEffect } from 'react';

type Inputs = {
	username: string;
	password: string;
	rememberMe: boolean;
}

function Login() {
	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
	const [, setToken] = useLocalStorage(TOKEN_KEY, '');
	const [, setRefreshToken] = useLocalStorage(REFRESH_TOKEN_KEY, '');
	const { setIsLoading } = useLoading();
	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(false);
	}, []);

	const mutation = useMutation(({ username, password, rememberMe }: Inputs) => {
		return fetchApi('/auth/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password,
				rememberMe
			})
		});
	});

	const onSubmit: SubmitHandler<Inputs> = async ({ username, password, rememberMe }) => {
		setIsLoading(true);
		mutation.mutate({ username, password, rememberMe }, {
			onSuccess: async (data) => {
				const { token, refreshToken } = await data.json() as OnSuccessLogin;

				setToken(token);

				if(refreshToken) {
					setRefreshToken(refreshToken.id);
				}

				toast.success('Login efetuado com sucesso!');

				setTimeout(() => {
					navigate('/');
				}, 1000);
			},
			onError: async (data) => {
				const errors = data as OnErrorLogin;

				setTimeout(() => {
					setIsLoading(false);
					if(/User or password incorrect/gi.test(errors.message)) {
						toast.error('Usuário ou senha incorreta, tente novamente!');
					} else {
						toast.error('Erro ao efetuar login, verifique e tente novamente!');
					}
				}, 1000);
			}
		});
	};

	return(
		<Styles.Container>
			<Toaster />
			<Styles.Content>
				<Styles.Logo
					src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
					alt="Logo"
				/>
				<Styles.Form onSubmit={handleSubmit(onSubmit)}>
					<Styles.Box margin='0 0 2rem 0'>
						<Input
							width='80%'
							type="text"
							placeholder='Usuário...'
							{...register('username', {
								required: {
									value: true,
									message: 'Campo de usuário vazio...'
								}
							})}
						/>
						{errors.username && <Styles.MessageError>{errors.username.message}</Styles.MessageError>}
					</Styles.Box>
					<Styles.Box margin='0 0 2rem 0'>
						<Input
							width='80%'
							type="text"
							placeholder='Senha...'
							isPassword
							{...register('password', {
								required: {
									value: true,
									message: 'Campo de senha vazio...'
								}
							})}
						/>
						{errors.password && <Styles.MessageError>{errors.password.message}</Styles.MessageError>}
						<Styles.BoxCheckbox>
							<Checkbox color={theme.color.tertiary} {...register('rememberMe')} label='Manter-me conectado' />
						</Styles.BoxCheckbox>
					</Styles.Box>
					<Button isSubmit value="Entrar" />
				</Styles.Form>
			</Styles.Content>
		</Styles.Container>
	);
}

export default Login;
