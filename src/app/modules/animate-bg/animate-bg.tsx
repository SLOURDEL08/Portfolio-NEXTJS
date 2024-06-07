import React, { ReactNode } from 'react';

interface AnimatedBackgroundProps {
  children: ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children }) => {
  return (
    <div className="overflow-hidden bg-black z-10">
         
  <main className="relative mx-auto flex w-full flex-col justify-center px-4">
    
    <div className="absolute left-0 right-0 top-0">
   
      <div className="absolute left-[200px] top-0 overflow-visible opacity-30">
        <div className="circle-obj absolute h-[900px] w-[700px] rounded-[40rem] mix-blend-multiply"></div>
      </div>
      
      <div className="absolute left-[350px] top-28 overflow-visible opacity-30">
        <div className="circle-obj2 absolute h-[600px] w-[600px] rounded-[40rem] mix-blend-multiply"></div>
      </div>
      <div className="absolute left-[900px] top-32 overflow-visible opacity-30">
        <div className="circle-obj3 absolute h-[600px] w-[600px] rounded-[40rem] mix-blend-multiply"></div>
      </div>
    </div>
    {children}
  </main>
 
</div>
  );
};

export default AnimatedBackground;
