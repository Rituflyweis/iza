import { Box } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const CustomInput = ({
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  name,
  placeholder = '',
  required = false,
  showPasswordToggle = false,
  showPassword = false,
  onTogglePassword,
  error,
  className = '',
  sx = {},
  ...props
}) => {
  return (
    <Box className={className} sx={{ mb: '1rem', ...sx }}>
      <label className="block text-sm font-semibold text-[#5A6678]" style={{ marginBottom: '0.5rem' }}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Box className="relative">
        <input
          type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          className={`w-full px-4 py-[0.875rem] border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors ${
            error
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
              : 'border-gray-200 focus:ring-pink-500 focus:border-pink-500'
          }`}
          {...props}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 flex items-center justify-center"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </button>
        )}
      </Box>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </Box>
  );
};

export default CustomInput;
