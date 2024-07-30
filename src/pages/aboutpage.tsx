import Layout from '@/app/modules/layout/layout';
import React, { useState, useEffect } from 'react';
import '@/app/globals.scss';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';
import '@/app/globals.css';
import '@/app/i18n';
import '@/app/mediaqueries.css';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/app/modules/useLocale';
import Parented from '@/app/modules/parented/parented';
import LayerCV from '@/app/modules/layerCV/layerCV';
import Image from 'next/image';
import { Typography } from '@/app/modules/typography/typography';
import Main from '@/app/modules/main/main';
import Link from 'next/link';
import {
  ImageSlideFront,
  TextSlide,
  ImageSlideBack,
} from '/Applications/MAMP/htdocs/github/CVnext/cv-frontend/src/app/modules/textSlide/textSlide';
const AboutPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { locale, handleLanguageChange } = useLocale();

  useEffect(() => {
    // Exemple de logique avec i18n dans useEffect
    console.log('Current language:', i18n.language);
  }, [i18n]); // Ajoutez 'i18n' comme dépendance ici

  const [showMore, setShowMore] = useState(false);

  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);

  const toggleFirstDropdown = () => {
    setIsFirstDropdownOpen(!isFirstDropdownOpen);
  };

  const toggleSecondDropdown = () => {
    setIsSecondDropdownOpen(!isSecondDropdownOpen);
  };

  return (
    <Layout>
      <TransitionPage>
        <Main className='p-24 flex flex-col gap-10 max-[900px]:p-14 max-[450px]:p-8'>
          <div className=' gap-10 max-[1000px]:flex-wrap h-full w-full '>
            <Parented className='!px-0 max-mdd:mt-3 bg-transparent hover:bg-transparent max-mdd:gap-6 w-full items-center flex flex-col gap-10 flex-grow relative overflow-hidden'>
              <Typography
                theme='white'
                weight='regular'
                variant='h3'
                component='h1'
                fontFamily='ClashDisplay'
                className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-center max-mdd:text-left projectpp leading-relaxed max-mdd:text-4xl max-md:text-3xl max-md:leading-normal   max-mdd:mr-2 max-mdd:leading-normal semib'
              >
                {t('about.title')}
              </Typography>

              <div className='flex max-mdd:justify-start items-center gap-6 flex-wrap w-full justify-center'>
                <div className='flex gap-3 p-3 px-4 bg-[#ffffff10] hover:bg-[#ffffff20] rounded-2xl'>
                  <Typography
                    theme='graylight'
                    weight='bold'
                    variant='lead'
                    component='h1'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text text-transparent bg-gradient-to-b  from-white to-[#AAAAAA] text-left projectpp max-[900px]:text-sm '
                  >
                    LOURDEL Sébastien
                  </Typography>
                </div>
                <div className='flex gap-3 p-3 px-4 bg-[#ffffff10] hover:bg-[#ffffff20]  rounded-2xl'>
                  <Typography
                    theme='graylight'
                    weight='bold'
                    variant='lead'
                    component='h1'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-[900px]:text-sm semib'
                  >
                    25 ans
                  </Typography>
                </div>
                <div className='flex gap-2 items-center p-3 px-4 bg-[#ffffff10] hover:bg-[#ffffff20]  rounded-2xl'>
                  <Image
                    src='/localpos.png'
                    width='20'
                    height='21'
                    alt='de'
                    className='opacity-80'
                  />
                  <Typography
                    theme='graylight'
                    weight='bold'
                    variant='lead'
                    component='h1'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-[900px]:text-sm semib'
                  >
                    Arras, France
                  </Typography>
                </div>
                <div className='flex gap-2 items-center p-3 px-4 bg-[#ffffff10] hover:bg-[#ffffff20]  rounded-2xl w-max'>
                  <Image src='/imail.png' width='25' height='24' alt='de' className='opacity-80' />
                  <Typography
                    theme='graylight'
                    weight='bold'
                    variant='lead'
                    component='h1'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-[900px]:text-sm semib'
                  >
                    contact@slourdel.fr
                  </Typography>
                </div>

                <div className='overhed flex gap-2 items-center p-3 px-4 bg-[#00000040] rounded-2xl w-max'>
                  <Image
                    src='/linkedicon.png'
                    width='23'
                    height='23'
                    alt='de'
                    className='opacity-80'
                  />
                  <Typography
                    theme='graylight'
                    weight='bold'
                    variant='lead'
                    component='h1'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-[900px]:text-sm semib'
                  >
                    /Linkedin
                  </Typography>
                </div>
                <div className='overhed flex gap-2 items-center p-3 px-4 bg-[#00000040] rounded-2xl w-max'>
                  <Image src='/github.png' width='22' height='22' alt='de' className='opacity-80' />
                  <Typography
                    theme='graylight'
                    weight='bold'
                    variant='lead'
                    component='h1'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-[900px]:text-lg semib'
                  >
                    /Github
                  </Typography>
                </div>
              </div>
              <TextSlide />
              <div className='flex gap-8 hidden'>
                <Link href='/projects' className=''>
                  <div className='flex items-center justify-between gap-3 p-3 px-4 overhed rounded-2xl  roundedlb'>
                    <Typography
                      component='span'
                      variant='body-lg'
                      theme='white'
                      weight='medium'
                      fontFamily='ClashDisplay'
                      className='max-[900px]:text-lg'
                    >
                      {t('index.button.second')}
                    </Typography>
                    <Image src='/top-right-arrow.png' width='14' height='14' alt='de' />
                  </div>
                </Link>
                <Link href='/projects' className=''>
                  <div className='flex items-center justify-between gap-3 p-3 px-4 ovhea rounded-2xl w-full roundedlb'>
                    <Typography
                      component='span'
                      variant='body-lg'
                      theme='white'
                      weight='medium'
                      fontFamily='ClashDisplay'
                      className='max-[900px]:text-lg'
                    >
                      {t('index.download.cv')}
                    </Typography>
                    <Image src='/top-right-arrow.png' width='14' height='14' alt='de' />
                  </div>
                </Link>
              </div>
              {/*<div className='flex gap-3 items-center p-3 px-4 rounded-xl w-max avail'>
                  <div className='bg-green-500 rounded-3xl h-2 w-2'></div>
                  <Typography
                    theme='white'
                    weight='bold'
                    variant='h4'
                    component='span'
                    fontFamily='SanFrancisco'
                    className='max-md:text-2xl izi'
                  >
                    AvailableForWork
                  </Typography>
                </div>*/}
            </Parented>
            <div className='flex max-xl:flex-col   gap-10 w-full max-md:flex-col'>
              <div className='flex gap-10 max-md:flex-col max-mdd:gap-8 max-xl:flex-nowrap flex-wrap w-[250px] max-xl:w-full'>
                <div className='bg-[#ffffff20] hover:bg-[#ffffff30] justify-between flex items-center gap-3 p-4 px-5 rounded-2xl w-full max-md:w-full max-xl:w-1/3'>
                  <div className='flex items-center gap-3'>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='h5'
                      fontFamily='SanFrancisco'
                    >
                      🇫🇷
                    </Typography>
                    <Typography
                      theme='graylight'
                      weight='regular'
                      variant='body-lg'
                      fontFamily='SanFrancisco'
                    >
                      Maternelle
                    </Typography>
                  </div>
                  <div className='flex items-center'>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='body-base'
                      fontFamily='SanFrancisco'
                    >
                      (A2)
                    </Typography>
                  </div>
                </div>
                <div className='bg-[#ffffff20] hover:bg-[#ffffff30] justify-between flex items-center gap-3 p-4 px-5 rounded-2xl w-full max-md:w-full max-xl:w-1/3'>
                  <div className='flex items-center gap-3'>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='h5'
                      fontFamily='SanFrancisco'
                    >
                      🏴󠁧󠁢󠁥󠁮󠁧󠁿
                    </Typography>
                    <Typography
                      theme='graylight'
                      weight='regular'
                      variant='body-lg'
                      fontFamily='SanFrancisco'
                    >
                      Intermédiaire
                    </Typography>
                  </div>
                  <div className='flex items-center'>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='body-base'
                      fontFamily='SanFrancisco'
                    >
                      (A2)
                    </Typography>
                  </div>
                </div>
                <div className='bg-[#ffffff20] hover:bg-[#ffffff30] flex items-center justify-between gap-3 p-4 px-5 rounded-2xl max-md:w-full w-full max-xl:w-1/3'>
                  <div className='flex items-center gap-3'>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='h5'
                      fontFamily='SanFrancisco'
                    >
                      🇪🇸
                    </Typography>
                    <Typography
                      theme='graylight'
                      weight='regular'
                      variant='body-lg'
                      fontFamily='SanFrancisco'
                    >
                      Débutant
                    </Typography>
                  </div>
                  <div className='flex items-center'>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='body-base'
                      fontFamily='SanFrancisco'
                    >
                      (A2)
                    </Typography>
                  </div>
                </div>
              </div>
              <Parented className='flex-grow  text-center flex flex-col w-1/3 hover:none gap-4 items-start justify-between  max-md:w-full max-xl:w-full'>
                <Typography
                  theme='white'
                  weight='light'
                  variant='lead'
                  component='p'
                  fontFamily='SanFrancisco'
                  className='text-left  w-[100%] max-[680px]:text-lg max-[450px]:text-lg max-[680px]:leading-loose max-[450px]:leading-loose leading-loose -mt-2'
                >
                  {t('index.description')}
                </Typography>

                {/*<div className='flex flex-wrap justify-start gap-5'>
                  <Image
                    src='/animText/reactlog.png'
                    width='1000'
                    height='1000'
                    alt='reactlog'
                    className='cvicon object-contain'
                  />
                  <Image
                    src='/animText/nodejslog.png'
                    width='1000'
                    height='1000'
                    alt='nodejslog'
                    className='cvicon object-contain'
                  />
                  <Image
                    src='/animText/typelog.png'
                    width='1000'
                    height='1000'
                    alt='typelog'
                    className='cvicon object-contain'
                  />
                  <Image
                    src='/animText/nextjswhitelog.png'
                    width='1000'
                    height='1000'
                    alt='phplog'
                    className='cvicon object-contain'
                  />
                  <Image
                    src='/animText/taillog.png'
                    width='1000'
                    height='1000'
                    alt='taillog'
                    className='cvicon object-contain'
                  />
                </div>*/}
              </Parented>
            </div>
          </div>

          <div className='flex gap-10 justify-between max-[1000px]:flex-wrap'>
            <Parented className='flex flex-col gap-2 dertoni items-start  max-[1000px]:w-full w-1/3 laylay overhd'>
              <Image
                src='/anim.gif'
                alt='de'
                width='200'
                height='200'
                className='absolute lottie-anim'
              />
              <Typography
                variant='lead'
                weight='medium'
                component='p'
                theme='graylight'
                fontFamily='ClashDisplay'
              >
                {t('openclassroom.dip.title')}
              </Typography>
              <div className='flex w-full justify-between gap-2'>
                <Typography
                  weight='extralight'
                  theme='graylight'
                  variant='body-base'
                  fontFamily='ClashDisplay'
                >
                  OpenClassRoom
                </Typography>
                <Typography
                  weight='extralight'
                  theme='graylight'
                  variant='body-base'
                  fontFamily='ClashDisplay'
                  className='text-right'
                >
                  Nov 2023
                </Typography>
              </div>
            </Parented>

            <Parented className='flex flex-col gap-2 dertoni items-start  max-[1000px]:w-full w-1/3 laylay overhd'>
              <Image
                src='/anim.gif'
                alt='de'
                width='200'
                height='200'
                className='absolute lottie-anim'
              />
              <Typography
                variant='lead'
                weight='medium'
                component='p'
                theme='graylight'
                fontFamily='ClashDisplay'
              >
                {t('popschool.dip.title')}
              </Typography>
              <div className='flex w-full justify-between gap-2'>
                <Typography
                  weight='extralight'
                  theme='graylight'
                  variant='body-base'
                  fontFamily='ClashDisplay'
                >
                  OpenClassRoom
                </Typography>
                <Typography
                  weight='extralight'
                  theme='graylight'
                  variant='body-base'
                  fontFamily='ClashDisplay'
                  className='text-right'
                >
                  Nov 2023
                </Typography>
              </div>
            </Parented>

            <Parented className='flex flex-col gap-2 dertoni items-start  max-[1000px]:w-full w-1/3 laylay overhd'>
              <Image
                src='/anim.gif'
                alt='de'
                width='200'
                height='200'
                className='absolute lottie-anim'
              />
              <Typography
                variant='lead'
                component='p'
                weight='medium'
                theme='graylight'
                fontFamily='ClashDisplay'
              >
                {t('bac.dip.title')}
              </Typography>
              <div className='flex w-full justify-between gap-2'>
                <Typography
                  weight='extralight'
                  theme='graylight'
                  variant='body-base'
                  fontFamily='ClashDisplay'
                >
                  OpenClassRoom
                </Typography>
                <Typography
                  weight='extralight'
                  theme='graylight'
                  variant='body-base'
                  fontFamily='ClashDisplay'
                  className='text-right'
                >
                  Nov 2023
                </Typography>
              </div>
            </Parented>
          </div>
          <div className='flex items-start gap-10 wrapf'>
            <Parented className=' w-full flex justify-start max-[1280px]:w-[50%] max-[900px]:w-full'>
              <div className='w-[100%] flex flex-col justify-between gap-8'>
                <div className='flex items-center gap-5'>
                  <Image
                    src='/formexp.png'
                    width='45'
                    height='45'
                    alt='de'
                    className='filesimg bg-[#ffffffcc] p-2 rounded-xl'
                  />
                  <Typography
                    theme='white'
                    weight='bold'
                    variant='h5'
                    component='span'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left underlineded semib'
                  >
                    {t('index.titleform')}
                  </Typography>
                </div>
                <div className='exp-sec grid h-max'>
                  <LayerCV
                    title='OpenClassRoom'
                    description={t('openclassroom.description')}
                    date='Nov 2022/2023'
                    iCon='/ocrlogo.png'
                  />
                  <hr className='border-[#ffffff20]' />
                  <LayerCV
                    title='PopSchool'
                    description={t('popschool.description')}
                    date='Fev-Jui 2019'
                    iCon='/poplogo.png'
                  />

                  <hr className='border-[#ffffff20]' />
                  <LayerCV
                    title='Bac STMG'
                    description={t('bac.description')}
                    date='Depuis 2020'
                    iCon='/rimbaud.png'
                  />

                  {isFirstDropdownOpen && (
                    <>
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        title='Brevet des collèges'
                        description={t('brevet.description')}
                        date='2013'
                      />
                    </>
                  )}
                </div>

                <button
                  onClick={toggleFirstDropdown}
                  className='flex justify-center gap-4 items-center p-3 bg-[#00000040] rounded-xl opacity-80 hover:opacity-100'
                >
                  {isFirstDropdownOpen ? (
                    <Typography
                      theme='white'
                      weight='medium'
                      variant='body-base'
                      component='span'
                      fontFamily='ClashDisplay'
                      className='tracking-widest'
                    >
                      FERMER
                    </Typography>
                  ) : (
                    <Typography
                      theme='white'
                      weight='medium'
                      variant='body-base'
                      component='span'
                      fontFamily='ClashDisplay'
                      className='tracking-widest'
                    >
                      VOIR PLUS
                    </Typography>
                  )}
                  <Image
                    src='/dropp.png'
                    width='20'
                    height='20'
                    alt='de'
                    className={isFirstDropdownOpen ? 'rotate-90' : ''}
                  />
                </button>
              </div>
            </Parented>

            <Parented className='flex w-full justify-start max-[1280px]:w-[50%] max-[900px]:w-full'>
              <div className='w-[100%] flex flex-col justify-between gap-8'>
                <div className='flex items-center gap-5'>
                  <Image
                    src='/work.png'
                    width='45'
                    height='45'
                    alt='de'
                    className='filesimg bg-[#ffffffcc] p-2 rounded-xl'
                  />
                  <Typography
                    theme='white'
                    weight='bold'
                    variant='h5'
                    component='span'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left underlineded semib'
                  >
                    {t('index.titleexp')}
                  </Typography>
                </div>
                <div className='exp-sec grid'>
                  <LayerCV
                    title='Toast Agency'
                    description={t('toast.exp.description')}
                    date='Nov 2022-2023'
                    iCon='/symbol.png'
                  />
                  <hr className='border-[#ffffff20]' />
                  <LayerCV
                    title='FL Express'
                    description={t('flexpress.description')}
                    date='Nov 2020-2021'
                    iCon='/flexpress.png'
                  />
                  <hr className='border-[#ffffff20]' />
                  <LayerCV
                    title='Graphic Packaging'
                    description={t('graphic.description')}
                    date='Juin-Aout 2020'
                    iCon='/gp-logo.png'
                  />
                  {isSecondDropdownOpen && (
                    <>
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        title='TRIGO Networking'
                        description={t('trigo.va.description')}
                        date='Fev-Mai 2020'
                        iCon='/trigo.jpeg'
                      />
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        title='Freelance'
                        description={t('freelance.description')}
                        date='Jan 2020'
                        iCon='/slp.png'
                      />
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        title='DK Group'
                        description={t('dk.description')}
                        date='Nov/Dec 2019'
                        iCon='/dkgroup.png'
                      />
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        title='Faurecia'
                        description={t('faurecia.description')}
                        date='Fev-Juillet 2018'
                        iCon='/faurecia.png'
                      />
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        title='Trigo Networking'
                        description={t('trigo.sin.description')}
                        date='2016-2017'
                        iCon='/trigo.jpeg'
                      />
                    </>
                  )}
                </div>
                <button
                  onClick={toggleSecondDropdown}
                  className='flex justify-center gap-4 items-center p-3 bg-[#00000040] rounded-xl opacity-80 hover:opacity-100'
                >
                  {isSecondDropdownOpen ? (
                    <Typography
                      theme='white'
                      weight='medium'
                      variant='body-base'
                      component='span'
                      fontFamily='ClashDisplay'
                      className='tracking-widest'
                    >
                      FERMER
                    </Typography>
                  ) : (
                    <Typography
                      theme='white'
                      weight='medium'
                      variant='body-base'
                      component='span'
                      fontFamily='ClashDisplay'
                      className='tracking-widest'
                    >
                      VOIR PLUS
                    </Typography>
                  )}
                  <Image
                    src='/dropp.png'
                    width='20'
                    height='20'
                    alt='de'
                    className={isSecondDropdownOpen ? 'rotate-90 transizion' : 'transizion'}
                  />
                </button>
              </div>
            </Parented>
          </div>
        </Main>
      </TransitionPage>
    </Layout>
  );
};

export default AboutPage;
