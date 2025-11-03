import { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CustomInput } from '../../../components';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit email:', email);
    // Navigate to OTP page after submitting email
    navigate('/verify-otp');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="w-full">
      <Typography 
        variant="h4" 
        className="text-gray-800 font-extrabold text-[2rem]"
        sx={{ mb: '0.5rem', display: 'block' }}
      >
        Forget Password?
      </Typography>
      <Typography 
        variant="body1" 
        className="text-gray-600 text-sm"
        sx={{ mb: '2rem', display: 'block' }}
      >
        Forgot your password! Don't worry enter your details here
      </Typography>

      <CustomInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className=""
        sx={{ mb: '1.5rem' }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        className="normal-case bg-[#F8069D] text-white py-[0.875rem] rounded-[0.625rem] text-base font-semibold hover:bg-[#C1057D]"
      >
        Submit
      </Button>
    </Box>
  );
};

export default ForgotPasswordForm;
