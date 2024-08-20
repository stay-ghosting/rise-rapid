import React from "react";

interface DropdownProps {
  id: string;
  name: string;
  placeholder: string;
  services: { label: string; value: string }[];
  setFieldValue: (name: string, value: string) => void;
  fieldValue: string;
}

const Dropdown: React.FC<DropdownProps> = ({ id, name, placeholder, services, setFieldValue, fieldValue }) => {
  
  return (
    <div className="py-2">
      <select
        id={id}
        name={name}
        onChange={e => {setFieldValue(name, e.target.value)}}
        value={fieldValue}
        required
        className="outline-none py-2 bg-transparent focus:bg-[#202020] pl-[1rem] w-full border-b border-gray-400 focus:border-white transition-colors ease-in"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {services.map((service) => (
          <option key={service.value} value={service.value}>
            {service.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
