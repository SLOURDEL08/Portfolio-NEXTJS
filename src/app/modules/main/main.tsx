// components/Layout.tsx
import React from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import '@/app/globals.css'
import '@/app/mediaqueries.css'
import '@/app/globals.scss'




const Main: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return (
      <main className={`z-50 ${className || ''}`}>
        {children}
        
    </main>
     
  );
};

export default Main;
