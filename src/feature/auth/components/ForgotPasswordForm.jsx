import { useState } from 'react';
import { useFormik } from 'formik';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CustomInput } from '../../../components';
import { forgotPasswordSchema } from '../../../schema/auth/authSchema';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { setSubmitting, setTouched, validateForm }) => {
      // Mark that form submission was attempted
      setSubmitAttempted(true);

      // Mark all fields as touched FIRST so errors will display
      setTouched({
        email: true,
      });

      // Then validate the form
      const validationErrors = await validateForm();

      // Stop if validation fails
      if (Object.keys(validationErrors).length > 0) {
        setSubmitting(false);
        return;
      }

      setSubmitting(true);

      try {
        // Navigate to OTP page after submitting email
        navigate('/verify-otp');
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    errors,
    touched,
    handleSubmit,
    getFieldProps,
    isSubmitting,
  } = formik;

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
        type="email"
        placeholder="Enter Email"
        {...getFieldProps('email')}
        touched={touched.email || submitAttempted}
        error={(touched.email || submitAttempted) && errors.email ? errors.email : ''}
        required
        sx={{ mb: '1.5rem' }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={isSubmitting}
        className="normal-case bg-[#F8069D] text-white py-[0.875rem] rounded-[0.625rem] text-base font-semibold hover:bg-[#C1057D]"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </Box>
  );
};

export default ForgotPasswordForm;
