import AuthLayout from '../components/AuthLayout';
import { SignUpForm } from '../feature/auth';

const SignUpPage = () => {
  return (
    <AuthLayout showBackButton={true} backButtonPath="/login">
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;

