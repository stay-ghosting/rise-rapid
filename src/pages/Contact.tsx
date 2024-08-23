import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import FAQSection from "../sections/FAQSection";
import GetInTouchSection from "../sections/GetInTouchSection";

function Contact() {
  return (
    <>
      <Navbar />
      <div className='pt-[5rem]'>
        <GetInTouchSection />
      </div>
      <FAQSection />
      <Footer />
    </>
  );
}

export default Contact;
