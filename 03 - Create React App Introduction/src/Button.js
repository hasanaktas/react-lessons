const Button = ({ title = "Click", className, ...otherProps }) => {
  return (
    <button
      className={`bg-blue-600 p-4 text-white rounded-md m-3 ${className}`}
      {...otherProps}
    >
      {title}
    </button>
  );
};

export default Button;
