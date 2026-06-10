import React from "react";

// Define the props type based on the component contract
export type ButtonProps = {
  label: string;
  variant: "primary" | "secondary" | "neutral";
  size: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  autoFocus?: boolean;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  autoFocus = false,
  onPress,
}) => {
  // Base Tailwind classes for all button states
  const baseClasses = 
    "rounded-full font-light leading-none transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // Size variants
  const sizeClasses = {
    small: "px-3 py-2 text-lg h-10",
    medium: "px-5 py-3 text-xl h-12",
    large: "px-6 py-4 text-2xl h-16",
  };

  // Variant color mappings based on the Figma design
  const variantClasses = {
    primary: {
      default: "bg-indigo-800 text-white",
      hover: "hover:bg-indigo-900 active:bg-indigo-700",
      pressed: "active:bg-indigo-700/50",
    },
    secondary: {
      default: "bg-gray-200 text-gray-800",
      hover: "hover:bg-gray-300 active:bg-gray-100",
      pressed: "active:bg-gray-100",
    },
    neutral: {
      default: "bg-gray-100 text-gray-700",
      hover: "hover:bg-gray-200 active:bg-gray-50",
      pressed: "active:bg-gray-50",
    },
  };

  // Loading state classes
  const loadingClasses = "opacity-80 cursor-wait";

  // Calculate exact dimensions and styles from Figma when needed
  const getFigmaStyles = (currentVariant: string, currentSize: string) => {
    if (currentVariant === "primary" && currentSize === "medium") {
      return {
        style: {
          width: 107,
          height: 46,
          padding: "10px",
          borderRadius: 67,
          fontSize: 18,
          lineHeight: "26px",
        },
      };
    }
    if (currentVariant === "primary" && currentSize === "small") {
      return {
        style: {
          width: 96,
          height: 41,
          padding: "9px",
          borderRadius: 60,
          fontSize: 17,
          lineHeight: "23px",
        },
      };
    }
    return {};
  };

  // Handle click when not disabled or loading
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onPress?.();
  };

  // Get the appropriate classes based on state
  const getButtonClasses = () => {
    const classes = [
      baseClasses,
      sizeClasses[size],
      variantClasses[variant].default,
      variantClasses[variant].hover,
      loading ? loadingClasses : "",
    ];

    return classes.join(" ").trim();
  };

  return (
    <button
      className={getButtonClasses()}
      disabled={disabled || loading}
      autoFocus={autoFocus}
      onClick={handleClick}
      style={getFigmaStyles(variant, size).style}
      aria-label={label}
      aria-disabled={disabled || loading}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
          Loading...
        </span>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;