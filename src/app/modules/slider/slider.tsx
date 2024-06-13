import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const Slider = ({ className = '' }) => {
  return (
    <div className={clsx("custom-slider", className)}>
      <div className="custom-slide-track grayz ">
        <div className="custom-slide">
          <Image src="/slider/html.png" width="100" height="100" alt="" />
        </div>
        <div className="custom-slide">
          <Image src="/slider/css.png" width="100" height="100" alt="" />
        </div>
        <div className="custom-slide">
          <Image src="/slider/sass.png" width="100" height="100" alt="" />
        </div>
        <div className="custom-slide">
          <Image src="/slider/tailwind.png" width="100" height="100" alt="" />
        </div>
        <div className="custom-slide">
          <Image src="/slider/bootstrap.png" width="100" height="100" alt="" />
        </div>
        <div className="custom-slide">
          <Image src="/slider/js.png" alt="" width="100" height="100" />
        </div>
        <div className="custom-slide">
          <Image src="/slider/php.png" alt="" width="100" height="100" />
        </div>
        <div className="custom-slide">
          <Image src="/slider/react.webp" alt="" width="100" height="100" />
        </div>
        <div className="custom-slide">
          <Image src="/slider/nodejs.png" alt="" width="100" height="100" />
        </div>
        <div className="custom-slide">
          <Image src="/slider/ts.png" alt="" width="100" height="100" />
        </div>
        <div className="custom-slide">
          <Image src="/slider/mongo.png" alt="" width="100" height="100" />
        </div>
        <div className="custom-slide">
          <Image src="/slider/sql.png" alt="" width="100" height="100" />
        </div>
        <div className="custom-slide">
          <Image src="/slider/firebase.png" alt="" width="100" height="100" />
        </div>
        <div className="custom-slide">
          <Image src="/slider/fig.png" alt="" width="100" height="100" />
        </div>
        <div className="custom-slide">
          <Image src="/slider/photoshop.png" alt="" width="100" height="100" />
        </div>
        
        
       
      </div>
    </div>
  );
};

export default Slider;
