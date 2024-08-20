import Navbar from "../components/Navbar";
import image_Hero from "../assets/images/hero image.png";

// import icon_arrow from "../assets/icons/arrow.svg";
import icon_arrow_dark from "../assets/icons/home/next section arrow/dark grey.svg";
import icon_arrow from "../assets/icons/home/next section arrow/light gray.svg";
import image_servicesColorSplash from "../assets/images/services color splash.png";

import Footer from "../components/Footer";
import FAQSection from "../sections/FAQSection";
import GetInTouchSection from "../sections/GetInTouchSection";

import { useState } from "react";
import CtaButton from "../components/CtaButton";
import ResponsiveSection from "../components/ResponsiveSection";
import useInView from "../hooks/useInView";

const steps = [
  ["Plan & Design", "Define clear goals and create strategies."],
  ["Execute & Improve", "Tailored iterative designs will adapt to your needs."],
  ["Grow & Succeed", "Expand your reach and achieve success"],
];

const services = [
  [
    "Bespoke Web Design",
    `At Rise Rapid, we craft tailored websites that reflect your unique brand identity and goals. Our team works closely with you to understand your vision, ensuring every detail aligns with your needs.<br /><br /> From concept to creation, we deliver custom designs that stand out and drive results.`,
  ],
  [
    "Bespoke Graphic Design",
    `At Rise Rapid, we specialise in custom graphic design that embodies your brand’s distinct personality and goals. We work closely with you to capture your vision and ensure every design element is tailored to your needs.<br /><br /> From initial ideas to final visuals, we deliver unique and impactful designs that enhance your brand and engage your audience.`,
  ],
  [
    "SEO Optimisation",
    `At Rise Rapid, we enhance your website’s visibility with tailored SEO strategies. Our team carefully analyses your site and implements effective optimisation techniques to improve search engine rankings.<br /><br /> From keyword research to on-page and off-page SEO, we focus on driving organic traffic and boosting your online presence.`,
  ],
  [
    "Social Media Integration",
    `At Rise Rapid, we seamlessly integrate your website with your social media platforms. Our approach ensures that your social media feeds, sharing buttons, and profiles are fully connected to your site.<br /><br /> This integration helps boost your online presence, engage your audience, and create a cohesive brand experience across all channels.`,
  ],
  [
    "Email Marketing",
    `At Rise Rapid, we create and manage effective email marketing campaigns that connect with your audience. From designing engaging templates to crafting compelling content, we ensure your messages resonate and drive action.<br /><br />Our approach includes list management, targeted campaigns, and performance tracking to maximise your email marketing impact and achieve your business goals.`,
  ],
  [
    "Copywriting",
    `At Rise Rapid, we craft compelling and clear copy that communicates your brand’s message effectively. Our skilled team creates engaging content for websites, blogs, and marketing materials, tailored to resonate with your target audience.<br /><br /> From persuasive product descriptions to informative articles, we ensure every word aligns with your brand’s voice and drives meaningful results.`,
  ],
];

