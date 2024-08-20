import { useLocation } from "react-router-dom"
import Logo from "../assets/rise rapid logo.png"
import CtaButton from "./CtaButton";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname
  return (
    <nav className="h-32 w-full flex flex-row justify-between items-center content-center px-32">
      <div className="flex flex-row">
        <img src={Logo} className="w-28 object-cover" alt="logo" />
        <ul className="flex flex-row space-between space-x-20 ml-20 items-center text-white">
          <li><a href="/" className={`hover:text-primary ${currentPath === '/' ? 'text-primary' : 'text-white'}`}>Home</a></li>
          <li><a href="/about" className={`hover:text-primary ${currentPath === '/about' ? 'text-primary' : 'text-white'}`}>About</a></li>
          <li><a href="/contact" className={`hover:text-primary ${currentPath === '/contact' ? 'text-primary' : 'text-white'}`}>Sevices</a></li>
          <li><a href="/blog" className={`hover:text-primary ${currentPath === '/blog' ? 'text-primary' : 'text-white'}`}>Blog</a></li>
        </ul>
      </div>
      <CtaButton />
    </nav>
  )
}

export default Navbar