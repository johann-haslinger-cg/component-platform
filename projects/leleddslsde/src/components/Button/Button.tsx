import React from 'react';

export type ButtonProps = {
  label?: string;
  variant?: 'Default' | 'Hovered' | 'Pressed';
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label = 'Button', variant = 'Default', onClick }) => {
  const baseStyle = 'focus:outline-none transition-all ease-in-out duration-200';
  const variants = {
    Default: 'bg-[rgba(37,18,157,1)] text-white p-[10px] rounded-[67px] text-[18px] font-[300] leading-[26px] hover:bg-[rgba(57,33,213,1)]',
    Hovered: 'bg-[rgba(57,33,213,1)] text-white p-[10px] rounded-[67px] text-[18px] font-[300] leading-[26px]',
    Pressed: 'bg-[rgba(37,18,157,0.5)] text-white p-[9px] rounded-[60px] text-[17px] font-[300] leading-[23px] active:scale-[0.95]',
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;