import React from 'react';

interface InputProps {
  label?: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  required?: boolean;
}

const CustomInput: React.FC<InputProps> = ({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  width = 'w-[48%]',
  required = false,
}) => {
  return (
    <div className={`mb-4 ${width}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-10 bg-[#D4DFEE]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default CustomInput;