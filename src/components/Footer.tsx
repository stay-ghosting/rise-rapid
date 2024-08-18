import icon_facebook from "../assets/icons/social/facebook.svg";
import icon_instagram from "../assets/icons/social/instagram.svg";
import icon_linkedin from "../assets/icons/social/linkedin.svg";

const socialIcons = [
  {
    image: icon_facebook,
    altText: "facebook icon",
  },
  {
    image: icon_instagram,
    altText: "instagram icon",
  },
  {
    image: icon_linkedin,
    altText: "linkedin icon",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#151515] pb-12 flex flex-col items-center px-28">
      <ul className="flex space-x-12 text-white font-light mt-16">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/">Steps</a>
        </li>
        <li>
          <a href="/">Links</a>
        </li>
        <li>
          <a href="/terms">Terms</a>
        </li>
        <li>
          <a href="/privacy">Privacy</a>
        </li>
      </ul>
      <div className="flex items-center bg-[#5D5D5D] h-20 px-14 mt-8 space-x-20 rounded-lg mb-10">
        <p className="text-white">Subscribe to our newsletter</p>
        <div className="">
          <form action="">
            <input
              type="email"
              name="email"
              id="email"
              className="outline-none w-36 h-10 pl-2 text-[0.75rem]"
              placeholder="Type your email..."
            />
            <button
              type="submit"
              className="h-10 box-border border text-[0.75rem] px-4 text-white border-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-[#505050] border-b w-full"></div>
      <div className="flex justify-between items-center w-full px-16 mt-6">
        <p className="font-thin text-[0.875rem] text-white">
          Established in 2024. All rights reserved.
        </p>
        <div className="flex space-x-8">
          {socialIcons.map(({ image, altText }, index) => (
            <img
              src={image}
              alt={altText}
              key={index}
              className="w-12 h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
