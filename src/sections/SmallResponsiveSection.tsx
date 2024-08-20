import { ReactNode } from 'react';

interface ResponsiveSectionProps {
  children?: ReactNode;
}

const SmallResponsiveSection: React.FC<ResponsiveSectionProps> = ({children}) => {
  return (
    <div className='mx-[31rem]'>
      {children}
    </div>
  );
};

export default SmallResponsiveSection;