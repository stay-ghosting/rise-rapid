import Footer from "../components/Footer";
import LargeLogo from "../components/LargeLogo";
import Navbar from "../components/Navbar";

function Privacy() {
  return (
    <>
      <Navbar />
      <LargeLogo />
      <h1 className="text-center">Privacy</h1>
      <div className="max-w-[60rem] mx-auto mb-60">
        <h2>Introduction</h2>
        <p>
          At Rise Rapid, we deeply value your privacy and are dedicated to
          protecting the personal information you share with us. This Privacy
          Policy outlines what data we collect, how we use it, and the steps we
          take to safeguard it. Our goal is to ensure that you feel confident
          and secure when using our website and services. We are committed to
          maintaining your trust and protecting your privacy.
        </p>
        <br />
        <br />
        <h2>Personal Data</h2>
        <p>
          When you visit the Site, we automatically collect certain information
          about your device, including information about your web browser, IP
          address, time zone, and some of the cookies that are installed on your
          device. Additionally, as you browse the Site, we collect information
          about the individual web pages or products that you view, what and
          which websites or search terms referred you to the Site, and
          information about how you interact with the Site. We refer to this
          automatically-collected information as "Device Information". <br />
          <br />
          We collect Device Information using the following technologies:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              "Cookies" are data files that are placed on your device or
              computer and often include an anonymous unique identifier. For
              more information about cookies, and how to disable cookies, visit
              allaboutcookies.org.
            </p>
          </li>
          <li>
            <p>
              "Log files" track actions occurring on the Site, and collect data
              including your IP address, browser type, Internet service
              provider, referring/exit pages, and date/time stamps.
            </p>
          </li>
          <li>
            <p>
              "Web beacons", "tags", and "pixels" are electronic files used to
              record information about how you browse the Site.
            </p>
          </li>
        </ul>
        <br />
        <br />
        <h2>How We Use Your Information</h2>
        <p>
          The information we collect is used to provide and manage our services
          effectively. This includes processing transactions, offering customer
          support, and sending you updates about our services. We also analyze
          usage data to improve our website and tailor our services to better
          meet your needs. Additionally, we use your information to communicate
          with you about updates, promotions, and relevant information. We
          ensure that all usage of your data is in compliance with legal
          requirements and aimed at protecting our rights and interests.
        </p>
        <br />
        <br />
        <h2>Sharing Your Information</h2>
        <p>
          We are committed to protecting your personal information and do not
          sell or trade it to outside parties. However, we may share your
          information with trusted service providers who assist us in operating
          our website and delivering our services. These partners are required
          to keep your information confidential. Additionally, we may disclose
          your information if required by law or in response to valid requests
          by public authorities. We ensure that any sharing of information is
          done with your privacy and security in mind.
        </p>
        <br />
        <br />
        <h2>Data Security</h2>
        <p>
          Protecting your personal information is a priority for us. We
          implement a variety of security measures, including encryption, secure
          servers, and access controls, to safeguard your data. While we strive
          to protect your information, please be aware that no method of
          transmission over the internet or electronic storage is completely
          secure. We continuously work to enhance our security practices to
          protect your data from unauthorized access and ensure its
          confidentiality and integrity.
        </p>
        <br />
        <br />
        <h2>Your Rights</h2>
        <p>
          You have several rights regarding your personal information. You can
          access and update your personal data at any time by contacting us. If
          you wish to delete your data, you can request this, and we will comply
          unless we are required to keep certain information for legal purposes.
          Additionally, you can opt-out of receiving marketing communications
          from us by following the unsubscribe instructions provided in our
          emails or by contacting us directly. We are here to help you exercise
          your rights and address any concerns you may have.
        </p>
        <br />
        <br />
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. When we make changes, we will post the updated policy on this
          page and update the revision date. We encourage you to review this
          policy periodically to stay informed about how we are protecting your
          information. Your continued use of our services after any changes to
          this policy will constitute your acknowledgment and acceptance of
          those changes.
        </p>
        <br />
        <br />
        <h2>Contact us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy, please do not hesitate to contact us. We are here to
          help and ensure that your privacy is protected. You can reach us at:
          <br />
          <br />
          Help@RiseRapidWebsiteDesign.com
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Privacy;
