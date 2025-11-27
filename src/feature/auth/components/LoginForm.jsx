import { useState, useRef } from 'react';
import { useFormik } from 'formik';
import { Button, Checkbox, FormControlLabel, Typography, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CustomInput } from '../../../components';
import { loginSchema } from '../../../schema/auth/authSchema';
import axiosInstance from '../../../api/axios';
import { useAppDispatch } from '../../../store/hooks';
import { setCredentials, setError } from '../../../store/slices/authSlice';
import { showLoader, hideLoader } from '../../../store/slices/loaderSlice';
import useToast from '../../../hooks/useToast';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { showSuccess, showError } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const isSubmittingRef = useRef(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: loginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { setSubmitting }) => {
      // Prevent double submission
      if (isSubmittingRef.current) {
        return;
      }

      isSubmittingRef.current = true;
      setSubmitting(true);

      try {
        dispatch(showLoader('Logging in...'));

        const requestBody = {
          email: values.email,
          password: values.password,
        };

        const response = await axiosInstance.post('/signin', requestBody);

        // Extract token and user data from response
        const { accessToken, data } = response.data;
        const authToken = accessToken;
        const userData = data;

        // Store credentials in Redux
        dispatch(
          setCredentials({
            token: authToken,
            user: userData,
          })
        );

        // Store rememberMe preference
        if (values.rememberMe) {
          localStorage.setItem("token", authToken);
        } else {
          sessionStorage.setItem("token", authToken);
        }

        showSuccess('Login successful!');

        // Navigate to dashboard
        setTimeout(() => {
          navigate('/dashboard');
        }, 500);
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.response?.data?.error ||
          'Login failed. Please check your credentials.';
        showError(errorMessage);
        dispatch(setError(errorMessage));
      } finally {
        dispatch(hideLoader());
        setSubmitting(false);
        isSubmittingRef.current = false;
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleSubmit,
    getFieldProps,
    isSubmitting,
    isValid,
    dirty,
  } = formik;

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Typography
        variant="h4"
        className="text-gray-800 font-extrabold text-[2rem] mb-2"
      >
        Welcome back!
      </Typography>
      <Typography
        variant="body1"
        className="text-gray-600 text-sm mb-8"
      >
        Welcome back! please Login in to your account
      </Typography>

      <CustomInput
        label="Email"
        type="email"
        placeholder="Enter email"
        {...getFieldProps('email')}
        error={touched.email && errors.email}
        required
      />

      <CustomInput
        label="Password"
        placeholder="Enter Password"
        type={showPassword ? 'text' : 'password'}
        {...getFieldProps('password')}
        error={touched.password && errors.password}
        required
        showPasswordToggle
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
      />

      <Box className="flex justify-between items-center mb-6">
        <FormControlLabel
          control={
            <Checkbox
              {...getFieldProps('rememberMe')}
              checked={values.rememberMe}
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
        fullWidth
        disabled={!isValid || !dirty || isSubmitting}
        sx={{
          backgroundColor: '#F8069D',
          color: '#FFFFFF',
          textTransform: 'none',
          padding: '0.875rem',
          borderRadius: '0.625rem',
          fontSize: '1rem',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: '#C1057D',
          },
          '&:disabled': {
            backgroundColor: '#F8069D',
            opacity: 0.5,
            color: '#FFFFFF',
          },
          mb: '0.75rem',
        }}
      >
        {isSubmitting ? 'Logging in...' : 'Login'}
      </Button>

      <Button
        variant="outlined"
        fullWidth
        onClick={handleSignUp}
        sx={{
          border: '2px solid #F8069D',
          borderColor: '#F8069D',
          color: '#F8069D',
          backgroundColor: '#FFFFFF',
          textTransform: 'none',
          padding: '0.875rem',
          borderRadius: '0.625rem',
          fontSize: '1rem',
          fontWeight: 600,
          '&:hover': {
            borderColor: '#F8069D',
            backgroundColor: 'rgba(248, 6, 157, 0.05)',
            color: '#F8069D',
          },
        }}
      >
        Sign Up
      </Button>
    </form>
  );
};

export default LoginForm;
