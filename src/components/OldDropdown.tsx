import React, { useRef, useEffect, useState } from "react";
import icon_dropdownArrow from "../assets/icons/dropdown arrow.svg";

interface DropdownProps {
  id: string;
  name: string;
  placeholder: string;
  selectedService: { label: string; value: string } | null;
  setSelectedService: (service: { label: string; value: string }) => void;
  services: { label: string; value: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ id, name, placeholder, selectedService, setSelectedService: setSelectedService, services }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleDropdownClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleServiceSelect = (service: { label: string; value: string }) => {
    setSelectedService(service);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (isDropdownOpen && !dropdownRef.current?.contains(event.target as Node)) {
      setIsDropdownOpen(false);
      console.log();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='relative mt-4' ref={dropdownRef}>
      <div className='relative'>
        <img className="absolute right-4 top-3" src={icon_dropdownArrow}/>
        <input
          name={name}
          id={id}
          type='text'
          placeholder={placeholder}
          value={selectedService?.label || placeholder}
          onClick={handleDropdownClick}
          readOnly
          className='outline-none py-1 bg-transparent focus:bg-[#202020] pl-[1rem] w-full border-b border-gray-400 transition-colors ease-in'
        />
      </div>
      {isDropdownOpen && (
        <div className='absolute w-full bg-[#202020] text-white rounded-bl rounded-br shadow-lg z-10'>
          {services.map((service) => (
            <div key={service.value} onClick={() => handleServiceSelect(service)} className='p-2 cursor-pointer hover:bg-[#404040]'>
              {service.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
