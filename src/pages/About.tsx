import Footer from "../sections/Footer";
import LargeLogo from "../components/LargeLogo";
import Navbar from "../sections/Navbar";
import GetInTouchSection from "../sections/GetInTouchSection";

import image_meetUs from "../assets/images/about us/meet us.png";
import image_ourStory from "../assets/images/about us/our story.png";
import image_ourMission from "../assets/images/about us/our mission.png";
import FAQSection from "../sections/FAQSection";
import ResponsiveSection from "../sections/ResponsiveSection";

const sections = [
  {
    title: "Meet Us",
    body: "Welcome to Rise Rapid – your trusted partner for bespoke website solutions. We are a dedicated team of digital experts who are passionate about transforming your online presence into a powerful asset that drives your success.",
    image: image_meetUs,
  },
  {
    title: "Our Story",
    body: "Founded in 2024, Rise Rapid was born from a simple idea: to make high-quality website development accessible to businesses of all sizes. Over the years, we have grown from a small start-up into a reputable firm known for our commitment to excellence, innovation, and customer satisfaction. Our journey has been fuelled by a love for technology and a desire to help businesses thrive in the digital age.",
    image: image_ourStory,
  },
  {
    title: "Our Mission",
    body: "Our mission is simple: to empower businesses by providing them with the tools they need to succeed online. We believe that a great website is the cornerstone of a successful digital strategy, and we are dedicated to delivering solutions that not only meet but exceed our clients’ expectations.",
    image: image_ourMission,
  },
];

function About() {
  return (
    <>
      <Navbar />
      <LargeLogo />
      <ResponsiveSection>
        <h1 className='text-center mt-[4rem]'>About Us</h1>
        <div className='pb-[3rem]'>
          {sections.map(({ title, body, image }, index) => (
            <div key={index} className='my-[5rem] bg-card  p-[4rem] rounded-md flex flex-col-reverse md:flex-row flex-wrap items-center justify-center'>
              <div className=' grow shrink basis-0 '>
                <h2 className=''>{title}</h2>
                <p>{body}</p>
              </div>
              <div className='basis-[20rem] min-w-[9rem] h-auto grow md:max-w-[28rem]'>
                <img src={image} alt={title + " image"} className='object-cover w-full h-auto' />
              </div>
            </div>
          ))}
        </div>
      </ResponsiveSection>
      <div className='mb-[10rem]'>
        <FAQSection />
      </div>
      <div className='mb-[10rem]'>
        <GetInTouchSection />
      </div>
      <Footer />
    </>
  );
}

export default About;
