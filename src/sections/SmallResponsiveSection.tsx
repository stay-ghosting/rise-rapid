import { ReactNode } from 'react';

interface ResponsiveSectionProps {
  children?: ReactNode;
}

const SmallResponsiveSection: React.FC<ResponsiveSectionProps> = ({children}) => {
  return (
    <div className='2xl:mx-[26rem] xl:mx-[21rem] lg:mx-[21rem] sm:mx-[15rem] mx-[6rem]'>
      {children}
    </div>
  );
};

export default SmallResponsiveSection;