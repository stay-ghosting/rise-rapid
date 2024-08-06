import Navbar from "../components/Navbar";
import Banner from "../assets/images/hero image.jpeg";

import RecentWork from "../assets/images/our resent work.png";
import HoverCards from "../components/HoverCards";

import image_faq from "../assets/images/faq.jpeg";

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
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

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

const faq_questions = [
    {
        title: "How much does it cost?",
    },
    {
        title: "What is our refund policy?",
    },
    {
        title: "How do I get started?",
    },
    {
        title: "How long is the process?",
    },
    {
        title: "What services do we offer?",
    },
    {
        title: "What types of websites do we create?",
    },
    {
        title: "Will my website be mobile-friendly?",
    },
];

const Home = () => {
    return (
        <>
            <Navbar />
            <section className="relative h-[37rem] bg-blue-500 flex items-center justify-center text-center text-white">
                <div className="absolute inset-0">
                    <img
                        src={Banner}
                        alt="Background Image"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 w-[60%] px-6 py-12 md:px-12 md:py-24 flex items-center justify-center">
                    <div>
                        <h1 className="font-[700] text-[2.5rem]">
                            Website <span className="text-primary">Design</span>{" "}
                            Specialists
                        </h1>
                        <p className="mt-4 text-white">
                            Affordable websites that dont look cheap
                        </p>
                        <div className="mt-8 flex flex-row justify-center space-x-5">
                            <button className="border text-cta border-cta w-[13.5rem] py-2 rounded-md box-border ">
                                LEARN MORE
                            </button>
                            <button className="bg-cta w-[13.5rem] py-2 rounded-md box-border">
                                CONTACT US
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex flex-row justify-center space-x-[9rem] mt-16">
                {icons.map(({ image, text }, index) => (
                    <div
                        key={index}
                        className="w-[10.5rem] flex flex-col items-center"
                    >
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
                    The Essential Role of a{" "}
                    <span className="text-primary">Website</span> in Scaling
                    Your Business
                </h2>
                <div className="inline-grid grid-cols-3 gap-2 mt-12">
                    {cardIcons.map(({ image, text }, index) => (
                        <HoverCards image={image} text={text} key={index} />
                    ))}
                </div>
            </section>
            <section className="bg-bg-dark pt-24 pb-24 flex justify-center space-x-4">
                <div className="border  w-[39rem] border-p bg-bg-card pt-12 px-8 pb-28 m">
                    <h2 className="text-white">
                        Getting in touch is{" "}
                        <span className="text-primary">easy!</span>
                    </h2>
                    <p className="text-white mt-4">
                        Send us a message and a member of our team will be in
                        touch with you within 24h
                    </p>
                    <p className="mt-8 text-white">
                        Contact@RiseRapidWebsiteDesign.com
                    </p>
                    <div className="border-b border-primary mt-1"></div>
                    <div className="flex space-x-6 mt-8">
                        {socialIcons.map(({ image, altText }, index) => (
                            <img
                                src={image}
                                alt={altText}
                                className="w-10 h-10 object-contain"
                                key={index}
                            />
                        ))}
                    </div>
                </div>

                <form action="#" method="post" className="">
                    <div className="flex flex-col justify-between items-center h-full w-[39rem]">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                            className="bg-bg-dark-form border border-p focus:border-white text-white outline-none py-2 pl-4 w-full"
                        />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="bg-bg-dark-form border border-p focus:border-white text-white outline-none py-2 pl-4 w-full"
                        />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="123-456-7890"
                            required
                            className="bg-bg-dark-form border border-p focus:border-white text-white outline-none py-2 pl-4 w-full"
                        />
                        <textarea
                            id="description"
                            name="description"
                            rows={4}
                            placeholder="Project description"
                            required
                            className="resize-none bg-bg-dark-form border border-p focus:border-white text-white outline-none py-2 pl-4 w-full"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-48 h-10 bg-cta text-white"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </section>
            <section className="flex justify-center">
                <img src={image_faq} alt="faq image" className="w-[40rem]" />
                <div className="mt-16">
                    <h2 className="text-[2rem]">Frequently Asked Questions</h2>
                    {faq_questions.map(({ title }, index) => (
                        <div className="w-[35rem] p-4 border-b border-[#D7DEF0]" key={index}>
                            <FAQ title={title} />
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