const Home = () => {
  const [serviceIndex, setServiceIndex] = useState(0);

  const [servicesRef, isServicesInView] = useInView<HTMLDivElement>(220);
  const [stepsRef, isStepsInView] = useInView<HTMLHeadingElement>(0);
  const [FAQRef, isFAQInView] = useInView<HTMLDivElement>(300);
  const [getInTouchRef, isGetInTouchView] = useInView<HTMLDivElement>(200);

  const [isScrollButtonHovered, setIsScrollButtonHovered] = useState(false);

  const scroll = () => {
    if (servicesRef.current) {
      const offset = -4 * 16;
      const targetPosition = servicesRef.current.getBoundingClientRect().top + window.pageYOffset + offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar />
      {/* hero */}
      <ResponsiveSection>
        <div className='flex flex-row mt-[12rem]'>
          <div>
            <h1 className='mb-[4rem]'>
              Website Design <br />
              To Make <span className='text-cta'>Your Brand</span> <br />
              Rise Rapid
            </h1>
            <CtaButton />
          </div>
          <div className='w-[27.178rem]'>
            <img className='scale-[200%] translate-x-[9rem] translate-y-[3rem]' src={image_Hero} alt='hero image' />
          </div>
        </div>
        <div className='flex flex-row justify-center mt-[5rem] mb-[12rem] ' 
        onClick={scroll}>
          <div
            className='z-10'
            onMouseEnter={() => setIsScrollButtonHovered(true)}
            onMouseLeave={() => setIsScrollButtonHovered(false)}
          >
            <img className="" src={isScrollButtonHovered ? icon_arrow : icon_arrow_dark} />
          </div>
        </div>
      </ResponsiveSection>
      {/* sevices */}
      <ResponsiveSection>
        <h2 ref={servicesRef} className={`${isServicesInView ? "fade-in" : "fade-in-hidden"}`}>
          <span className='text-cta'>Services</span> we offer
        </h2>
        <div className={`flex flex-row mt-[4rem]`}>
          <ul>
            {services.map(([title, _], index) => (
              <li className={`${isServicesInView ? "fade-in" : "fade-in-hidden"}`} style={{ animationDelay: `400ms` }}>
                <button
                  className={` h-[4rem] w-[23rem] rounded-l-lg hover:bg-card  
                    ${index == serviceIndex && "tab-gradient animated-background"}`}
                  onClick={() => setServiceIndex(index)}
                >
                  <p
                    className={`${isServicesInView ? "fade-right" : "fade-in-hidden"} text-white font-semibold text-left px-[1rem]`}
                    style={{ animationDelay: `${250 * index + 400}ms` }}
                  >
                    {title}
                  </p>
                </button>
              </li>
            ))}
          </ul>
          <div
            className={`grow bg-card h-[36rem] rounded-r-lg rounded-bl-lg pt-[2rem] px-[4rem] relative 
              ${serviceIndex == 0 ? "" : "rounded-tl-lg"}
              ${isServicesInView ? "fade-in" : "fade-in-hidden"}`}
            style={{ animationDelay: "400ms" }}
          >
            <div className='absolute bottom-8 right-8'>
              <CtaButton />
            </div>
            <img className='absolute bottom-0 right-0 rounded-lg -z-10' src={image_servicesColorSplash} />
            <h3>{services[serviceIndex][0]}</h3>
            <br />
            <p className='' dangerouslySetInnerHTML={{ __html: services[serviceIndex][1] }}></p>
          </div>
        </div>
      </ResponsiveSection>
      {/* steps */}
      <div className='bg-[#45086F] py-[7rem] mt-[10rem]'>
        <ResponsiveSection>
          <h2 ref={stepsRef} className={`text-center mb-[4rem] ${isStepsInView ? "fade-in" : "fade-in-hidden"}`}>
            Concept to Creation in 3 Steps...
          </h2>
          <ul className='flex flex-row justify-between'>
            {steps.map(([title, description], index) => (
              <>
                <div key={index * 2} className={`w-[19rem] ${isStepsInView ? "fade-in" : "fade-in-hidden"}`} style={{ animationDelay: `${(index + 1) * 0.5}s` }}>
                  <p className='text-center text-[4rem] text-white font-bold'>{index + 1}.</p>
                  <h3 className='text-center'>{title}</h3>
                  <p className='text-center'>{description}</p>
                </div>
                {index != 2 && (
                  <div
                    key={index * 2 + 1}
                    className={`flex items-center ${isStepsInView ? "fade-in" : "fade-in-hidden"}`}
                    style={{ animationDelay: `${(index + 1) * 0.5 + 0.25}s` }}
                  >
                    <p className='text-center text-[4rem] pt-[2rem] text-white font-semibold'>{">"}</p>
                  </div>
                )}
              </>
            ))}
          </ul>
        </ResponsiveSection>
      </div>
      {/* faq */}
      <div className={`mb-[20rem]`} ref={FAQRef}>
        <FAQSection inView={isFAQInView} />
      </div>
      {/* get in touch */}
      <div className={`mb-[15rem]`} ref={getInTouchRef}>
        <GetInTouchSection inView={isGetInTouchView} />
      </div>
      <br /> <br />
      <Footer />
    </>
  );
};

export default Home;
