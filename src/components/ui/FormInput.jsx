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
  endButton,
  onEndButtonClick,
  type = 'text',
  defaultValue,
  placeholder,
  required = false,
  pattern,
  className = '',
  disabled = false,
  size = 'default',
}) => {
  // status error, success, dan size
  const sizeClass = {
    small: 'p-2 text-xs',
    default: 'p-2.5 text-sm',
    large: 'p-4 text-base',
  }[size];

  const inputClass = `bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-slate-300 focus:border-slate-300 block w-full ${
    startIcon || endButton ? 'ps-10 pe-10' : sizeClass
  } ${
    error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : success
      ? 'border-teal-500 focus:border-teal-500 focus:ring-teal-500'
      : ''
  } ${className}`;

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
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {/* Start Icon */}
        {startIcon && (
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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

        {/* End Button */}
        {endButton && (
          <button
            type="button"
            onClick={onEndButtonClick}
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            {endButton}
          </button>
        )}
      </div>

      {helperText}
    </div>
  );
};

export default FormInput;