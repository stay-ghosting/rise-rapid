import React, { useEffect, useRef, useState } from "react";

interface CustomDropdownProps {
  id: string;
  name: string;
  placeholder: string;
  options: { label: string; value: string }[];
  setFieldValue: (value: string) => void;
  inView: boolean;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ id, name, placeholder, options, setFieldValue, inView = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string>(placeholder);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleOptionClick = (value: string, label: string) => {
    setFieldValue(value);
    setSelectedLabel(label);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!inView) {
      setIsOpen(false);
    }
  }, [inView]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    };
  }, []);

  return (
    <div className='relative inline-block w-full py-2'>
      <button
        type='button'
        id={id}
        name={name}
        onClick={toggleDropdown}
        className='w-full border-b border-gray-400 py-2 px-4 text-[1.25rem] font-[400] text-white flex items-center justify-between h-[3.25rem]'
      >
        {selectedLabel || placeholder}
        <span className='ml-2 mt-2 text-4xl'>&#9662;</span>
      </button>
      {isOpen && (
        <div className='absolute w-full bg-card text-white border-b border-r border-l border-gray-400 rounded-b-[0.375rem]' ref={dropdownRef}>
          {options.map((option) => (
            <div key={option.value} onClick={() => handleOptionClick(option.value, option.label)} className='py-2 px-4 cursor-pointer hover:bg-[#303030]'>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
