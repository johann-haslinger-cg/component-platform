import React from 'react';

export type ButtonProps = {
  label: string;
  variant: 'primary' | 'secondary' | 'neutral';
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  autoFocus?: boolean;
  onPress: () => void;
};

export const Button = (
  {
    label,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    loading = false,
    autoFocus = false,
    onPress,
  }: ButtonProps
) => {
  const baseClasses = 'font-medium rounded-none inline-flex items-center justify-center font-sans';

  const variantClasses = {
    primary: 'bg-blue-800 text-white',
    secondary: 'bg-gray-200 text-gray-800',
    neutral: 'bg-gray-100 text-gray-700',
  };

  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-3 text-base',
    large: 'px-6 py-4 text-lg',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';
  const loadingClasses = 'relative';

  const getDisabledState = () => disabled || loading;

  return (
    <button
      className={
        `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
          getDisabledState() ? disabledClasses : ''
        } ${loading ? loadingClasses : ''}`
      }
      disabled={getDisabledState()}
      autoFocus={autoFocus}
      onClick={onPress}
      style={{
        width: size === 'small' ? 57 : size === 'medium' ? 72 : 96,
        height: size === 'small' ? 29 : size === 'medium' ? 36 : 48,
      }}
    >
      {label}
      {loading && (
        <span className="ml-2">
          <svg
            className="animate-spin h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      )}
    </button>
  );
};

export default Button;