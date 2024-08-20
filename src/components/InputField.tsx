import React, { useRef } from "react";

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  setFieldValue?: (name:string, fieldValue: string) => void;
  fieldValue?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type,
  placeholder,
  autoComplete,
  setFieldValue,
  fieldValue
}) => {
  const input_ref = useRef<HTMLInputElement | null>(null);

  const handleDivClick = () => {
    input_ref.current?.focus();
  }
  return (
    <div key={id} className="py-2 cursor-pointer" onClick={handleDivClick}>
      <input
        ref={input_ref}
        id={id}
        name={name}
        type={type}
        onChange={e => {
          if (setFieldValue) {
            setFieldValue(name, e.target.value);
          }
        }}
        value={fieldValue}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="outline-none py-2 bg-transparent focus:bg-[#202020] pl-[1rem] w-full border-b border-gray-400 focus:border-white transition-colors ease-in"
      />
    </div>
  );
};

export default InputField;
