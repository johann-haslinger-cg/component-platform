import React from 'react';

export type TextInputProps = {
  value: string;
  label: string;
  disabled?: boolean;
  onValueChange: (value: string) => void;
  inputType?: 'text' | 'email' | 'password' | 'url';
  placeholder?: string;
  maxLength?: string;
  autoFocus?: boolean;
  errorMessage?: string;
};

export const TextInput = ({
  value,
  label,
  disabled = false,
  onValueChange,
  inputType = 'text',
  placeholder,
  maxLength,
  autoFocus = false,
  errorMessage,
}: TextInputProps) => {
  const baseClasses = 'font-medium rounded-none px-2 py-1.5 text-sm font-sans';
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  const errorClasses = 'border border-black';
  const normalClasses = 'border border-transparent';

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        type={inputType}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength ? parseInt(maxLength, 10) : undefined}
        disabled={disabled}
        autoFocus={autoFocus}
        className={
          `${baseClasses} ${
            disabled ? disabledClasses : errorMessage ? errorClasses : normalClasses
          } w-[134px] h-[27px] bg-white text-gray-400`
        }
        style={{
          borderRadius: '0px',
        }}
      />
      {errorMessage && (
        <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default TextInput;