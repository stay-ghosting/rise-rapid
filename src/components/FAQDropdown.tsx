import { useState, useRef, useEffect } from "react";
import icon_plus from "../assets/icons/plus.svg";
import icon_minus from "../assets/icons/minus.svg";

interface FAQProps {
  title: string;
  answer: string;
  inView: boolean;
  index: number;
}

const FAQDropdown: React.FC<FAQProps> = ({ title, answer, inView, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      // Update height when isOpen changes
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, height]);

  const animationDelay = index * 100 + 300;

  return (
    <>
      <div className={`flex flex-col`}>
        <div className='flex justify-between items-start cursor-pointer' onClick={() => setIsOpen((prev) => !prev)}>
          <p
            className={`hover:text-white pr-[1rem]
            ${isOpen ? "text-white" : "text-[#ccc]"} 
            ${inView ? "fade-right" : "opacity-0"}`}
            style={{ animationDelay: `${animationDelay}ms` }}
          >
            {title}
          </p>
          <img
            src={isOpen ? icon_minus : icon_plus}
            alt='plus icon'
            className={`w-[2.5rem] h-[2.5rem] mt-[1.875rem] sm:mt-0 sm:w-4 sm:h-4 object-contain sm:text-[1.125rem] font-inter text-cta ${inView ? "fade-left" : "opacity-0"}`}
            style={{ animationDelay: `${animationDelay}ms` }}
          />
        </div>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out`} style={{ height: `${height}px` }}>
          <p
            ref={contentRef}
            className={` mt-2 pb-8 text-[1.25rem] transition-opacity duration-300 ease-in-out
            ${inView ? "fade-in" : "opacity-0"}`}
            style={{ animationDelay: `${animationDelay}ms` }}
          >
            {answer}
          </p>
        </div>
      </div>
      <div
        className={`border-b border-card
        ${isOpen ? "text-white" : "text-[#ccc]"} 
        ${inView ? "fade-right" : "opacity-0"}`}
        style={{ animationDelay: `${animationDelay}ms` }}
      />
    </>
  );
};

export default FAQDropdown;
