import { useState } from 'react';
import { Button, Checkbox, FormControlLabel, Typography, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CustomInput } from '../../../components';

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rememberMe' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', formData);
    // Implement login logic here
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="w-full">
      <Typography 
        variant="h4" 
        className="text-gray-800 font-extrabold text-[2rem]"
        sx={{ mb: '0.5rem', display: 'block' }}
      >
        Welcome back!
      </Typography>
      <Typography 
        variant="body1" 
        className="text-gray-600 text-sm"
        sx={{ mb: '2rem', display: 'block' }}
      >
        Welcome back! please Login in to your account
      </Typography>

      <CustomInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <CustomInput
        label="Password"
        name="password"
        type="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
        required
        showPasswordToggle
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
      />

      <Box className="flex justify-between items-center" sx={{ mb: '1.5rem' }}>
        <FormControlLabel
          control={
            <Checkbox
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="text-gray-500"
              sx={{
                '&.Mui-checked': {
                  color: '#F8069D',
                },
                '& .MuiSvgIcon-root': {
                  fontSize: '1.25rem',
                  borderRadius: '0.25rem',
                },
              }}
            />
          }
          label={
            <span className="text-sm font-semibold text-gray-700">
              Remember me
            </span>
          }
        />
        <Link
          component="button"
          type="button"
          onClick={handleForgotPassword}
          className="hover:underline cursor-pointer no-underline text-sm font-semibold text-[#F8069D] hover:text-[#C1057D]"
        >
          Forgot Password?
        </Link>
      </Box>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        className="normal-case bg-[#F8069D] text-white py-[0.875rem] rounded-[0.625rem] text-base font-semibold hover:bg-[#C1057D]"
        sx={{ mb: '1rem' }}
      >
        Login
      </Button>

      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={handleSignUp}
        className="normal-case border-2 border-[#F8069D] text-[#F8069D] py-[0.875rem] rounded-[0.625rem] text-base font-semibold hover:bg-[#F8069D]/5 hover:border-[#F8069D]"
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default LoginForm;
