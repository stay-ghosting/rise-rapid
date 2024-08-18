import image_faq from "../assets/images/faq.jpeg";
import FAQDropdown from "../components/FAQDropdown";

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

function FAQSection() {
    return (
        <section className="flex justify-center">
            <img src={image_faq} alt="faq image" className="w-[40rem]" />
            <div className="mt-16">
                <h2 className="text-[2rem]">Frequently Asked Questions</h2>
                {faq_questions.map(({ title }, index) => (
                    <div
                        className="w-[35rem] p-4 border-b border-[#D7DEF0]"
                        key={index}
                    >
                        <FAQDropdown title={title} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQSection;
