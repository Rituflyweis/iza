import { useState, useRef } from 'react';
import { useFormik } from 'formik';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CustomInput } from '../../../components';
import { signUpSchema } from '../../../schema/auth/authSchema';
import axiosInstance from '../../../api/axios';
import { useAppDispatch } from '../../../store/hooks';
import { showLoader, hideLoader } from '../../../store/slices/loaderSlice';
import useToast from '../../../hooks/useToast';

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { showSuccess, showError } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const isSubmittingRef = useRef(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signUpSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { resetForm, setSubmitting, setTouched, validateForm }) => {
      // Mark that form submission was attempted
      setSubmitAttempted(true);

      // Mark all fields as touched FIRST so errors will display
      setTouched({
        fullName: true,
        email: true,
        password: true,
        confirmPassword: true,
      });

      // Then validate the form
      const validationErrors = await validateForm();

      // Stop if validation fails
      if (Object.keys(validationErrors).length > 0) {
        setSubmitting(false);
        return;
      }

      // Prevent double submission
      if (isSubmittingRef.current) {
        return;
      }

      isSubmittingRef.current = true;
      setSubmitting(true);

      try {
        dispatch(showLoader('Creating account...'));

        // Prepare request body (excluding confirmPassword)
        const requestBody = {
          fullName: values.fullName,
          email: values.email,
          password: values.password,
        };

        await axiosInstance.post('/registration', requestBody);

        showSuccess('Account created successfully!');
        resetForm();

        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.response?.data?.error ||
          'Signup failed, please try again.';
        showError(errorMessage);
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
    dirty
  } = formik;

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Typography
        variant="h4"
        className="text-gray-800 font-extrabold text-[2rem] mb-2"
      >
        Create an account
      </Typography>
      <Typography
        variant="body1"
        className="text-gray-600 text-sm mb-4"
      >
        Set up new user account.
      </Typography>

      <CustomInput
        label="Full Name"
        placeholder="Enter Name"
        {...getFieldProps('fullName')}
        touched={touched.fullName || submitAttempted}
        error={(touched.fullName || submitAttempted) && errors.fullName ? errors.fullName : ''}
        required
      />

      <CustomInput
        label="Email"
        type="email"
        placeholder="Enter Email"
        {...getFieldProps('email')}
        touched={touched.email || submitAttempted}
        error={(touched.email || submitAttempted) && errors.email ? errors.email : ''}
        required
      />

      <Box className="flex gap-4 mb-4">
        <Box className="flex-1">
          <CustomInput
            label="Password"
            placeholder="Enter Password"
            type={showPassword ? 'text' : 'password'}
            {...getFieldProps('password')}
            touched={touched.password || submitAttempted}
            error={(touched.password || submitAttempted) && errors.password ? errors.password : ''}
            required
            showPasswordToggle
            showPassword={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
          />
        </Box>
        <Box className="flex-1">
          <CustomInput
            label="Confirm Password"
            placeholder="Enter Password"
            type={showConfirmPassword ? 'text' : 'password'}
            {...getFieldProps('confirmPassword')}
            touched={touched.confirmPassword || submitAttempted}
            error={(touched.confirmPassword || submitAttempted) && errors.confirmPassword ? errors.confirmPassword : ''}
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
        fullWidth
        disabled={isSubmitting}
        onClick={(e) => {
          // Additional prevention for double clicks
          if (isSubmitting) {
            e.preventDefault();
            return;
          }
        }}
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
        }}
      >
        {isSubmitting ? 'Creating Account...' : 'Sign up'}
      </Button>
    </form>
  );
};

export default SignUpForm;
