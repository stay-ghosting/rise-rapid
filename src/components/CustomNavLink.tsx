import { useLocation } from "react-router-dom"

interface CustomNavLinkProps {
  text: string;
  link: string;
  className?: string;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({text, link, className = ""}) => {
  const location = useLocation();
  const currentPath = location.pathname

  return (
    <li><a href={link} className={`${className} hover:text-cta ${currentPath === link ? 'text-cta' : 'text-white'}`}>{text}</a></li>
  );
};

export default CustomNavLink;