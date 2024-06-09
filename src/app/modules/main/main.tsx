// components/Layout.tsx
import React from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import '@/app/mediaqueries.css'




const Main: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return (
      <main className={`z-50  ${className || ''}`}>
        {children}
        
    </main>
     
  );
};

export default Main;
