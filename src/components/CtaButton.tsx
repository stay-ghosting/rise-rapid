import { useNavigate } from "react-router-dom";

function CtaButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-cta h-20 sm:h-14 text-[1.5rem] sm:text-[1rem] sm:w-60 inline px-9 rounded-[0.375rem] text-white font-semibold hover:bg-cta-hover shadow-xl shadow-shaddow">
      GET A QUOTE
    </button>
  );
}

export default CtaButton;
