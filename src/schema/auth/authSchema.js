import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full name is required')
    // .min(2, 'Full name must be at least 2 characters')
    // .max(50, 'Full name must be less than 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces'),
  
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format'),
  
  password: Yup.string()
    .required('Password is required')
    // .min(8, 'Password must be at least 8 characters')
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    //   'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    // )
    ,
  
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  
  password: Yup.string()
    .required('Password is required'),
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});


