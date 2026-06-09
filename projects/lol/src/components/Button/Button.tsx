import React, { useState } from 'react';

export type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  const backgroundColor = isPressed ? 'rgba(41, 41, 41, 1)' : isHovered ? 'rgba(64, 64, 64, 1)' : 'rgba(53, 53, 53, 1)';
  const textColor = 'rgba(255, 255, 255, 1)';

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        backgroundColor,
        color: textColor,
        padding: '8px 26px',
        borderRadius: '54px',
        fontSize: '18px',
        fontWeight: 300,
        lineHeight: '26px',
        width: '96px',
        height: '42px',
      }}
      className="focus:outline-none"
    >
      {label}
    </button>
  );
};

export default Button;