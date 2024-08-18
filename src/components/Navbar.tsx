import { useLocation } from "react-router-dom"
import Logo from "../assets/rise rapid logo.png"

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname
  return (
    <nav className="h-20 bg-bg-nav flex flex-row justify-between items-middle content-center px-10">
      <img src={Logo} className="w-28 object-cover" alt="logo" />
      <ul className="flex flex-row space-between space-x-10 items-center text-white">
        <li><a href="/" className={`hover:text-primary ${currentPath === '/' ? 'text-primary' : 'text-white'}`}>Home</a></li>
        <li><a href="/contact" className={`hover:text-primary ${currentPath === '/contact' ? 'text-primary' : 'text-white'}`}>Contact</a></li>
        <li><a href="/about" className={`hover:text-primary ${currentPath === '/about' ? 'text-primary' : 'text-white'}`}>About Us</a></li>
        <div className="bg-cta py-[0.625rem] px-9 rounded-md">
          +447761 929039
        </div>
      </ul>
    </nav>
  )
}

export default Navbar