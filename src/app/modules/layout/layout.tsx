// components/Layout.tsx
import React from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import '@/app/mediaqueries.css'




const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
    <div className='background-topgradient pt-10'>
      <Header/>
      
      <main className=''>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
