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

export default function CustomButton({
  onClick,
  width = 'auto',
  height = 'auto',
  backgroundColor,
  textColor = '#ffffff',
  disabled = false,
  className = '', // Default to an empty string to avoid undefined
  title = "",
  text = "",
}: ButtonProps){
   const { getColor } = useTheme();

  const buttonStyle: React.CSSProperties = {
    width,
    height,
    backgroundColor: backgroundColor || getColor("secondary"),
    color: textColor,
    padding: '10px 20px',
    fontSize: '16px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      title={title}
      disabled={disabled}
      className={`custom-button ${disabled ? 'disabled-class' : 'enabled-class'} ${className}`}
    >
      {text}
    </button>
  );
};


