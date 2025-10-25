// This is a reusable button that can look different based on props
function Button({ children, variant = 'primary', onClick, className = '' }) {
  // Base styles that all buttons share
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200';
  
  // Different styles for different button types
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;