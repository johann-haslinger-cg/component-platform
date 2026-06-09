import React from 'react';

interface ButtonProps {
  label?: string;
  variant?: 'Default' | 'Hovered' | 'Pressed';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label = 'Button', variant = 'Default', onClick }) => {
  const baseStyles = 'transition-all duration-200 ease-in-out flex items-center justify-center';
  const sizeStyles = variant === 'Pressed' ? 'w-[96px] h-[41px] p-[9px]' : 'w-[107px] h-[46px] p-[10px]';
  const borderRadius = variant === 'Pressed' ? 'rounded-[60px]' : 'rounded-[67px]';

  let backgroundColor;
  if (variant === 'Default') {
    backgroundColor = 'bg-[#25129D]';
  } else if (variant === 'Hovered') {
    backgroundColor = 'bg-[#3921D5]';
  } else {
    backgroundColor = 'bg-[rgba(37,18,157,0.5)]';
  }

  const textColor = 'text-[#FFFFFF]';
  const fontStyle = variant === 'Pressed' ? 'text-[17px] leading-[23px]' : 'text-[18px] leading-[26px]';

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${borderRadius} ${backgroundColor} ${textColor} ${fontStyle}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export type { ButtonProps };
export default Button;