import useTheme from '@/hooks/useTheme';
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  width?: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  className?: string;
  title: string;
  text: string | React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  width = 'auto',
  height = 'auto',
  backgroundColor,
  textColor = '#ffffff',
  disabled = false,
  className = '',
  title = "",
  text = "",
}) => {
   const {getColor} = useTheme();
  const buttonStyle: React.CSSProperties = {
    width,
    height,
    backgroundColor:  backgroundColor || getColor("secondary"),
    color: textColor,
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.3s ease',
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      title={title}
      disabled={disabled}
      className={`custom-button ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;