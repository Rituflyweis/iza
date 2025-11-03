import { Box } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const CustomInput = ({
  label,
  type = 'text',
  value,
  onChange,
  name,
  placeholder = '',
  required = false,
  showPasswordToggle = false,
  showPassword = false,
  onTogglePassword,
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
          placeholder={placeholder}
          required={required}
          className="w-full px-4 py-[0.875rem] border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
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
    </Box>
  );
};

export default CustomInput;
