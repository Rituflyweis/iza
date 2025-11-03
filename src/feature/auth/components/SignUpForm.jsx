import { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CustomInput } from '../../../components';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up:', formData);
    // Implement sign up logic here
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="w-full">
      <Typography 
        variant="h4" 
        className="text-gray-800 font-extrabold text-[2rem]"
        sx={{ mb: '0.5rem', display: 'block' }}
      >
        Create an account
      </Typography>
      <Typography 
        variant="body1" 
        className="text-gray-600 text-sm"
        sx={{ mb: '1rem', display: 'block' }}
      >
        Set up new user account.
      </Typography>

      <CustomInput
        label="Full Name"
        name="fullName"
        type="text"
        placeholder="Enter Name"
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <CustomInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Box className="flex gap-4" sx={{ mb: '1rem' }}>
        <Box className="flex-1">
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
        </Box>
        <Box className="flex-1">
          <CustomInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Enter Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            showPasswordToggle
            showPassword={showConfirmPassword}
            onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        </Box>
      </Box>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        className="normal-case bg-[#F8069D] text-white py-[0.875rem] rounded-[0.625rem] text-base font-semibold hover:bg-[#C1057D]"
      >
        Sign up
      </Button>
    </Box>
  );
};

export default SignUpForm;

