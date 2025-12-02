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
  const [submitAttempted, setSubmitAttempted] = useState(false);
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

    onSubmit: async (values, { setSubmitting, setTouched, validateForm }) => {
      // Mark that form submission was attempted
      setSubmitAttempted(true);

      // Mark all fields as touched FIRST so errors will display
      setTouched({
        email: true,
        password: true,
      });

      // Then validate the form
      const validationErrors = await validateForm();

      // Stop if validation fails
      if (Object.keys(validationErrors).length > 0) {
        setSubmitting(false);
        return;
      }

      // Prevent double submission
      if (isSubmittingRef.current) return;
      isSubmittingRef.current = true;
      setSubmitting(true);

      try {
        dispatch(showLoader('Logging in...'));

        const response = await axiosInstance.post('/signin', {
          email: values.email,
          password: values.password,
        });

        const { accessToken, data } = response.data;

        dispatch(
          setCredentials({
            token: accessToken,
            user: data,
          })
        );

        if (values.rememberMe) {
          localStorage.setItem('token', accessToken);
        } else {
          sessionStorage.setItem('token', accessToken);
        }

        showSuccess('Login successful!');

        setTimeout(() => navigate('/dashboard'), 500);
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

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Typography variant="h4" className="text-gray-800 font-extrabold text-[2rem] mb-2">
        Welcome back!
      </Typography>
      <Typography variant="body1" className="text-gray-600 text-sm mb-8">
        Welcome back! Please log in to your account
      </Typography>

      {/* Email */}
      <CustomInput
        label="Email"
        type="email"
        placeholder="Enter email"
        {...getFieldProps('email')}
        touched={touched.email || submitAttempted}
        error={(touched.email || submitAttempted) && errors.email ? errors.email : ''}
        required
      />

      {/* Password */}
      <CustomInput
        label="Password"
        placeholder="Enter password"
        type={showPassword ? 'text' : 'password'}
        {...getFieldProps('password')}
        touched={touched.password || submitAttempted}
        error={(touched.password || submitAttempted) && errors.password ? errors.password : ''}
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
              sx={{
                '&.Mui-checked': { color: '#F8069D' },
                '& .MuiSvgIcon-root': { fontSize: '1.25rem' },
              }}
            />
          }
          label={<span className="text-sm font-semibold text-gray-700">Remember me</span>}
        />

        <Link
          component="button"
          onClick={() => navigate('/forgot-password')}
          className="text-sm font-semibold text-[#F8069D] hover:text-[#C1057D] no-underline hover:underline cursor-pointer"
        >
          Forgot Password?
        </Link>
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={isSubmitting}
        sx={{
          backgroundColor: '#F8069D',
          color: '#FFFFFF',
          textTransform: 'none',
          padding: '0.875rem',
          borderRadius: '0.625rem',
          fontWeight: 600,
          '&:hover': { backgroundColor: '#C1057D' },
          '&:disabled': { backgroundColor: '#F8069D', opacity: 0.5 },
          mb: '0.75rem',
        }}
      >
        {isSubmitting ? 'Logging in...' : 'Login'}
      </Button>

      <Button
        fullWidth
        variant="outlined"
        onClick={() => navigate('/signup')}
        sx={{
          borderColor: '#F8069D',
          color: '#F8069D',
          textTransform: 'none',
          padding: '0.875rem',
          borderRadius: '0.625rem',
          fontWeight: 600,
          '&:hover': { backgroundColor: 'rgba(248, 6, 157, 0.05)' },
        }}
      >
        Sign Up
      </Button>
    </form>
  );
};

export default LoginForm;
