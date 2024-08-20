import FAQDropdown from "../components/FAQDropdown";
import SmallResponsiveSection from "./SmallResponsiveSection";

interface FAQSectionProps {
  inView: boolean;
}

const questions = [
  [
    "How much does it cost?",
    "Our website prices vary from £1,000 to £10,000, based on the scope and complexity of your project."
  ],
  [
    "How do I get started?",
    "It's easy. Just click here and complete the Contact Form."
  ],
  [
    "What services do you offer?",
    "We specialise in Website Design, Graphic Design, SEO Optimisation, Social Media Integration, Email Marketing & Copywriting"
  ],
  [
    "Can I refund my deposit?",
    "The deposit becomes non-refundable once we begin work on your website."
  ],
  [
    "How long is the process?",
    "Timelines vary for each project. For a quick estimate, just reach out to us through the contact form!"
  ],
  [
    "Will my website be mobile-friendly?",
    "Yes, whether we're updating your existing site or building a new one, we'll ensure it’s designed to be mobile-friendly."
  ],
];

const FAQSection: React.FC<FAQSectionProps> = ({ inView }) => {
  return (
    <SmallResponsiveSection>
      <div className="mt-[16rem]">
      <h2
        className={`${ inView ? "fade-right" : "opacity-0"}`}
      >
        FAQ
      </h2>
      <ul className="mt-[2rem]">
        {
          questions.map(([title, answer], index) => (
            <li key={index} className="pb-[1rem]">
              <FAQDropdown title={title} answer={answer} inView={inView} index={index}/>
            </li>
          ))
        }
      </ul>
        </div>
    </SmallResponsiveSection>
  );
}

export default FAQSection;
