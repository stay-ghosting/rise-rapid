import { useState } from "react";
import icon_facebook from "../assets/icons/social/facebook.svg";
import icon_instagram from "../assets/icons/social/instagram.svg";
import icon_linkedin from "../assets/icons/social/linkedin.svg";
import icon_submitArrow from "../assets/icons/submit arrow.svg";
import InputField from "./InputField";

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

const Footer = () => {
  return (
    <div className='bg-[#151515] pb-6 flex flex-col items-center px-16'>
      <ul className='flex space-x-[5rem] text-white font-extralight mt-16'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/'>Steps</a>
        </li>
        <li>
          <a href='/'>Links</a>
        </li>
        <li>
          <a href='/terms'>Terms</a>
        </li>
        <li>
          <a href='/privacy'>Privacy</a>
        </li>
      </ul>
      <div className='relative mt-[11rem] mb-[6rem]  flex flex-col justify-center'>
        <div className='absolute -left-[27rem] -top-[7rem]'>
          <p className='text-white text-[4rem] font-bold leading-[6rem]'>
            NEWSLETTER <br />
            <span className='text-cta'>SIGNUP</span>
          </p>
        </div>
        <div className='w-[36rem] relative'>
          <form action=''>
          <input type="image" src={icon_submitArrow} className="cursor-pointer absolute right-4 top-4" />
            <InputField id='email' name='email' type='email' placeholder='Your email address' autoComplete='email' />
          </form>
        </div>
      </div>
      <div className='border-[#505050] border-b w-full'></div>
      <div className='flex justify-between items-center w-full mt-6'>
        <p className='font-thin text-[0.875rem] text-white'>Established in 2024. All rights reserved.</p>
        <div className='flex space-x-8'>
          {socialIcons.map(({ image, altText }, index) => (
            <img src={image} alt={altText} key={index} className='w-12 h-12 object-contain' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
