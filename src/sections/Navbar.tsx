import Logo from "../assets/rise rapid logo.png";
import icon_hanburger from "../assets/icons/handburger icon.svg";
import CtaButton from "../components/CtaButton";
import CustomNavLink from "../components/CustomNavLink";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { link: "/", text: "Home" },
  { link: "/about", text: "About" },
  { link: "/contact", text: "Contact" },
  { link: "/blog", text: "Blog" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
    const [hasBeenOpen, setHasBeenOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => {
    if (!prev) {
      setHasBeenOpen(true)
    }
    return !prev
  });

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const handburgerRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && handburgerRef.current && !handburgerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setHasBeenOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogoClick = () => {
    if (location.pathname != "/") {
      navigate("/");
      setIsOpen(false);
      window.scroll(0, 0);
    }
  };
  return (
    <>
      <nav className='relative z-20 bg-[#151517] h-32 w-full flex flex-row justify-between items-center px-32 pb-[2rem] pt-[2rem] md:pt-0'>
        <div onClick={toggleDropdown} ref={handburgerRef} className="md:hidden">
          <img src={icon_hanburger} className='cursor-pointer  w-[3.5rem] h-[3.5rem] object-cover' alt='menu' />
        </div>
        <div className='flex flex-rocursor-pointer cursor-pointer w items-center md:justify-start'>
          <div onClick={handleLogoClick}>
            <img src={Logo} className='w-[17rem] md:w-[7rem] object-cover' alt='logo' />
          </div>
          <ul className='flex-row space-between text-[1.5rem] lg:text-[1.25rem] space-x-20 ml-20 hidden md:flex items-center text-white'>
            {navLinks.map(({ link, text }) => (
              <CustomNavLink key={link} link={link} text={text} />
            ))}
          </ul>
        </div>
        {location.pathname != "/contact" && <CtaButton />}
      </nav>
      <div className={`relative z-10`} ref={dropdownRef}>
        <ul
          className={`absolute md:hidden w-full bg-card text-white text-[1.5rem] lg:text-[1.25rem] rounded-b-[0.375rem]
      ${hasBeenOpen ? (isOpen ? "dropdown-show" : "dropdown-hide") : "hidden" }` }
        >
          {navLinks.map(({ link, text }, index) => (
            <CustomNavLink
              className={`border-[#303030] p-[1rem] w-full hover:bg-[#303030] ${index !== navLinks.length - 1 ? "border-b" : ""}`}
              onClick={() => {
                setIsOpen(false);
              }}
              key={link}
              link={link}
              text={text}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
