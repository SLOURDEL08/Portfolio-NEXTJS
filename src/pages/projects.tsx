import React, { useState } from 'react';
import Layout from '@/app/modules/layout/layout';
import Image from "next/image";
import { Typography } from '@/app/modules/typography/typography';
import projectsData from '@/app/data/project.json';
import Main from '@/app/modules/main/main';
import Segmented from '@/app/modules/segmentedControl/segmented';
import '@/app/globals.scss';
import '@/app/modules/types/types';
import Link from 'next/link';
import Slider from '@/app/modules/slider/slider';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';

const Projects: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextProject = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
      setIsTransitioning(false);
    }, 300); // La durée de la transition
  };

  const prevProject = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
      setIsTransitioning(false);
    }, 300); // La durée de la transition
  };

  const project = projectsData[currentProjectIndex];

  return (
    <Layout>
            <TransitionPage>

      <Main className='overflow-hidden py-24 p-24 max-[900px]:p-8 '>
        <div className='grid grid-cols-1 pt-2 gap-10 py-10 max-[900px]:gap-6 max-[900px]:pt-16 max-[900px]:pb-8'>
          <div className='flex gap-8 items-center justify-center max-[900px]:justify-start'>
          <Image src="/applelay.png" width="50" height="50" alt='de' className='filesimg bg-[#ffffffcc] p-2 rounded-xl'/>
            <Typography theme='white' weight='bold' variant='h3' component='h1' fontFamily='ClashDisplay' className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-[900px]:text-2xl semib'>
              Mes projets
            </Typography>
           
          </div>
          <Typography theme="gray" weight="light" variant="lead" component="p" fontFamily="SanFrancisco" className="text-center strocked  max-[680px]:text-lg max-[450px]:text-lg max-[680px]:leading-loose max-[450px]:leading-loose leading-loose w-[80%] m-auto">
      {"Retrouvrez tous mes projets de développement web, de graphisme, back-end/front-end et plus...."}
    </Typography>
        
        </div>
        <div className=' rounded-3xl mb-10'>
          <Slider className='projage'/>
        </div>
        <div className='flex gap-10 mb-10 parented max-[900px]:block max-[900px]:bg-[#ffffff20]  max-[900px]:rounded-3xl '>
          <div className='w-2/5 max-[900px]:bg-[#ffffff00] bg-[#ffffff20] max-[900px]:p-8  parentprojecting p-10 max-[900px]:pb-5 rounded-3xl relative max-[900px]:mb-0 max-[900px]:w-[100%] max-[900px]:h-[300px]'>
            <div
              key={project.id}
              className={`project-itemm projectadow ${!isTransitioning ? 'active' : ''}`}
            >
              <Image src={project.image} width="500" height="500" alt={project.title} className='h-[100%] w-[100%] rounded-3xl object-cover object-left grayzc' />
              <div className={`overlay-projectitem`}>
                <div className='overlay-projectitem-content'>
                 
                </div>
              </div>
            </div>
          </div>
          <div className={`w-3/5 bg-[#ffffff20] max-[900px]:bg-[#ffffff00] max-[900px]:pt-5 parentprojected p-10 max-[900px]:p-8 carouzel relative rounded-3xl max-[900px]:w-[100%]`}>
            <div className={`flex flex-col gap-8 project-details ${!isTransitioning ? 'active' : ''}`}>
              <div className='flex items-center gap-4'>
              <Image src={project.symbol} width="500" height="500" alt={project.title} className='h-[40px] w-[40px] rounded-xl' />
              <Typography theme='white' weight='medium' variant='h5' component='span' fontFamily='ClashDisplay' className=''>
                {project.title}
              </Typography>
              </div>
              
              <div className='flex justify-start items-center flex-wrap gap-x-6  capitalize gap-y-5 tranlating'>
                {project.tags.slice(0, 4).map((tag, index) => (
                  <Typography
                    key={index}
                    theme='graylight'
                    weight='extralight'
                    variant='body-sm'
                    component='span'
                    fontFamily='SanFrancisco'
                    className='p-2 px-4 bg-[#00000030] rounded-xl '
                  >
                    <b className='fonted'>#</b>{tag}
                  </Typography>
                ))}
              </div>
              <Typography theme="white" weight="light" variant="body-base" component="p" fontFamily="Inter" className="leading-8 strocked">
                {project.description}
              </Typography>
              <div className='flex gap-4 absolute top-10 right-10'>
                <button className='custom-buttonx flex gap-1 justify-center items-center p-3 px-4 border rounded-full' onClick={prevProject}>
                  <Image src="/larrow.png" width="200" height="200" alt='' className='grayscale-2 w-[15px] h-[15px] max-[900px]:w-[10px] max-[900px]:h-[10px]' />
                 
                </button>
                <button className='custom-buttonx flex gap-1 justify-center items-center p-3 px-4 border rounded-full' onClick={nextProject}>
               
                <Image src="/rarrow.png" width="200" height="200" alt='' className='grayscale-2 w-[15px] h-[15px] max-[900px]:w-[10px] max-[900px]:h-[10px]' />
                  
                </button>
                
              </div>
              <div className='flex'>
              <Link className='custom-button btt gradient-text flex gap-2 justify-start items-center border rounded-full' href={`/project/${project.id}`}>
              
             
              <Typography theme="white" weight="medium" variant="body-lg" component="p" fontFamily="ClashDisplay" className="text-left strocked w-[100%] tracking-widest leading-relaxed">
      {"EN SAVOIR PLUS"}
    </Typography>
            <Image src='/top-right-arrow.png' width="14" height="14" alt='de' />
        </Link>
              </div>
              
              
            </div>
          </div>
        </div>
        <div className=' bg-[#ffffff20] parentproject p-10 max-[900px]:p-8 rounded-3xl w-[100%]'>
          <Segmented
            numProjects={8}
            className='proppage'
            useFilters={true}
            numCols="grid-cols-4"
            responsiveBreakpoints={{ '1279': 6, '900': 4 }}
          />
        </div>
      </Main>
      </TransitionPage>

    </Layout>
  );
};

export default Projects;
