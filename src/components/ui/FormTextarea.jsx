/* eslint-disable react/prop-types */
const FormTextarea = ({
  id,
  label,
  value,
  onChange,
  error,
  errorMessage = "There was an error.",
  success,
  successMessage = "Looks good!",
  startIcon,
  type = "text",
  defaultValue,
  placeholder,
  required = false,
  className = "",
  disabled = false,
  rows = 4,
  size = "default",
}) => {
  // status error, success, dan size
  const sizeClass = {
    small: "p-2 text-xs",
    default: "p-2.5 text-sm",
    large: "p-4 text-base",
  }[size];

  const textareaClass = `bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ${
    startIcon ? "ps-10" : sizeClass
  } ${
    error
      ? "border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-100"
      : success
      ? "border-teal-500 focus:border-teal-500 focus:ring-teal-500"
      : ""
  } ${className}`;

  // Helper text untuk menampilkan pesan error atau success
  const helperText = error ? (
    <p className="text-sm text-red-600 mt-2">{errorMessage}</p>
  ) : success ? (
    <p className="text-sm text-teal-600 mt-2">{successMessage}</p>
  ) : null;

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
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            {startIcon}
          </div>
        )}

        {/* Textarea Field */}
        <textarea
          id={id}
          name={id}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          className={textareaClass}
          required={required}
          placeholder={placeholder}
          aria-describedby={`${id}-helper`}
          disabled={disabled}
          rows={rows}
        />
      </div>
      {helperText}
    </div>
  );
};

export default FormTextarea;
