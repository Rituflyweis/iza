import AuthLayout from '../components/AuthLayout';
import { ForgotPasswordForm } from '../feature/auth';

const ForgotPasswordPage = () => {
  return (
    <AuthLayout showBackButton={true} backButtonPath="/login">
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
