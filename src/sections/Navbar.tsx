import Logo from "../assets/rise rapid logo.png"
import CtaButton from "../components/CtaButton";
import CustomNavLink from "../components/CustomNavLink";

const Navbar = () => {
  return (
    <nav className="h-32 w-full flex flex-row justify-between items-center content-center px-32">
      <div className="flex flex-row">
        <img src={Logo} className="w-28 object-cover" alt="logo" />
        <ul className="flex flex-row space-between space-x-20 ml-20 items-center text-white">
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