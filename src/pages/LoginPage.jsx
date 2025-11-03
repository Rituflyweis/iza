import AuthLayout from '../components/AuthLayout';
import { LoginForm } from '../feature/auth';

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;

