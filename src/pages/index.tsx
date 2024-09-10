import React, { useEffect, useState } from 'react';
import Layout from '@/app/modules/layout/layout';
import Main from '@/app/modules/main/main';
import Image from 'next/image';
import { Typography } from '@/app/modules/typography/typography';
import Link from 'next/link';
import AnimatedText from '@/app/modules/animatedText/animatedText';
import Slider from '@/app/modules/slider/slider';
import Segmented from '@/app/modules/segmentedControl/segmented';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';
import { useLocale } from '@/app/modules/useLocale';
import Parented from '@/app/modules/parented/parented';
import LayerCV from '@/app/modules/layerCV/layerCV';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import IndexSkeleton from '@/app/modules/skeleton/index/IndexSkeleton';

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  const { locale, handleLanguageChange } = useLocale();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (i18n.isInitialized) {
      // Ajoute un délai minimum de 500ms avant de masquer le squelette
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 0);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [i18n]);

  if (isLoading) {
    return (
      <Layout>
        <TransitionPage>
          <IndexSkeleton />
        </TransitionPage>
      </Layout>
    );
  }

  return (
    <Layout>
      <TransitionPage>
        <Main className='overflow-hidden p-24 max-[900px]:p-14 max-[450px]:p-8'>
          <div className='image-container pt-2 w-full max-md:block flex gap-10 max-[900px]:pt-16 items-stretch'>
            <div className='overflow-hidden items-center gap-2 w-[30%] max-md:h-[160px] max-md:w-[160px] max-md:mb-8 rounded-WL max-[900px]:w-[40%] relative !max-h'>
              <Image src='/cesde.png' alt='de' fill className='object-cover' />
            </div>
            <div className='flex flex-col items-start gap-6 w-[70%] max-md:w-full h-auto max-[900px]:w-[60%] min-h-full'>
              <div className='font-CD'>
                <AnimatedText />
                <Typography
                  theme='white'
                  variant='h1'
                  component='h2'
                  weight='bold'
                  fontFamily='ClashDisplay'
                  className='bg-clip-text text-transparent bg-gradient-to-g from-white to-[#AAAAAA] text-left z-10 leading-none max-[900px]:text-5xl max-[680px]:leading-tight max-[450px]:text-4xl'
                >
                  {t('general.welcome')}
                </Typography>
              </div>

              <Typography
                theme='gray'
                weight='extralight'
                variant='lead'
                component='p'
                fontFamily='Montserrat'
                className='text-left strocked w-[100%] max-[680px]:text-lg max-[450px]:text-lg max-[680px]:leading-loose max-[450px]:leading-loose leading-loose -mt-2'
              >
                {t('index.description')}
              </Typography>
              <div className='flex gap-6 gap-y-4 justify-between flex-wrap'>
                <div className='flex flex-wrap gap-6 items-center max-[900px]:py-2'>
                  <Link href='/aboutpage' className=''>
                    <div className='flex items-center gap-3 p-3 px-4 ovhea rounded-2xl roundedlb'>
                      <Typography
                        component='span'
                        variant='lead'
                        theme='white'
                        weight='medium'
                        fontFamily='ClashDisplay'
                        className='max-[900px]:text-lg'
                      >
                        {t('index.button.first')}
                      </Typography>
                      <Image src='/top-right-arrow.png' width={14} height={14} alt='de' />
                    </div>
                  </Link>

                  <Link href='/projects' className=''>
                    <div className='flex items-center gap-3 p-3 px-4 overhed rounded-2xl roundedlb'>
                      <Typography
                        component='span'
                        variant='lead'
                        theme='white'
                        weight='medium'
                        fontFamily='ClashDisplay'
                        className='max-[900px]:text-lg'
                      >
                        {t('index.button.second')}
                      </Typography>
                      <Image src='/top-right-arrow.png' width={14} height={14} alt='de' />
                    </div>
                  </Link>
                </div>
                <div className='flex mt-2 gap-8 justify-start items-center'>
                  <Typography
                    theme='gray'
                    weight='light'
                    variant='body-sm'
                    component='p'
                    fontFamily='SanFrancisco'
                    className='uppercase'
                  >
                    {t('general.madewith')}
                  </Typography>
                  <div className='color-div next'></div>
                  <div className='color-div tailw'></div>
                  <div className='color-div type'></div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-row gap-10 mt-10 max-[1280px]:flex-wrap revezed'>
            {/* Blocs de gauche */}
            <div className='flex flex-nowrap flex-col max-[1280px]:flex-row max-[1280px]:flex-wrap justify-between gap-10 w-[40%] max-[1280px]:w-[100%]'>
              {/* Premier bloc */}
              <div className='w-full flex flex-col justify-between h-[100%] gap-10 max-[900px]:flex-col max-[1280px]:flex-row'>
                <Parented className='flex justify-start max-[1280px]:w-[50%] max-[900px]:w-full'>
                  <div className='w-[100%] flex flex-col justify-between gap-8'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-5'>
                        <Image
                          src='/work.png'
                          width={40}
                          height={40}
                          alt='de'
                          className='filesimg bg-[#ffffffcc] p-2 rounded-xl'
                        />

                        <Typography
                          theme='white'
                          weight='medium'
                          variant='h5'
                          component='span'
                          fontFamily='ClashDisplay'
                          className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left underlineded '
                        >
                          {t('index.title.exp')}
                        </Typography>
                      </div>
                      <Link href='/aboutpage' className='click-parented rounded-full'>
                        <Image
                          src='/top-right-arrow.png'
                          width={22}
                          height={22}
                          alt='de'
                          className='opacity-100 mt-1'
                        />
                      </Link>
                    </div>
                    <div className='exp-sec grid'>
                      <LayerCV
                        title='Freelance'
                        description={t('experience.freelance.description')}
                        date='Depuis 2020'
                        shortV
                        iCon='/symbol.png'
                      />
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        iCon='/symbol.png'
                        title='ToastAgency'
                        description={t('experience.toast.description')}
                        date='Nov 2022/2023'
                        shortV
                      />
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        iCon='/flexpress.png'
                        title='FL Express'
                        description={t('experience.flexpress.description')}
                        date='Depuis 2020'
                        shortV
                      />
                    </div>
                  </div>
                </Parented>
                {/* Deuxième bloc */}
                <Parented className='flex justify-start max-[1280px]:w-[50%] max-[900px]:w-full'>
                  <div className='w-[100%] flex flex-col justify-between gap-8'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-5'>
                        <Image
                          src='/formexp.png'
                          width={40}
                          height={40}
                          alt='de'
                          className='filesimg bg-[#ffffffcc] p-2 rounded-xl'
                        />

                        <Typography
                          theme='white'
                          weight='medium'
                          variant='h5'
                          component='span'
                          fontFamily='ClashDisplay'
                          className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]  text-left underlineded '
                        >
                          {t('index.title.form')}
                        </Typography>
                      </div>
                      <Link href='/aboutpage' className='click-parented rounded-full'>
                        <Image
                          src='/top-right-arrow.png'
                          width={22}
                          height={22}
                          alt='de'
                          className='opacity-70 hover:opacity-100'
                        />
                      </Link>
                    </div>
                    <div className='exp-sec grid'>
                      <LayerCV
                        title='OpenClassRoom'
                        description={t('education.openclassroom.description')}
                        date='Nov 2022/2023'
                        shortV
                        iCon='/ocrlogo.png'
                      />
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        title='PopSchool'
                        description={t('education.popschool.description')}
                        date='Fev-Jui 2019'
                        shortV
                        iCon='/poplogo.png'
                      />
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        title='Baccalauréat STMG'
                        description={t('education.bac.description')}
                        date='Depuis 2020'
                        shortV
                        iCon='/rimbaud.png'
                      />
                    </div>
                  </div>
                </Parented>
              </div>
              <a href='/docs/cv.pdf' download='cv.pdf' className='h-[20%] w-full'>
                <div className='flex justify-between items-center h-[100%] gradiended p-10 max-[900px]:p-8 rounded-3xl parentproject'>
                  <Typography
                    theme='white'
                    weight='bold'
                    variant='h4'
                    component='span'
                    fontFamily='ClashDisplay'
                    className=''
                  >
                    {t('index.download.cv')}
                  </Typography>
                  <Image src='/download.png' width={30} height={30} alt='Download icon' />
                </div>
              </a>
            </div>

            <Parented className='flex flex-col gap-8 max-[900px]: w-[60%] sm:w-[100%] max-[1280px]:w-[100%]'>
              <div className='flex justify-between'>
                <div className='flex items-center gap-5'>
                  <Image
                    src='/applelay.png'
                    width={40}
                    height={40}
                    alt='de'
                    className='filesimg bg-[#ffffffcc] p-2 rounded-xl'
                  />

                  <Typography
                    theme='white'
                    weight='medium'
                    variant='h5'
                    component='span'
                    fontFamily='ClashDisplay'
                    className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left underlineded '
                  >
                    {t('index.title.project')}
                  </Typography>
                </div>
                <Link
                  href='/projects'
                  className='click-parented flex justify-center px-4 gap-3 items-center p-3 rounded-full'
                >
                  <Image src='/top-right-arrow.png' width={20} height={20} alt='de' />
                </Link>
              </div>
              <Segmented
                frontEndProject
                numProjects={6}
                className='indexproppage'
                useFilters={false}
                numCols='grid-cols-2'
                responsiveBreakpoints={{ '1279': 6, '900': 4 }}
              />
            </Parented>
          </div>
          <Parented className='mt-10'>
            <Slider />
          </Parented>
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
  };
};

export default HomePage;
