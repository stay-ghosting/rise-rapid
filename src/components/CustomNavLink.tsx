import { useLocation, useNavigate } from "react-router-dom"

interface CustomNavLinkProps {
  text: string;
  link: string;
  className?: string;
  onClick?: () => void;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({text, link, onClick, className = ""}) => {
  const location = useLocation();
  const currentPath = location.pathname
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(link)
    if (onClick) {
      onClick()
    }
    window.scroll(0, 0)
  }

  const isActive = currentPath === link || currentPath.startsWith(`${link}/`);

  return (
    <li><button onClick={handleClick} className={`${className} hover:text-cta ${isActive ? 'text-cta' : 'text-white'}`}>{text}</button></li>
  );
};

export default CustomNavLink;