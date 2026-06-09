import React from 'react';

interface InputProps {
  state?: 'Default' | 'Focused';
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ state = 'Default', value, placeholder, onChange }) => {
  const baseStyles = 'transition-all duration-200 ease-in-out';
  const borderStyles = state === 'Focused' ? 'border border-black' : '';

  return (
    <input
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`${baseStyles} w-[258px] h-[46px] p-[10px] pl-[18px] rounded-[52px] bg-[rgba(143,143,143,1)] text-[rgba(0,0,0,0.5)] text-[18px] leading-[26px] ${borderStyles}`}
    />
  );
};

export type { InputProps };
export default Input;