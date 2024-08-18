import Navbar from "../components/Navbar";
import Banner from "../assets/images/hero image.jpeg";

import RecentWork from "../assets/images/our resent work.png";
import HoverCards from "../components/HoverCards";

import icon_screen1 from "../assets/icons/home/screen.svg";
import icon_screen2 from "../assets/icons/home/screen2..svg";
import icon_phone from "../assets/icons/home/phone.svg";
import icon_search from "../assets/icons/home/search.svg";

const icons = [
  {
    image: icon_screen1,
    text: "Bespoke Web Design",
  },
  {
    image: icon_screen2,
    text: "Social Media",
  },
  {
    image: icon_phone,
    text: "Mobile-Friendly",
  },
  {
    image: icon_search,
    text: "SEO Optimisation",
  },
];

import icon_Wifi from "../assets/icons/Hover Card/wifi.svg";
import icon_Phone from "../assets/icons/Hover Card/phone.svg";
import icon_Thumbs from "../assets/icons/Hover Card/thumbs up.svg";
import icon_Shake from "../assets/icons/Hover Card/hand shake.svg";
import icon_Headset from "../assets/icons/Hover Card/headset.svg";
import icon_Achieve from "../assets/icons/Hover Card/achive.svg";

import Footer from "../components/Footer";
import FAQSection from "../sections/FAQSection";
import GetInTouchSection from "../sections/GetInTouchSection";

import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const cardIcons = [
  {
    image: icon_Wifi,
    text: "Online Presence",
  },
  {
    image: icon_Phone,
    text: "Lead Generation",
  },
  {
    image: icon_Thumbs,
    text: "Customer Engagement",
  },
  {
    image: icon_Shake,
    text: "Credibility & Trust",
  },
  {
    image: icon_Headset,
    text: "Customer Support",
  },
  {
    image: icon_Achieve,
    text: "Competitive Edge",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const serviceSection = useRef<HTMLDivElement | null>(null);

  const scroll = () => {
    serviceSection.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <>
      <Navbar />
      <section className="relative h-[37rem] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <img
            src={Banner}
            alt="Background Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 w-[60%] px-6 py-12 md:px-12 md:py-24 flex items-center justify-center">
          <div>
            <h1 className="font-[700] text-black text-[2.5rem]">
              Website <span className="text-primary">Design</span> Specialists
            </h1>
            <p className="mt-4 text-white">
              Affordable websites that dont look cheap
            </p>
            <div className="mt-8 flex flex-row justify-center space-x-5">
              <button className="border text-cta border-cta w-[13.5rem] py-2 rounded-md box-border" onClick={() => scroll()}>
                LEARN MORE
              </button>
              <button
                className="bg-cta w-[13.5rem] py-2 rounded-md box-border"
                onClick={() => navigate("/contact")}
              >
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-row justify-center space-x-[9rem] pt-16" ref={serviceSection}>
        {icons.map(({ image, text }, index) => (
          <div key={index} className="w-[10.5rem] flex flex-col items-center">
            <img
              src={image}
              className="text-primary w-[5.5rem] h-[5.5rem] object-contain"
              alt={text + " image"}
            />
            <p className="text-[#717171] mt-2">{text}</p>
          </div>
        ))}
      </div>
      <div className="w-[73.75rem] m-auto">
        <h2 className="text-[3rem] mt-32">Our Recent Work</h2>
        <img
          src={RecentWork}
          alt="Recent work image"
          className="w-[40rem] mt-12"
        />
      </div>
      <section className="bg-bg-dark flex flex-col items-center pt-24 pb-28">
        <h2 className="text-white">
          The Essential Role of a <span className="text-primary">Website</span>{" "}
          in Scaling Your Business
        </h2>
        <div className="inline-grid grid-cols-3 gap-2 mt-12">
          {cardIcons.map(({ image, text }, index) => (
            <HoverCards image={image} text={text} key={index} />
          ))}
        </div>
      </section>

      <GetInTouchSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Home;
