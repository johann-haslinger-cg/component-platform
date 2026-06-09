import React from 'react';

export type InputProps = {
  value?: string;
  placeholder?: string;
  variant?: 'Default' | 'Focused';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ value, placeholder, variant = 'Default', onChange }) => {
  const baseStyle = 'focus:outline-none transition-all duration-200';
  const variants = {
    Default: 'bg-[rgba(143,143,143,1)] text-[rgba(0,0,0,0.5)] p-[10px] rounded-[52px] text-[18px] font-[300] leading-[26px]',
    Focused: 'bg-[rgba(143,143,143,1)] text-[rgba(0,0,0,0.5)] border-[1px] border-[rgba(0,0,0,1)] p-[10px] rounded-[52px] text-[18px] font-[300] leading-[26px] focus:border-[rgba(0,0,0,1)]',
  };

  return (
    <input
      className={`${baseStyle} ${variants[variant]}`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;