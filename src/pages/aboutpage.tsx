import Layout from '@/app/modules/layout/layout';
import React, { useState, useEffect } from 'react';
import '@/app/globals.scss';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';
import '@/app/globals.css';
import '@/app/i18n';
import '@/app/mediaqueries.css';
import { useTranslation } from 'react-i18next';
import Parented from '@/app/modules/parented/parented';
import LayerCV from '@/app/modules/layerCV/layerCV';
import Image from 'next/image';
import { Typography } from '@/app/modules/typography/typography';
import Main from '@/app/modules/main/main';
import Link from 'next/link';
import { ImageSlideFront, TextSlide, ImageSlideBack } from '@/app/modules/textSlide/textSlide';
import { useLocale } from '@/app/modules/useLocale';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
const AboutPage: React.FC = () => {
  const { t } = useTranslation('common');
  const { locale, handleLanguageChange } = useLocale();
  const [showMore, setShowMore] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);

  const toggleFirstDropdown = () => {
    setIsFirstDropdownOpen(!isFirstDropdownOpen);
  };

  const toggleSecondDropdown = () => {
    setIsSecondDropdownOpen(!isSecondDropdownOpen);
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // ou un loader
  }

  return (
    <Layout>
      <TransitionPage>
        <Main className='p-24 flex flex-col gap-10 max-[900px]:p-14 max-[450px]:p-8'>
          <div className=' gap-10 max-[1000px]:flex-wrap h-full w-full '>
            <Parented className='!px-0 max-mdd:mt-5 bg-transparent hover:bg-transparent max-mdd:gap-6 w-full items-start flex gap-10 flex-grow relative overflow-hidden'>
              <div className='flex flex-col gap-6'>
                <Typography
                  theme='white'
                  weight='medium'
                  variant='h3'
                  component='h1'
                  fontFamily='ClashDisplay'
                  className='bg-clip-text	 text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left max-mdd:text-left projectpp leading-normal max-mdd:text-4xl max-md:text-3xl max-md:leading-tight max  max-mdd:mr-2 max-mdd:leading-normal '
                >
                  {t('about.title')}
                </Typography>
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
              </div>

              <div className='flex max-mdd:justify-start  gap-6 flex-wrap w-full justify-end'>
                <div className='flex items-center gap-3 border p-3 px-4  hover:bg-[#e5e5e5] border-[#494949] bg-[#ffffff0b] group rounded-2xl'>
                  <Image
                    src='/utili.png'
                    width='22'
                    height='22'
                    alt='de'
                    className='opacity-80 invert hover group-hover:invert-0'
                  />
                  <Typography
                    theme='graylight'
                    variant='lead'
                    component='span'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text text-transparent group-hover:text-black bg-gradient-to-b  from-white to-[#AAAAAA] text-left projectpp max-mdd:text-lg max-smd:text-base'
                  >
                    <b>LOURDEL</b> Sébastien
                  </Typography>
                </div>
                <div className='flex gap-3 group p-3 px-4 brder items-center border hover:bg-[#e5e5e5] border-[#494949] bg-[#ffffff0b] rounded-2xl'>
                  <Image
                    src='/gateau.png'
                    width='22'
                    height='22'
                    alt='de'
                    className='opacity-80 invert hover group-hover:invert-0'
                  />
                  <Typography
                    theme='graylight'
                    variant='lead'
                    component='span'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text group-hover:text-black text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-mdd:text-lg max-smd:text-base '
                  >
                    25 ans
                  </Typography>
                </div>
                <div className='flex gap-3 group items-center justify-start p-3 px-4 border border-[#494949] bg-[#ffffff0b] hover:bg-[#e5e5e5]  rounded-2xl'>
                  <Image
                    src='/lieu.png'
                    width='22'
                    height='22'
                    alt='de'
                    className='opacity-80 invert hover group-hover:invert-0'
                  />
                  <Typography
                    theme='graylight'
                    variant='lead'
                    component='span'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text text-transparent group-hover:text-black bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-mdd:text-lg max-smd:text-base '
                  >
                    Arras, France
                  </Typography>
                </div>
                <div className='flex gap-3 group items-center justify-start bg-[#ffffff0b] p-3 px-4 border-[#494949] border hover:bg-[#e5e5e5]  rounded-2xl w-max'>
                  <Image
                    src='/e-mail.png'
                    width='22'
                    height='22'
                    alt='de'
                    className='opacity-80 invert hover group-hover:invert-0'
                  />
                  <Typography
                    theme='graylight'
                    variant='lead'
                    component='span'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text  text-transparent group-hover:text-black bg-gradient-to-b  from-white to-[#AAAAAA] text-left projectpp max-mdd:text-lg max-smd:text-base '
                  >
                    contact@slourdel.fr
                  </Typography>
                </div>

                <div className='overhedz flex gap-2 border-[#494949] border items-center p-3  bg-[#00000040] rounded-2xl w-max'>
                  <Image
                    src='/linkedicon.png'
                    width='25'
                    height='25'
                    alt='de'
                    className='opacity-80 max-mdd:w-6 max-mdd:h-6 max-smd:w-5 max-smd:h-5'
                  />
                  <Typography
                    theme='graylight'
                    weight='bold'
                    variant='lead'
                    component='span'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text hidden text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-mdd:text-base '
                  >
                    /Linkedin
                  </Typography>
                </div>
                <div className='overhedz flex gap-2 border-[#494949] border items-center p-3  bg-[#00000040] rounded-2xl w-max'>
                  <Image
                    src='/github.png'
                    width='25'
                    height='25'
                    alt='de'
                    className='opacity-80 max-mdd:w-6 max-mdd:h-6 max-smd:w-5 max-smd:h-5'
                  />
                  <Typography
                    theme='graylight'
                    weight='bold'
                    variant='lead'
                    component='span'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text hidden text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-mdd:text-base semib'
                  >
                    /Github
                  </Typography>
                </div>
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
              <div className='flex gap-8 max-md:flex-col max-mdd:gap-8 max-xl:flex-nowrap flex-wrap w-[250px] max-xl:w-full'>
                <div className='bg-[#ffffff20] textedd hover:bg-[#ffffff30] tra justify-between flex items-center gap-3 p-4 px-5 rounded-2xl w-full max-md:w-full max-xl:w-1/3'>
                  <div className='flex items-center gap-4'>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='h4'
                      fontFamily='SanFrancisco'
                    >
                      🇫🇷
                    </Typography>
                    <Typography
                      theme='graylight'
                      weight='medium'
                      variant='body-lg'
                      component='p'
                      fontFamily='ClashDisplay'
                    >
                      Maternelle
                    </Typography>
                  </div>
                </div>
                <div className='bg-[#ffffff20] textedd hover:bg-[#ffffff30] tra justify-between flex items-center gap-3 p-4 px-5 rounded-2xl w-full max-md:w-full max-xl:w-1/3'>
                  <div className='flex items-center gap-4'>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='h4'
                      fontFamily='SanFrancisco'
                    >
                      🏴󠁧󠁢󠁥󠁮󠁧󠁿
                    </Typography>
                    <Typography
                      theme='graylight'
                      weight='medium'
                      variant='body-lg'
                      component='p'
                      fontFamily='ClashDisplay'
                    >
                      Intermédiaire
                    </Typography>
                  </div>
                  <div className='flex items-center'>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='body-base'
                      component='p'
                      fontFamily='SanFrancisco'
                    >
                      (A2)
                    </Typography>
                  </div>
                </div>
                <div className='bg-[#ffffff20] textedd hover:bg-[#ffffff30] tra flex items-center justify-between gap-3 p-4 px-5 rounded-2xl max-md:w-full w-full max-xl:w-1/3'>
                  <div className='flex items-center gap-4'>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='h4'
                      fontFamily='SanFrancisco'
                    >
                      🇪🇸
                    </Typography>
                    <Typography
                      theme='graylight'
                      weight='medium'
                      variant='body-lg'
                      component='p'
                      fontFamily='ClashDisplay'
                    >
                      Débutant
                    </Typography>
                  </div>
                  <div className='flex items-center'>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='body-base'
                      component='p'
                      fontFamily='SanFrancisco'
                    >
                      (A2)
                    </Typography>
                  </div>
                </div>
              </div>
              <Parented className='flex-grow textedd  text-center flex flex-col w-1/3 hover:none gap-4 items-start justify-between  max-md:w-full max-xl:w-full'>
                <Typography
                  theme='graylight'
                  weight='extralight'
                  variant='lead'
                  component='p'
                  fontFamily='Montserrat'
                  className='text-left   w-[100%] max-[680px]:text-lg max-[450px]:text-lg max-[680px]:leading-loose max-[450px]:leading-loose leading-loose -mt-2'
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
                className='absolute -mt-10 lottie-anim'
              />
              <Typography
                variant='lead'
                weight='medium'
                component='p'
                theme='graylight'
                fontFamily='ClashDisplay'
              >
                {t('education.openclassroom.title')}
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
                className='absolute lottie-anim -mt-10'
              />
              <Typography
                variant='lead'
                weight='medium'
                component='p'
                theme='graylight'
                fontFamily='ClashDisplay'
              >
                {t('education.popschool.title')}
              </Typography>
              <div className='flex w-full justify-between gap-2'>
                <Typography
                  weight='extralight'
                  theme='graylight'
                  variant='body-base'
                  fontFamily='ClashDisplay'
                >
                  PopSchool
                </Typography>
                <Typography
                  weight='extralight'
                  theme='graylight'
                  variant='body-base'
                  fontFamily='ClashDisplay'
                  className='text-right'
                >
                  Janv 2020
                </Typography>
              </div>
            </Parented>

            <Parented className='flex flex-col gap-2 dertoni items-start  max-[1000px]:w-full w-1/3 laylay overhd'>
              <Image
                src='/anim.gif'
                alt='de'
                width='200'
                height='200'
                className='absolute lottie-anim -mt-10'
              />
              <Typography
                variant='lead'
                component='p'
                weight='medium'
                theme='graylight'
                fontFamily='ClashDisplay'
              >
                {t('education.bac.title')}
              </Typography>
              <div className='flex w-full justify-between gap-2'>
                <Typography
                  weight='extralight'
                  theme='graylight'
                  variant='body-base'
                  fontFamily='ClashDisplay'
                >
                  Lycée Arthur Rimbaud
                </Typography>
                <Typography
                  weight='extralight'
                  theme='graylight'
                  variant='body-base'
                  fontFamily='ClashDisplay'
                  className='text-right'
                >
                  2016
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
                    width='40'
                    height='40'
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
                    {t('index.title.form')}
                  </Typography>
                </div>
                <div className='exp-sec grid h-max'>
                  <LayerCV
                    title='OpenClassRoom'
                    description={t('education.openclassroom.description')}
                    date='Nov 2022/2023'
                    iCon='/ocrlogo.png'
                  />
                  <hr className='border-[#ffffff20]' />
                  <LayerCV
                    title='PopSchool'
                    description={t('education.popschool.description')}
                    date='Fev-Jui 2019'
                    iCon='/poplogo.png'
                  />

                  <hr className='border-[#ffffff20]' />
                  <LayerCV
                    title='Bac STMG'
                    description={t('education.bac.description')}
                    date='Depuis 2020'
                    iCon='/rimbaud.png'
                  />

                  {isFirstDropdownOpen && (
                    <>
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        title='Brevet des collèges'
                        description={t('education.brevet.description')}
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
                      variant='body-lg'
                      component='span'
                      fontFamily='SanFrancisco'
                      className='tracking-widest'
                    >
                      {t('about.collapse.close')}
                    </Typography>
                  ) : (
                    <Typography
                      theme='white'
                      weight='medium'
                      variant='body-lg'
                      component='span'
                      fontFamily='SanFrancisco'
                      className='tracking-widest'
                    >
                      {t('about.collapse.more')}
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
                    width='40'
                    height='40'
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
                <div className='exp-sec grid'>
                  <LayerCV
                    title='Toast Agency'
                    description={t('experience.toast.description')}
                    date='Nov 2022-2023'
                    iCon='/symbol.png'
                  />
                  <hr className='border-[#ffffff20]' />
                  <LayerCV
                    title='FL Express'
                    description={t('experience.flexpress.description')}
                    date='Nov 2020-2021'
                    iCon='/flexpress.png'
                  />
                  <hr className='border-[#ffffff20]' />
                  <LayerCV
                    title='Graphic Packaging'
                    description={t('experience.graphic.description')}
                    date='Juin-Aout 2020'
                    iCon='/gp-logo.png'
                  />
                  {isSecondDropdownOpen && (
                    <>
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        title='TRIGO Networking'
                        description={t('experience.trigo.va.description')}
                        date='Fev-Mai 2020'
                        iCon='/trigo.jpeg'
                      />
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        title='Freelance'
                        description={t('experience.freelance.description')}
                        date='Jan 2020'
                        iCon='/slp.png'
                      />
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        title='DK Group'
                        description={t('experience.dk.description')}
                        date='Nov/Dec 2019'
                        iCon='/dkgroup.png'
                      />
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        title='Faurecia'
                        description={t('experience.faurecia.description')}
                        date='Fev-Juillet 2018'
                        iCon='/faurecia.png'
                      />
                      <hr className='border-[#ffffff20]' />
                      <LayerCV
                        title='Trigo Networking'
                        description={t('experience.trigo.sin.description')}
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
                      variant='body-lg'
                      component='span'
                      fontFamily='SanFrancisco'
                      className='tracking-widest'
                    >
                      {t('about.collapse.close')}
                    </Typography>
                  ) : (
                    <Typography
                      theme='white'
                      weight='medium'
                      variant='body-lg'
                      component='span'
                      fontFamily='SanFrancisco'
                      className='tracking-widest'
                    >
                      {t('about.collapse.more')}
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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
    },
  };
};

export default AboutPage;
