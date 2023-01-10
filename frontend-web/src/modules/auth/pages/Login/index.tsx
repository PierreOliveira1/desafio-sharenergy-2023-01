import { Input } from '@components/ui/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as Styles from './styles';

type Inputs ={
	teste: string;
}

function Login() {
	const { register, handleSubmit } = useForm();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
	};

	return(
		<Styles.Container>
			<Styles.Content>
				<Styles.Logo
					src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
					alt="Logo"
				/>
				<form>
					<input type='type' defaultValue="a" placeholder='Teste' {...register('teste')} />
				</form>
			</Styles.Content>
		</Styles.Container>
	);
}

export default Login;
