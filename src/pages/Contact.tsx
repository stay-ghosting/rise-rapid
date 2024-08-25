import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import FAQSection from "../sections/FAQSection";
import GetInTouchSection from "../sections/GetInTouchSection";
import { useParams } from "react-router-dom";
import ResponsiveSection from "../sections/ResponsiveSection";

import { services } from "../assets/data/services";

function Contact() {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = services.find(({ id }) => id === serviceId);


  return (
    <>
      <Navbar />
      <div className='pt-[5rem]'>
        {service && (
          <ResponsiveSection>
            <div className='pb-[5rem]'>
              <h2> {service.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: service.description as string }} />
            </div>
          </ResponsiveSection>
        )}
        <GetInTouchSection serviceId={serviceId} />
      </div>
      <div className='mb-[10rem]'>
        <FAQSection />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
