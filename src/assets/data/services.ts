//  home page, contact, get in touch section
interface Service {
  id: Id;
  title: string;
  description: string;
  shortDescription: string;
}

export type Id = "bespokeWebDesign" | "bespokeGraphicDesign" | "seoOptimisation" | "socialMediaIntegration" | "emailMarketing" | "copywriting" ;

export const services: Service[] = [
  {
    id: "bespokeWebDesign",
    title: "Bespoke Web Design",
    description: `At Rise Rapid, we craft tailored websites that reflect your unique brand identity and goals. Our team works closely with you to understand your vision, ensuring every detail aligns with your needs.<br /><br /> From concept to creation, we deliver custom designs that stand out and drive results.`,
    shortDescription: `Custom designs that stand out and drive results.`,
  },
  {
    id: "bespokeGraphicDesign",
    title: "Bespoke Graphic Design",
    description: `At Rise Rapid, we specialise in custom graphic design that embodies your brand’s distinct personality and goals. We work closely with you to capture your vision and ensure every design element is tailored to your needs.<br /><br /> From initial ideas to final visuals, we deliver unique and impactful designs that enhance your brand and engage your audience.`,
    shortDescription: `unique and impactful designs that enhance your brand.`,
  },
  {
    id: "seoOptimisation",
    title: "SEO Optimisation",
    description: `At Rise Rapid, we enhance your website’s visibility with tailored SEO strategies. Our team carefully analyses your site and implements effective optimisation techniques to improve search engine rankings.<br /><br /> From keyword research to on-page and off-page SEO, we focus on driving organic traffic and boosting your online presence.`,
    shortDescription: `Drive organic traffic and boost your online presence.`,
  },
  {
    id: "socialMediaIntegration",
    title: "Social Media Integration",
    description: `At Rise Rapid, we seamlessly integrate your website with your social media platforms. Our approach ensures that your social media feeds, sharing buttons, and profiles are fully connected to your site.<br /><br /> This integration helps boost your online presence, engage your audience, and create a cohesive brand experience across all channels.`,
    shortDescription: `Boost your online presence and engage your audience.`,
  },
  {
    id: "emailMarketing",
    title: "Email Marketing",
    description: `At Rise Rapid, we create and manage effective email marketing campaigns that connect with your audience. From designing engaging templates to crafting compelling content, we ensure your messages resonate and drive action.<br /><br />Our approach includes list management, targeted campaigns, and performance tracking to maximise your email marketing impact and achieve your business goals.`,
    shortDescription: `Maximise your reach with email marketing.`,
  },
  {
    id: "copywriting",
    title: "Copywriting",
    description: `At Rise Rapid, we craft compelling and clear copy that communicates your brand’s message effectively. Our skilled team creates engaging content for websites, blogs, and marketing materials, tailored to resonate with your target audience.<br /><br /> From persuasive product descriptions to informative articles, we ensure every word aligns with your brand’s voice and drives meaningful results.`,
    shortDescription: `Give your brand a unique personality.`,
  },
];