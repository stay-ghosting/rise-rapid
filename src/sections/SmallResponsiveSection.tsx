import { ReactNode } from 'react';

interface ResponsiveSectionProps {
  children?: ReactNode;
}

const SmallResponsiveSection: React.FC<ResponsiveSectionProps> = ({children}) => {
  return (
    <div className='max-w-full sm:max-w-[55rem] px-[4rem] mx-auto'>
      {children}
    </div>
  );
};

export default SmallResponsiveSection;