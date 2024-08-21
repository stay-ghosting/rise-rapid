import { ReactNode } from 'react';

interface ResponsiveSectionProps {
  children?: ReactNode;
}

const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({children}) => {
  return (
    <div className='2xl:mx-[15rem] xl:mx-[13rem] lg:mx-[7rem] sm:mx-[5rem] mx-[6rem]'>
      {children}
    </div>
  );
};

export default ResponsiveSection;