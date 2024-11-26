/* eslint-disable react/prop-types */
const FormInput = ({
  id,
  label,
  value,
  onChange,
  error,
  errorMessage = 'There was an error.',
  success,
  successMessage = 'Looks good!',
  startIcon,
  type = 'text',
  defaultValue,
  placeholder,
  required = false,
  pattern,
  className = '',
  disabled = false,
  size = 'default', // Tambahkan properti size dengan default 'default'
}) => {
  // Menentukan kelas input berdasarkan status error, success, dan size
  const sizeClass = {
    small: 'p-2 text-xs',
    default: 'p-2.5 text-sm',
    large: 'p-4 text-base',
  }[size];

  const inputClass = `bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-slate-300 focus:border-slate-300 block w-full ${
    startIcon ? 'ps-10' : sizeClass
  } ${
    error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : success
      ? 'border-teal-500 focus:border-teal-500 focus:ring-teal-500'
      : ''
  } ${className} dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-300 dark:focus:border-slate-300`;

  // Helper text untuk menampilkan pesan error atau success
  const helperText = error
    ? <p className="text-sm text-red-600 mt-2">{errorMessage}</p>
    : success 
      ? <p className="text-sm text-teal-600 mt-2">{successMessage}</p>
      : null;

  return (
    <div className="relative">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {/* Start Icon */}
        {startIcon && (
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            {startIcon}
          </div>
        )}

        {/* Input Field */}
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          className={inputClass}
          required={required}
          pattern={pattern}
          placeholder={placeholder}
          aria-describedby={`${id}-helper`}
          disabled={disabled}
        />

        {/* End Icon (Error or Success) */}
        {(error || success) && (
          <div className="absolute inset-y-0 end-0 flex items-center pe-3">
            {error && (
              <svg
                className="w-5 h-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
            )}
            {success && (
              <svg
                className="w-5 h-5 text-teal-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
        )}
      </div>

      {helperText}
    </div>
  );
};

export default FormInput;