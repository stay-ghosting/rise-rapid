import { ReactNode } from 'react';

interface ResponsiveSectionProps {
  children?: ReactNode;
}

const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({children}) => {
  return (
    <div className='max-w-[75rem] px-[4rem] mx-auto'>
      {children}
    </div>
  );
};

export default ResponsiveSection;