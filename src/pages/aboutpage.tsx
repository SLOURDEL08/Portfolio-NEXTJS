import Layout from '@/app/modules/layout/layout';
import React, { useState, useEffect } from 'react';
import '@/app/globals.scss';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';
import '@/app/globals.scss';
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
          <div className='flex gap-10 max-[1000px]:flex-wrap h-full w-full '>
            <div className='flex flex-col overflow-hidden items-start gap-2 profilpiced  w-[30%] h-[auto]  max-[680px]:h-[160px] max-[1000px]:!flex-grow-0  max-[680px]:w-[160px] max-[680px]:mb-0 max-[680px]:mt-10 rounded-WL max-[900px]:w-[40%]'>
              <Image
                src='/cesded.png'
                width='599'
                height='599'
                alt='de'
                className='h-full w-full object-cover '
              />
            </div>
            <Parented className='w-[70%] flex flex-col gap-8 flex-grow relative'>
              <Typography
                theme='white'
                weight='bold'
                variant='h4'
                component='h1'
                fontFamily='ClashDisplay'
                className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-[900px]:text-2xl semib'
              >
                {t('about.title')}
              </Typography>
              <div className='flex gap-6 flex-wrap '>
                <a
                  href='/docs/cv.pdf'
                  download='cv.pdf'
                  className=' absolute right-10 top-10 rounded-xl border-stone-600'
                >
                  <div className='gradiended p-3 rounded-xl '>
                    <Image src='/download.png' width='22' height='22' alt='Download icon' />
                  </div>
                </a>
                <div className='flex gap-3 p-2 px-3 bg-[#00000040] rounded-lg'>
                  <Typography
                    theme='graylight'
                    weight='bold'
                    variant='lead'
                    component='h1'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-[900px]:text-lg '
                  >
                    LOURDEL Sébastien
                  </Typography>
                </div>
                <div className='flex gap-3 p-2 px-3 bg-[#00000040] rounded-xl'>
                  <Typography
                    theme='graylight'
                    weight='bold'
                    variant='lead'
                    component='h1'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-[900px]:text-lg semib'
                  >
                    25 ans
                  </Typography>
                </div>
                <div className='flex gap-2 items-center p-2 px-3 bg-[#00000040] rounded-xl'>
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
                    className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-[900px]:text-lg semib'
                  >
                    Arras, France
                  </Typography>
                </div>
                <div className='flex gap-2 items-center p-2 px-3 bg-[#00000040] rounded-xl w-max'>
                  <Image src='/imail.png' width='25' height='24' alt='de' className='opacity-80' />
                  <Typography
                    theme='graylight'
                    weight='bold'
                    variant='lead'
                    component='h1'
                    fontFamily='SanFrancisco'
                    className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-[900px]:text-lg semib'
                  >
                    contact@slourdel.fr
                  </Typography>
                </div>
                <div className='overhed flex gap-2 items-center p-2 px-3 bg-[#00000040] rounded-xl w-max'>
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
                    className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left projectpp max-[900px]:text-lg semib'
                  >
                    /Linkedin
                  </Typography>
                </div>
                <div className='overhed flex gap-2 items-center p-2 px-3 bg-[#00000040] rounded-xl w-max'>
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
              <div className='h-full text-left gap-6 flex items-start wrapf'>
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

                <div className='horizontal-scroll-container'>
                  <div className='horizontal-scroll'>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='h4'
                      component='span'
                      fontFamily='ClashDisplay'
                      className='weightGrow'
                    >
                      #France
                    </Typography>
                    <Typography
                      theme='graylight'
                      weight='regular'
                      variant='h4'
                      component='span'
                      fontFamily='Inter'
                      className='weightGrow'
                    >
                      #Europe
                    </Typography>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='h4'
                      component='span'
                      fontFamily='SanFrancisco'
                      className='weightGrow'
                    >
                      #World
                    </Typography>
                    <Typography
                      theme='graylight'
                      weight='extralight'
                      variant='h4'
                      component='span'
                      fontFamily='Montserrat'
                      className='weightGrow'
                    >
                      #Remote
                    </Typography>
                    <Typography
                      theme='graylight'
                      weight='light'
                      variant='h4'
                      component='span'
                      fontFamily='SanFrancisco'
                      className='italic weightGrow'
                    >
                      #Freelance
                    </Typography>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='h4'
                      component='span'
                      fontFamily='ClashDisplay'
                      className='weightGrow'
                    >
                      #France
                    </Typography>
                    <Typography
                      theme='graylight'
                      weight='regular'
                      variant='h4'
                      component='span'
                      fontFamily='Inter'
                      className='weightGrow'
                    >
                      #Europe
                    </Typography>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='h4'
                      component='span'
                      fontFamily='SanFrancisco'
                      className='weightGrow'
                    >
                      #World
                    </Typography>
                    <Typography
                      theme='graylight'
                      weight='extralight'
                      variant='h4'
                      component='span'
                      fontFamily='Montserrat'
                      className='weightGrow'
                    >
                      #Remote
                    </Typography>
                    <Typography
                      theme='graylight'
                      weight='bold'
                      variant='h4'
                      component='span'
                      fontFamily='ClashDisplay'
                      className='weightGrow'
                    >
                      #Freelance
                    </Typography>
                  </div>
                </div>
              </div>
            </Parented>
          </div>

          <div className='flex gap-10 justify-between max-[1000px]:flex-wrap'>
            <Parented className='flex items-start gap-14 max-[1000px]:w-full w-1/3 laylay !p-0'>
              <LayerCV
                className='flex-col !items-end gap-4 !bg-[#00000000] !p-10 rounded-3xl'
                title={t('openclassroom.dip.title')}
                description='OpenClassRoom'
                date='Nov 2023'
              />
            </Parented>

            <Parented className='flex items-start gap-14  laylay max-[1000px]:w-full w-1/3 !p-0'>
              <LayerCV
                className=' flex-col !items-end gap-4 !bg-[#00000000] !p-10  rounded-3xl'
                title={t('popschool.dip.title')}
                description='PopSchool - Valenciennes'
                date='2020'
              />
            </Parented>

            <Parented className='flex items-start gap-14 max-[1000px]:w-full laylay w-1/3 !p-0'>
              <LayerCV
                className=' !items-end flex-col gap-4 !p-10 !bg-[#00000000] rounded-3xl !text-white'
                title={t('bac.dip.title')}
                description='Lycée Arthur Rimabud - Sin le Noble'
                date='Juin 2016'
              />
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
