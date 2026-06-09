import React, { useState } from 'react';

export type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const [isHover, setIsHover] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  const getStyles = () => {
    if (isPressed) {
      return 'bg-[rgba(255,255,255,0.050)]';
    }
    if (isHover) {
      return 'bg-[rgba(255,255,255,0.150)]';
    }
    return 'bg-[rgba(255,255,255,0.1)]';
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`w-24 h-[42px] rounded-[54px] ${getStyles()} text-[rgba(255,255,255,1)] text-[18px] font-light leading-[26px] p-2 transition-all ease-in-out duration-200`}
    >
      {label}
    </button>
  );
};

export default Button;