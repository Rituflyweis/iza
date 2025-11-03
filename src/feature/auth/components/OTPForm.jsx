import { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const OTPForm = () => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleCodeChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    console.log('Submit code:', fullCode);
    // Implement submit logic here
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="w-full">
      <Typography 
        variant="h4" 
        className="text-gray-800 font-extrabold text-[2rem]"
        sx={{ mb: '0.5rem', display: 'block' }}
      >
        Verify OTP
      </Typography>
      <Typography 
        variant="body1" 
        className="text-gray-600 text-sm"
        sx={{ mb: '2rem', display: 'block' }}
      >
        Please enter the 4-digit code sent to your email.
      </Typography>

      <Typography 
        variant="body2" 
        className="text-gray-700 text-sm font-semibold"
        sx={{ mb: '1rem', display: 'block' }}
      >
        Enter Code
      </Typography>

      <Box className="flex gap-3" sx={{ mb: '2rem' }}>
        {code.map((digit, index) => (
          <input
            key={index}
            id={`code-${index}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleCodeChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="flex-1 w-full h-16 px-4 border-2 border-gray-200 rounded-lg text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
          />
        ))}
      </Box>

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

export default OTPForm;

