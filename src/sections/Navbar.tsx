import { useLocation } from "react-router-dom"
import Logo from "../assets/rise rapid logo.png"
import CtaButton from "../components/CtaButton";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname
  return (
    <nav className="h-32 w-full flex flex-row justify-between items-center content-center px-32">
      <div className="flex flex-row">
        <img src={Logo} className="w-28 object-cover" alt="logo" />
        <ul className="flex flex-row space-between space-x-20 ml-20 items-center text-white">
          <li><a href="/" className={`hover:text-cta ${currentPath === '/' ? 'text-cta' : 'text-white'}`}>Home</a></li>
          <li><a href="/about" className={`hover:text-cta ${currentPath === '/about' ? 'text-cta' : 'text-white'}`}>About</a></li>
          <li><a href="/contact" className={`hover:text-cta ${currentPath === '/contact' ? 'text-cta' : 'text-white'}`}>Sevices</a></li>
          <li><a href="/blog" className={`hover:text-cta ${currentPath === '/blog' ? 'text-cta' : 'text-white'}`}>Blog</a></li>
        </ul>
      </div>
      <CtaButton />
    </nav>
  )
}

export default Navbar