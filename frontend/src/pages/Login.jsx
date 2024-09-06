import { Form } from '../components';

export function Login() {
	return (
		<Form
			route='/api/token/'
			method='login'
		/>
	);
}
