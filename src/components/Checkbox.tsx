import React from 'react';

interface CustomCheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (name:string) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ id, name, checked, onChange }) => {
  return (
    <div className='flex items-center'>
      <input
        type='checkbox'
        id={id}
        name={name}
        checked={checked}
        onChange={() => onChange(name)}
        className='hidden'
      />
      
      <label
        htmlFor={id}
        className={`w-[1rem] h-[1rem] ${checked ? "bg-cta" :  "bg-white"} rounded-sm`}
      >
      </label>      
    </div>
  );
};

export default CustomCheckbox;
