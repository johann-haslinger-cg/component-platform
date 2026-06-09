import React, { useState } from 'react';

export type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = isPressed ? {
    width: 96,
    height: 41,
    padding: '9px 9px',
    borderRadius: 60,
    backgroundColor: 'rgba(37, 18, 157, 0.5)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 17,
    fontWeight: 300,
    lineHeight: 23,
  } : isHovered ? {
    width: 107,
    height: 46,
    padding: '10px 10px',
    borderRadius: 67,
    backgroundColor: 'rgba(57, 33, 213, 1)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    fontWeight: 300,
    lineHeight: 26,
  } : {
    width: 107,
    height: 46,
    padding: '10px 10px',
    borderRadius: 67,
    backgroundColor: 'rgba(37, 18, 157, 1)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 18,
    fontWeight: 300,
    lineHeight: 26,
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className="focus:outline-none"
    >
      {label}
    </button>
  );
};

export default Button;