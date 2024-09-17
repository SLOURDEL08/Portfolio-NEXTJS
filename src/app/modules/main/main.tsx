import React from 'react';
import '@/app/mediaqueries.css';
import '@/app/scrollbar.css'; // Importez le nouveau fichier CSS

const Main: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <main className={`z-50 custom-scrollbar ${className || ''}`}>{children}</main>;
};

export default Main;
