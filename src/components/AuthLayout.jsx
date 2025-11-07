import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import authFrame from '../assets/authFrame.png';

const AuthLayout = ({ children, showBackButton = false, backButtonPath = '/login' }) => {
  const navigate = useNavigate();
  
  return (
    <div className="h-screen flex bg-white py-4 px-4 overflow-hidden">
      <div className="w-full flex h-full rounded-2xl overflow-hidden">
        {/* Left Section - Image */}
        <div className="relative hidden md:flex rounded-l-2xl w-[70%] h-full overflow-hidden">
          <div
            className="absolute inset-0 bg-white rounded-l-2xl"
            style={{
              backgroundImage: `url(${authFrame})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>

        {/* Right Section - Form */}
        <div className="flex flex-col justify-center items-center bg-white w-full md:w-[40%] rounded-r-2xl px-10 h-full relative">
          {/* Back to Login button positioned at top, aligned with form content */}
          {showBackButton && (
            <button
              type="button"
              onClick={() => navigate(backButtonPath)}
              className="absolute top-6 left-10 flex items-center text-[#666] no-underline cursor-pointer hover:text-[#333] transition-colors"
            >
              <ArrowBack className="mr-2 text-base" />
              <span className="text-sm font-semibold">Back to Login</span>
            </button>
          )}
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
