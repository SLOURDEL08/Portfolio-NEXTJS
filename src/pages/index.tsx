// pages/index.tsx
import Layout from '@/app/modules/layout/layout';
import Main from '@/app/modules/main/main';
import Image from "../../node_modules/next/image"
import { Typography } from '@/app/modules/typography/typography';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import AnimatedText from '@/app/modules/animatedText/animatedText';
import Slider from '@/app/modules/slider/slider';
import '@/app/globals.scss';
import Segmented from '@/app/modules/segmentedControl/segmented';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';




const HomePage: React.FC = () => {


  return (
    <Layout>
      <TransitionPage>

      <Main className='overflow-hidden    p-24 max-[900px]:p-14 max-[450px]:p-8'>
      <div className='image-container pt-2 w-[100%] max-[680px]:block flex gap-10 max-[900px]:pt-16'>
  <div className='flex flex-col  items-start gap-2 profilpiced w-[30%] h-[auto] max-[680px]:h-[150px]  max-[680px]:mb-8 rounded-WL max-[900px]:w-[40%]' >
    
  </div>
  <div className='flex flex-col items-start gap-4 w-[70%] max-[680px]:w-full h-[auto] max-[900px]:w-[60%]'>
    <div>
    <AnimatedText />
    <Typography theme='white' weight='bold' variant='h1' component='h2' fontFamily='ClashDisplay' className='bg-clip-text text-transparent bg-gradient-to-g from-white to-[#AAAAAA] text-left z-10 leading-tight max-[900px]:text-5xl max-[680px]:leading-tight max-[450px]:text-3xl'>
      Bienvenue sur mon Portfolio <b className='italic font-inter font-thin tracking-tighter	'>v2</b> &nbsp;2024
    </Typography>
    </div>
   
    
    <Typography theme="gray" weight="light" variant="lead" component="p" fontFamily="SanFrancisco" className="text-left strocked w-[100%] max-[680px]:text-lg max-[450px]:text-sm max-[680px]:leading-loose max-[450px]:leading-loose leading-loose">
      {"Je m'appelle Sébastien LOURDEL j'ai 25 ans, j'ai commencé le développement il y a 5 ans par HTML/CSS et Wordpress puis j'ai continué de me former pour développer mes compétences de développeur front-end. Je suis passionné depuis petit par l'informatique, j'ai beaucoup utilisé la suite Adobe ce qui me permet aujourd'hui d'être à l'aise avec les maquettes, l'intégration de création graphique et la notion d'UX/UI."}
    </Typography>
    <div className='flex gap-10 gap-y-4 justify-between flex-wrap'>
    <div className='flex gap-6 items-center max-[900px]:py-2'>
    <Link href='/projects' className="ctn-cstbtn flex justify-center items-center p-2 bg-[#ffffff10] hover:bg-[#ffffff00] rounded-full" >
  <Typography className="custom-button flex justify-center items-center p-3 px-4 border rounded-full max-[450px]:text-xs">
    Mon CV
    <Image src='/download.png' width="14" height="14" alt='de' />
    </Typography>
  </Link>

      
 
  <Link href='/projects' className="ctn-cstbtn flex justify-center items-center p-2 bg-[#ffffff10] hover:bg-[#ffffff00] rounded-full" >
  <Typography className="custom-button flex justify-center items-center p-3 px-4 border rounded-full max-[450px]:text-xs">
    Mes projets
    <Image src='/top-right-arrow.png' width="14" height="14" alt='de' />
    </Typography>
  </Link>

   
    </div>
    <div className='flex mt-2  gap-6 justify-start items-center'>
    <Typography theme="gray" weight="light" variant="body-xs" component="p" fontFamily="SanFrancisco" className="">
      {"MADE WITH"}
    </Typography>
    <Image src="/slider/nextjslong.png" width="200" height="200" alt='de' className=' bg-[#ffffff20] w-[auto] h-[28px] p-2 rounded-lg translating'/>
    <Image src="/slider/tailwindlong.png" width="200" height="200" alt='de' className=' bg-[#ffffff20] w-[auto] h-[28px] p-2 rounded-lg translating'/>
    <Image src="/slider/tipes.png" width="200" height="200" alt='de' className=' bg-[#ffffff20] w-[auto] h-[28px] p-2 rounded-lg translating'/>

    </div>
    </div>
  </div>
</div>



        
<div className='flex flex-col gap-10 mt-10 xl:flex-row flex-col-reverse'>

{/* Blocs de gauche */}
<div className='flex flex-col max-[1280px]:flex-row max-[1280px]:flex-wrap justify-between gap-10 w-[40%]  max-[1280px]:w-[100%]'>
  {/* Premier bloc */}
  <div className='w-full flex flex-col justify-between h-[100%] gap-10 max-[900px]:flex-col  max-[1280px]:flex-row'>
  <div className='flex justify-start h-[100%] bg-[#ffffff20] p-10 max-[900px]:p-8 rounded-3xl parentproject max-[1280px]:w-[50%] max-[900px]:w-full '>
  <div className='  w-[100%] flex flex-col justify-between gap-8'>
  <div className='flex items-center gap-5'>
  <Image src="/workin.png" width="40" height="20" alt='de' className='filesimg'/>

<Typography theme='white' weight='bold' variant='h5' component='span' fontFamily='SanFrancisco' className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left underlineded semib'>
      Dernières expériences
    </Typography>
    </div>
    <div className='exp-sec grid'>
      <div className='flex flex-nowrap justify-between items-center expLine hover:bg-[#ffffff10] max-[900px]:p-0 max-[900px]:py-4 p-2 px-4'>
      <div className='flex justify-between items-center flex-wrap gap-x-8'>
      <div className='grid grid-col '>
          <Typography theme='gray' weight='bold' variant='body-lg' component='span' fontFamily='ClashDisplay' className=''>
          Freelance
        </Typography>
        <Typography theme='gray' weight='extralight' variant='body-base' component='span' fontFamily='SanFrancisco' className='italic'>
          Développement / Marketing
        </Typography>
        </div>
        </div>
        <Typography theme='gray' weight='light' variant='body-base' component='span' fontFamily='ClashDisplay' className='text-right'>
          Depuis 2020
        </Typography> 
      </div>
      <hr className='border-[#ffffff20]'/>
      <div className='flex flex-nowrap justify-between items-center expLine hover:bg-[#ffffff10] max-[900px]:p-0 max-[900px]:py-4  p-2 px-4'>
      <div className='flex justify-between items-center flex-wrap gap-x-8'>
      <div className='grid grid-col '>
          <Typography theme='gray' weight='bold' variant='body-lg' component='span' fontFamily='ClashDisplay' className=''>
          ToastAgency
        </Typography>
        <Typography theme='gray' weight='extralight' variant='body-base' component='span' fontFamily='SanFrancisco' className='italic'>
          Alternance Développeur web
        </Typography>
        </div>
        </div>
        <Typography theme='gray' weight='light' variant='body-base' component='span' fontFamily='ClashDisplay' className='text-right'>
          2022/2023
        </Typography> 
      </div>
      <hr className='border-[#ffffff20]'/>
      <div className='flex flex-nowrap justify-between items-center expLine hover:bg-[#ffffff10] max-[900px]:p-0 max-[900px]:py-4  p-2 px-4'>
      <div className='flex justify-between items-center flex-wrap gap-x-8'>
          <div className='grid grid-col '>
            <Typography theme='gray' weight='bold' variant='body-lg' component='span' fontFamily='ClashDisplay' className=''>
          FL Express
        </Typography>
        <Typography theme='gray' weight='extralight' variant='body-base' component='span' fontFamily='SanFrancisco' className='italic'>
          Livreur messagerie
        </Typography>
        </div>
        </div>
        <Typography theme='gray' weight='light' variant='body-base' component='span' fontFamily='ClashDisplay' className='text-right'>
          2021/2022
        </Typography> 
      </div>

      
    </div>
   
  </div>
  </div>
  {/* Deuxième bloc */}
  <div className='flex justify-start h-[100%] bg-[#ffffff20] p-10 max-[900px]:p-8 rounded-3xl parentproject max-[1280px]:w-[50%] max-[900px]:w-full'>
  <div className='  w-[100%] flex flex-col justify-between gap-8'>
  <div className='flex items-center gap-5'>
  <Image src="/studen.png" width="40" height="20" alt='de' className='filesimg'/>

<Typography theme='white' weight='bold' variant='h5' component='span' fontFamily='SanFrancisco' className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left underlineded semib'>
      Formation
    </Typography>
    
    </div>
    <div className='exp-sec grid'>
      <div className='flex flex-nowrap justify-between items-center expLine hover:bg-[#ffffff10] p-2 px-4  max-[900px]:p-0 max-[900px]:py-4  '>
        <div className='flex justify-between items-center flex-wrap gap-x-8'>
        <div className='grid grid-col '>
          <Typography theme='gray' weight='bold' variant='body-lg' component='span' fontFamily='ClashDisplay' className=''>
          Freelance
        </Typography>
        <Typography theme='gray' weight='extralight' variant='body-base' component='span' fontFamily='SanFrancisco' className='italic'>
          Développement / Marketing
        </Typography>
        </div>
        </div>
        <Typography theme='gray' weight='light' variant='body-base' component='span' fontFamily='ClashDisplay' className='text-right'>
          Depuis 2020
        </Typography> 
      </div>
      <hr className='border-[#ffffff20]'/>
      <div className='flex flex-nowrap justify-between items-center expLine hover:bg-[#ffffff10] p-2 px-4  max-[900px]:p-0 max-[900px]:py-4  '>
      <div className='flex justify-between items-center flex-wrap gap-x-8'>
      <div className='grid grid-col '>
          <Typography theme='gray' weight='bold' variant='body-lg' component='span' fontFamily='ClashDisplay' className=''>
          ToastAgency
        </Typography>
        <Typography theme='gray' weight='extralight' variant='body-base' component='span' fontFamily='SanFrancisco' className='italic'>
          Alternance Développeur web
        </Typography>
        </div>
        </div>
        <Typography theme='gray' weight='light' variant='body-base' component='span' fontFamily='ClashDisplay' className='text-right'>
          2022/2023
        </Typography> 
      </div>
      <hr className='border-[#ffffff20]'/>
      <div className='flex flex-nowrap justify-between items-center expLine hover:bg-[#ffffff10] p-2 px-4  max-[900px]:p-0 max-[900px]:py-4  '>
      <div className='flex justify-between items-center flex-wrap gap-x-8'>
      <div className='grid grid-col '>
          <Typography theme='gray' weight='bold' variant='body-lg' component='span' fontFamily='ClashDisplay' className=''>
          FL Express
        </Typography>
        <Typography theme='gray' weight='extralight' variant='body-base' component='span' fontFamily='SanFrancisco' className='italic'>
          Livreur messagerie
        </Typography>
        </div>
        </div>
        <Typography theme='gray' weight='light' variant='body-base' component='span' fontFamily='ClashDisplay' className='text-right'>
          2021/2022
        </Typography> 
      </div>

      
    </div>
   
  </div>
  </div>

  </div>
<Link href="/" className='h-[20%] w-full'>
  <div className='flex justify-between items-center h-[100%] gradiended p-10 max-[900px]:p-8 rounded-3xl parentproject '>
  <Typography theme='white' weight='bold' variant='h4' component='span' fontFamily='ClashDisplay' className=''>
      Télécharger mon CV !
    </Typography>
    <Image src='/download.png' width="30" height="30" alt='de'/>
  </div>
  </Link>
</div>

<div className=' bg-[#ffffff20] flex flex-col gap-8  p-10 max-[900px]:p-8 rounded-3xl max-[900px]: w-[60%] sm:w-[100%] parentproject max-[1280px]:w-[100%]'>
  <div className='flex gap-5 items-center'>
  <Image src="/applelay.png" width="35" height="35" alt='de' className='filesimg'/>

<Typography theme='white' weight='bold' variant='h5' component='span' fontFamily='SanFrancisco' className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left underlineded semib'>
      Mes projets
    </Typography>
    </div>
    <Segmented
  numProjects={6}
  className='indexproppage'
  useFilters={false}
  numCols="grid-cols-2"
  responsiveBreakpoints={{ '1279': 6, '900': 4 }}
/>
  

  </div>
  

</div>
<div className='mt-10 bg-[#ffffff20] p-10  max-[900px]:p-8 rounded-3xl parentproject'>
<Slider/>

</div>
      </Main>

     
      </TransitionPage>

    </Layout>
  );
};

export default HomePage;
