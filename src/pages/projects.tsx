import React, { useState } from 'react';
import { GetServerSideProps, GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/app/modules/layout/layout';
import Image from 'next/image';
import { Typography } from '@/app/modules/typography/typography';
import projectsData from '@/app/data/project.json';
import Main from '@/app/modules/main/main';
import Segmented from '@/app/modules/segmentedControl/segmented';
import Link from 'next/link';
import Slider from '@/app/modules/slider/slider';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';

// Importez ces styles si nécessaire
import '@/app/globals.scss';

interface Project {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string | { fr: string; en: string; es: string };
  symbol: string;
  categories: string[];
  tags: string[];
  link: string;
  hoverBackgroundColor: string;
  repoUrl?: string;
  pageUrl?: string;
  gallery: {
    topleft: string;
    topright: string;
    big: string;
    botright: string;
    botleft: string;
    vertical: string;
    mkt: string;
  };
}

const Projects: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { t, i18n } = useTranslation('common');

  const nextProject = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevProject = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProjectIndex(
        (prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length
      );
      setIsTransitioning(false);
    }, 300);
  };

  const project: Project = projectsData[currentProjectIndex] as Project;

  const getProjectDescription = (project: Project): string => {
    if (typeof project.description === 'string') {
      return project.description;
    }

    const translationKey = `projects.${project.slug}.description`;
    const description = t(translationKey);
    if (description !== translationKey) {
      return description;
    }

    return (
      project.description[i18n.language as keyof typeof project.description] ||
      project.description.fr
    );
  };

  return (
    <Layout>
      <TransitionPage>
        <Main className='overflow-hidden py-24 p-24 max-[900px]:p-8'>
          <div className='flex max-lg:flex-col justify-between items-start pt-2 gap-10 py-10 max-[900px]:gap-6 max-[900px]:pt-16 max-[900px]:pb-8'>
            <div className='flex  gap-8 max-[500px]:gap-6 items-center justify-center'>
              <Image
                src='/applelay.webp'
                width={50}
                height={50}
                alt='de'
                className='filesimg bg-[#ffffffcc] p-2 rounded-xl max-[500px]:w-[40px] max-[500px]:h-[40px]'
              />
              <Typography
                theme='white'
                weight='medium'
                variant='h3'
                component='h1'
                fontFamily='ClashDisplay'
                className='bg-clip-text 	 text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left max-mdd:text-left projectpp leading-relaxed max-mdd:text-4xl max-md:text-3xl max-md:leading-tight max  max-mdd:mr-2 max-mdd:leading-normal '
              >
                {t('index.title.project')}
              </Typography>
            </div>
            <Typography
              theme='gray'
              weight='extralight'
              variant='body-lg'
              component='p'
              fontFamily='Montserrat'
              className='text-right w-[500px] max-lg:text-left max-lg:w-full strocked max-[680px]:text-lg max-[450px]:text-base max-[450px]:w-full max-[680px]:leading-loose max-[450px]:leading-loose leading-loose  '
            >
              {t('general.projectpage')}
            </Typography>
          </div>
          <div className='rounded-3xl hidden mb-14 max-[900px]:mb-10'>
            <Slider className='projage ' />
          </div>
          <div className='flex gap-10 mb-10 parented max-[900px]:block max-[900px]:bg-[#ffffff20] max-[900px]:rounded-3xl'>
            <div className='w-2/5 max-[900px]:bg-[#ffffff00] bg-[#ffffff20] max-[900px]:p-8 parentprojecting p-8 max-[900px]:pb-5 rounded-3xl relative max-[900px]:mb-0 max-[900px]:w-[100%] max-[900px]:h-[300px]'>
              <div
                key={project.id}
                className={`project-itemm projectadow ${!isTransitioning ? 'active' : ''}`}
              >
                <Image
                  src={project.image}
                  width={500}
                  height={500}
                  alt={project.title}
                  className='h-[100%] w-[100%] rounded-3xl object-cover object-left grayzc'
                />
              </div>
            </div>

            <div
              className={`w-3/5 bg-[#ffffff20] max-[900px]:bg-[#ffffff00] max-[900px]:pt-5 parentprojected p-10 max-[900px]:p-8 carouzel relative rounded-3xl max-[900px]:w-[100%]`}
            >
              <div
                className={`flex flex-col gap-8 project-details ${
                  !isTransitioning ? 'active' : ''
                }`}
              >
                <div className='flex items-center gap-4'>
                  <Image
                    src={project.symbol}
                    width={50}
                    height={50}
                    alt={project.title}
                    className='h-[40px] w-[40px] rounded-lg'
                  />
                  <Typography
                    theme='white'
                    weight='medium'
                    variant='h5'
                    component='span'
                    fontFamily='ClashDisplay'
                    className=''
                  >
                    {project.title}
                  </Typography>
                </div>

                <div className='flex justify-start items-center flex-wrap gap-x-6 capitalize gap-y-5 tranlating'>
                  {project.tags.slice(0, 4).map((tag, index) => (
                    <Typography
                      key={index}
                      theme='graylight'
                      weight='regular'
                      variant='body-sm'
                      component='span'
                      fontFamily='SanFrancisco'
                      className='p-2 px-4 bg-[#00000030] hover:bg-[#d5d5d5] hover:text-black uppercase rounded-xl'
                    >
                      #{tag}
                    </Typography>
                  ))}
                </div>
                <Typography
                  theme='graylight'
                  weight='light'
                  variant='body-base'
                  component='p'
                  fontFamily='Inter'
                  className='leading-8 strocked'
                >
                  {t(`projects.${project.slug}.description`)}
                </Typography>
                <div className='flex gap-4 absolute top-10 right-10 btnresponsivee'>
                  <button
                    className='ovhea flex gap-1 justify-center items-center p-3 px-4 rounded-full'
                    onClick={prevProject}
                  >
                    <Image
                      src='/larrow.webp'
                      width={200}
                      height={200}
                      alt=''
                      className='grayscale-2 w-[15px] h-[15px] max-[900px]:w-[10px] max-[900px]:h-[10px]'
                    />
                  </button>
                  <button
                    className='ovhea flex gap-1 justify-center items-center p-3 px-4 rounded-full'
                    onClick={nextProject}
                  >
                    <Image
                      src='/rarrow.webp'
                      width={200}
                      height={200}
                      alt=''
                      className='grayscale-2 w-[15px] h-[15px] max-[900px]:w-[10px] max-[900px]:h-[10px]'
                    />
                  </button>
                </div>
                <div className='flex'>
                  <Link
                    className='custom-button btt gradient-text flex gap-2 justify-start items-center border rounded-full'
                    href={`/project/${project.slug}`}
                  >
                    <Typography
                      theme='white'
                      weight='medium'
                      variant='body-lg'
                      component='p'
                      fontFamily='ClashDisplay'
                      className='text-left strocked w-[100%] tracking-widest leading-relaxed'
                    >
                      {t('general.learnMore')}
                    </Typography>
                    <Image src='/top-right-arrow.webp' width={14} height={14} alt='de' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#ffffff20] parentproject p-10 max-[900px]:p-8 rounded-3xl w-[100%]'>
            <Segmented className='proppage' useFilters={true} numCols='grid-cols-4' />
          </div>
        </Main>
      </TransitionPage>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
    },
    revalidate: 3600 // Revalidation toutes les heures si nécessaire
  };
};

export default Projects;
