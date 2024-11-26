/* eslint-disable react/prop-types */
const Button = ({
  size = "default",
  fullWidth = false,
  children,
  onClick,
  disabled,
  variant = "primary",
  type = "button",
}) => {
  const sizeClasses = {
    xs: "py-2 px-3 text-xs",
    sm: "py-2 px-4 text-sm",
    default: "py-2.5 px-5 text-sm",
    large: "py-3 px-5 text-base",
    xl: "py-3.5 px-6 text-base",
  };

  const variantClasses = {
    primary:
      "border-transparent bg-green-700 text-white hover:bg-green-800 focus:ring-2 focus:ring-green-300",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-x-2 font-medium rounded-md ${
        fullWidth ? "w-full" : ""
      } ${sizeClasses[size]} ${
        variantClasses[variant]
      } disabled:opacity-50 disabled:pointer-events-none`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
