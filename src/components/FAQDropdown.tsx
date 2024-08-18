import icon_plus from "../assets/icons/plus.png";

interface FAQProps {
  title: string;
}

const FAQDropdown: React.FC<FAQProps> = ({title}) => {
    return (
      <div className="flex justify-between">
        <p className="">{title}</p>
        <img src={icon_plus} alt="plus icon" className="w-4 h-4 object-contain text-[1.125rem] font-inter" />
      </div>
    );
};

export default FAQDropdown;
