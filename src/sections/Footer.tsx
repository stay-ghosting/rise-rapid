import { useState } from "react";
import icon_facebook from "../assets/icons/social/facebook.svg";
import icon_instagram from "../assets/icons/social/instagram.svg";
import icon_linkedin from "../assets/icons/social/linkedin.svg";
import icon_submitArrow from "../assets/icons/submit arrow.svg";
import InputField from "../components/InputField";
import CustomNavLink from "../components/CustomNavLink";

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
  const [email, setEmail] = useState("");

  return (
    <div className='bg-[#151515] pb-6 flex flex-col items-center '>
      <div className='hidden sm:block px-16'>
        <ul className='flex space-x-[5rem] text-white font-extralight mt-16'>
          <CustomNavLink link='/' text='Home' key="1"/>
          <CustomNavLink link='/contact' text='Contact' key="2"/>
          <CustomNavLink link='/about' text='About' key="3"/>
          <CustomNavLink link='/blog' text='Blog' key="4"/>
          <CustomNavLink link='/terms' text='Terms' key="5"/>
          <CustomNavLink link='/privacy' text='Privacy' key="6"/>
        </ul>
        <div className='relative md:mt-[11rem] mb-[6rem]  flex flex-col justify-center items-center'>
          <div className=' md:absolute -left-[9rem] -top-[7rem]'>
            <p className='mt-[3rem] mb-[2rem] md:my-0 text-white text-[4rem] font-bold leading-[6rem]'>
              NEWSLETTER
              <span className='text-cta md:block'> SIGNUP</span>
            </p>
          </div>
          <div className='w-[36rem]  relative'>
            <form action=''>
              <input type='image' src={icon_submitArrow} className='cursor-pointer p-[1rem] w-[4.5rem] absolute right-2 top-2' />
              <InputField
                fieldValue={email}
                setFieldValue={(name, value) => setEmail(value)}
                id='email'
                name='email'
                type='email'
                placeholder='Your email address'
                autoComplete='email'
              />
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
      {/* small version */}
      <div className='block sm:hidden w-full'>
        <p className="text-center">
        <span className='text-cta'>Subscribe</span> to our newsletter
        </p>
        <div className='bg-car py-[4rem] px-[1rem] relative'>
          <form action=''>
            <input type='image' src={icon_submitArrow} className='cursor-pointer p-[1rem] w-[7rem] absolute right-2 top-[4rem]' />
            <InputField
              fieldValue={email}
              setFieldValue={(name, value) => setEmail(value)}
              id='email'
              name='email'
              type='email'
              placeholder='Your email address'
              autoComplete='email'
            />
          </form>
        </div>
        <ul className='flex flex-col items-center space-y-[1rem] text-white font-extralight mt-16'>
          <CustomNavLink link='/' text='Home' key="1"/>
          <CustomNavLink link='/contact' text='Contact' key="2"/>
          <CustomNavLink link='/about' text='About' key="3"/>
          <CustomNavLink link='/blog' text='Blog' key="4"/>
          <CustomNavLink link='/terms' text='Terms' key="5"/>
          <CustomNavLink link='/privacy' text='Privacy' key="6"/>
        </ul>

        <div className='border-[#505050] border-b w-full'></div>
          <div className='flex justify-center py-[1rem] space-x-8'>
            {socialIcons.map(({ image, altText }, index) => (
              <img src={image} alt={altText} key={index} className='w-12 h-12 object-contain' />
            ))}
          </div>
          <p className='font-thin text-[0.875rem] text-center text-white'>Established in 2024. All rights reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
