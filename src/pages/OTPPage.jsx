import AuthLayout from '../components/AuthLayout';
import { OTPForm } from '../feature/auth';

const OTPPage = () => {
  return (
    <AuthLayout showBackButton={true} backButtonPath="/login">
      <OTPForm />
    </AuthLayout>
  );
};

export default OTPPage;
