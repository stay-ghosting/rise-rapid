import icon_arrow from "../assets/icons/Hover Card/arrow.png";

interface HoverCardsProps {
    image: string;
    text: string;
}

const HoverCards: React.FC<HoverCardsProps> = ({image, text}) => {
    return (
        <div className="w-[21rem] h-[13.563rem] bg-bg-card px-4 pt-4 pb-9 relative">
            <img
                className="h-4 w-4 object-contain absolute top-4 right-4"
                src={icon_arrow}
                alt="Arrow icon"
            />
            <div className="absolute bottom-8 left-4">
                <img src={image} alt={text + " icon"} />
                <p className="text-white text-2xl font-[500] mt-5">
                    Online Presence
                </p>
            </div>
        </div>
    );
};

export default HoverCards;
