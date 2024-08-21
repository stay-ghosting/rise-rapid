import Logo from "../assets/rise rapid logo.png"
import icon_hanburger from "../assets/icons/handburger icon.svg"
import CtaButton from "../components/CtaButton";
import CustomNavLink from "../components/CustomNavLink";

const Navbar = () => {
  return (
    <nav className="h-32 w-full flex flex-row justify-between items-center px-32 mt-[2rem] sm:mt-0">
      <img src={icon_hanburger} className="sm:hidden w-[3.5rem] h-[3.5rem] object-cover" alt="menu" />
      <div className="flex flex-row items-center sm:justify-start">
        <img src={Logo} className="w-[17rem] sm:w-[7rem] object-cover" alt="logo" />
        <ul className="flex-row space-between text-[1.5rem] lg:text-[1.25rem] space-x-20 ml-20 hidden sm:flex items-center text-white">
          <CustomNavLink link="/" text="Home" />
          <CustomNavLink link="/about" text="About" />
          <CustomNavLink link="/contact" text="Contact" />
          <CustomNavLink link="/blog" text="Blog" />
        </ul>
      </div>
      <CtaButton />
    </nav>
  )
}

export default Navbar