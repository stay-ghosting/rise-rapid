import { Link, useLocation, useNavigate } from "react-router-dom"

interface CustomNavLinkProps {
  text: string;
  link: string;
  className?: string;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({text, link, className = ""}) => {
  const location = useLocation();
  const currentPath = location.pathname
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(link)
    window.scroll(0, 0)
  }

  return (
    <li><button onClick={handleClick} className={`${className} hover:text-cta ${currentPath === link ? 'text-cta' : 'text-white'}`}>{text}</button></li>
  );
};

export default CustomNavLink;