import React from "react";

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

export default function CustomInput({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  width = "w-[48%]",
}: InputProps){
  return (
    <div className={`mb-4 ${width}`}>
      <label htmlFor={id} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="shadow-sm block w-full sm:text-sm rounded-md h-10 bg-[#D4DFEE] outline-none focus:border-secondary border-[2px] pl-2 text-lightText"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};


