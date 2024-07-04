import React from 'react';

interface ParentedProps {
  className?: string;
  children: React.ReactNode;
}

const Parented: React.FC<ParentedProps> = ({ className, children }) => {
  const defaultClasses = 'bg-[#ffffff20] p-10 max-[900px]:p-8 rounded-3xl parentproject';
  const combinedClasses = `${defaultClasses} ${className || ''}`.trim();

  return (
    <article className={combinedClasses}>
      {children}
    </article>
  );
};


export default Parented;