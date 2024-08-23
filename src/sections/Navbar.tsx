import Logo from "../assets/rise rapid logo.png";
import icon_hanburger from "../assets/icons/handburger icon.svg";
import CtaButton from "../components/CtaButton";
import CustomNavLink from "../components/CustomNavLink";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname != '/') {
      navigate("/");
      window.scroll(0, 0);
    }
  };
  return (
    <nav className='h-32 w-full flex flex-row justify-between items-center px-32 mt-[2rem] md:mt-0'>
      <img src={icon_hanburger} className='cursor-pointer md:hidden w-[3.5rem] h-[3.5rem] object-cover' alt='menu' />
      <div className='flex flex-rocursor-pointer cursor-pointer w items-center md:justify-start'>
        <div onClick={handleLogoClick}>
          <img src={Logo} className='w-[17rem] md:w-[7rem] object-cover' alt='logo' />
        </div>
        <ul className='flex-row space-between text-[1.5rem] lg:text-[1.25rem] space-x-20 ml-20 hidden md:flex items-center text-white'>
          <CustomNavLink link='/' text='Home' />
          <CustomNavLink link='/about' text='About' />
          <CustomNavLink link='/contact' text='Contact' />
          <CustomNavLink link='/blog' text='Blog' />
        </ul>
      </div>
      {location.pathname != "/contact" && <CtaButton />}
    </nav>
  );
};

export default Navbar;
