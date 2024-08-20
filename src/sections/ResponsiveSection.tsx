import { ReactNode } from 'react';

interface ResponsiveSectionProps {
  children?: ReactNode;
}

const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({children}) => {
  return (
    <div className='mx-[20rem]'>
      {children}
    </div>
  );
};

export default ResponsiveSection;