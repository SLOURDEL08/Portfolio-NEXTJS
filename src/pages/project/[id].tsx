import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/app/modules/layout/layout';
import Image from 'next/image';
import { Typography } from '@/app/modules/typography/typography';
import Main from '@/app/modules/main/main';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';
import Link from 'next/link';
import projectsData from '@/app/data/project.json';
import { useLocale } from '@/app/modules/useLocale';

// Mise à jour du type Project
interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: {
    fr: string;
    en: string;
    es: string;
  };
  symbol: string;
  categories: string[];
  tags: string[];
  link: string;
  hoverBackgroundColor: string;
  repoUrl: string;
  pageUrl: string;
  gallery: {
    topleft: string;
    topright: string;
    big: string;
    botright: string;
    botleft: string;
    vertical: string;
  };
}

interface ProjectDetailsPageProps {
  project: Project | null;
}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({ project: initialProject }) => {
  const { t } = useTranslation('common');
  const [project, setProject] = useState<Project | null>(initialProject);
  const [selectedSection, setSelectedSection] = useState<string>('presentation');
  const router = useRouter();
  const { locale, handleLanguageChange } = useLocale();

  useEffect(() => {
    if (!project && router.query.id) {
      const foundProject = projectsData.find((p) => p.id.toString() === router.query.id) as
        | Project
        | undefined;
      if (foundProject) {
        setProject(foundProject);
      } else {
        router.push('/404');
      }
    }
  }, [router, project]);

  if (!project) {
    return <div>Chargement en cours...</div>;
  }

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <Layout>
      <TransitionPage>
        <Main className='overflow-hidden p-24 max-[900px]:p-8'>
          <div className='grid pt-2 grid-cols-1 gap-10 py-4 max-[900px]:pt-16 max-[900px]:pb-0'>
            <div className='flex gap-8 items-center justify-center max-[900px]:justify-start max-md:gap-4 '>
              <Image
                src={project.symbol}
                width={50}
                height={50}
                alt='de'
                className='min-w-[45px] min-h-[45px] object-cover filesimg rounded-xl max-[900px]:w-[45px] max-[900px]:h-[45px] shadowingsymbol'
              />
              <Typography
                theme='graylight'
                weight='bold'
                variant='h3'
                component='h1'
                fontFamily='ClashDisplay'
                className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left max-[900px]:text-3xl projectpp semib'
              >
                {project.title}
              </Typography>
            </div>
          </div>

          {/* Mobile menu */}
          <div className='mobileidmenu mt-10 py-0 rounded-3xl w-[100%] max-[900px]:w-[100%] flex justify-start gap-10 max-[900px]:gap-8 max-[700px]:flex  min-[900px]:hidden max-[900px]:mt-8 '>
            {['presentation', 'ressources', 'gallery'].map((section) => (
              <div
                key={section}
                className={`flex items-center justify-between gap-8 cursor-pointer handled max-[500px]:p-3 max-[500px]:px-4 max-[500px]:gap-4 p-4 px-6 transit rounded-2xl ${
                  selectedSection === section ? 'activesection' : ''
                }`}
                onClick={() => handleSectionClick(section)}
              >
                {selectedSection === section && (
                  <Typography
                    theme='white'
                    weight='medium'
                    variant='lead'
                    component='span'
                    fontFamily='SanFrancisco'
                    className='max-[500px]:text-lg'
                  >
                    {t(section)}
                  </Typography>
                )}
                <Image
                  src={`/${section}.png`}
                  width={23}
                  height={23}
                  alt={section}
                  className='max-[500px]:w-[20px] max-[500px]:h-[20px]'
                />
              </div>
            ))}
          </div>

          <div className='flex pt-10 gap-10 min-[900px]:w-[100%] max-[900px]:block max-[900px]:pt-0'>
            {/* Desktop menu */}
            <div className='flex flex-col gap-8 w-[30%] max-[900px]:hidden'>
              {['Presentation', 'Ressources', 'Gallery'].map((section) => (
                <div
                  key={section}
                  className={`p-4 px-6 w-full flex items-center cursor-pointer justify-between handled rounded-2xl ${
                    selectedSection === section ? 'activesection' : ''
                  }`}
                  onClick={() => handleSectionClick(section)}
                >
                  <Typography
                    theme='white'
                    weight='medium'
                    variant='lead'
                    component='span'
                    fontFamily='SanFrancisco'
                    className='max-[500px]:text-lg'
                  >
                    {t(section)}
                  </Typography>
                  <Image
                    src={`/${section}.png`}
                    width={23}
                    height={23}
                    alt={section}
                    className='max-[500px]:w-[20px] max-[500px]:h-[20px]'
                  />
                </div>
              ))}
            </div>

            {/* Content */}
            <div className=' bg-[#ffffff20] p-10 max-[900px]:p-8 rounded-3xl w-[70%] max-[900px]:w-[100%] max-[900px]:mt-8 max-[900px]:mb-4 parentproject '>
              {selectedSection === 'presentation' && (
                <div className='presentation-block flex flex-col gap-8 '>
                  <div className='liens-block relative overflow-hidden gap-10 max-[1100px]:flex-col'>
                    <Image
                      src={project.image}
                      width={800}
                      height={500}
                      alt='de'
                      className='w-[100%]  h-[200px] object-cover object-top rounded-xl  border-gray-800'
                    />
                    <div className='absolute top-0 right-0 backdrop-blur-sm shadowed mask px-3 py-1 bg-[#ffffff60] rounded-lg mt-4 mr-4'>
                      <Typography
                        theme='black'
                        weight='medium'
                        variant='body-base'
                        component='p'
                        fontFamily='ClashDisplay'
                        className='text-transparen'
                      >
                        09/2014
                      </Typography>
                    </div>
                  </div>

                  <div className=''>
                    <Typography
                      theme='graylight'
                      weight='light'
                      variant='lead'
                      component='p'
                      fontFamily='SanFrancisco'
                      className='text-left w-[100%] max-[680px]:text-lg max-[450px]:text-lg max-[680px]:leading-loose max-[450px]:leading-loose leading-loose'
                    >
                      {t('projects.netflix.description')}
                    </Typography>
                  </div>

                  <div className='inline-flex justify-start gap-10 rounded-xl flex-wrap gap-y-4'>
                    {project.repoUrl && (
                      <Link
                        href={project.repoUrl}
                        className='flex gap-2 items-center overhed px-4 py-2 rounded-xl'
                      >
                        <Typography
                          theme='white'
                          weight='medium'
                          variant='body-base'
                          component='span'
                          fontFamily='ClashDisplay'
                          className=''
                        >
                          Repository
                        </Typography>
                        <Image
                          src='/top-right-arrow.png'
                          width={14}
                          height={14}
                          alt='arrow'
                          className='max-w-[14px] max-h-[14px]'
                        />
                      </Link>
                    )}

                    <Link
                      href='https://github.com'
                      className='flex gap-2 items-center overhed px-4 py-2 rounded-xl'
                    >
                      <Typography
                        theme='white'
                        weight='medium'
                        variant='body-base'
                        component='span'
                        fontFamily='ClashDisplay'
                        className=''
                      >
                        Inspiration
                      </Typography>
                      <Image
                        src='/top-right-arrow.png'
                        width={14}
                        height={14}
                        alt='arrow'
                        className='max-w-[14px] max-h-[14px]'
                      />
                    </Link>
                  </div>
                </div>
              )}
              {selectedSection === 'ressources' && project.gallery && (
                <div className='documentation-block flex flex-col gap-8'>
                  <div className=''>
                    <div className='flex gap-8'>
                      <div className='flex flex-col gap-8 w-[100%]'>
                        <div className='exp-sec'>
                          <Typography
                            theme='white'
                            weight='medium'
                            variant='lead'
                            component='span'
                            fontFamily='ClashDisplay'
                            className=''
                          >
                            {t('keywords')} &nbsp;&nbsp;⬇️
                          </Typography>
                          <div className='flex justify-start items-center flex-wrap gap-x-8 capitalize gap-y-6 italic mt-6'>
                            {project.tags.map((tag, index) => (
                              <Typography
                                key={index}
                                theme='graylight'
                                weight='light'
                                variant='body-base'
                                component='span'
                                fontFamily='Inter'
                                className='p-2 px-3 bg-[#ffffff20]'
                              >
                                #{tag}
                              </Typography>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selectedSection === 'gallery' && project.gallery && (
                <div className='gallery-block flex flex-col gap-8'>
                  <div className='liens-block flex flex-col gap-8'>
                    <div className='flex gap-8'>
                      <div className='w-[30%]'>
                        <Image
                          src={project.gallery.topleft}
                          width={500}
                          height={300}
                          alt='top left'
                          className='h-[100px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl'
                        />
                      </div>
                      <div className='w-[70%]'>
                        <Image
                          src={project.gallery.topright}
                          width={500}
                          height={300}
                          alt='top right'
                          className='h-[100px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl'
                        />
                      </div>
                    </div>
                    <div className='flex max-[550px]:flex-col gap-8'>
                      <div className='flex gap-8 flex-wrap  max-[550px]:w-full w-[70%]'>
                        <div className='w-[100%]'>
                          <Image
                            src={project.gallery.big}
                            width={500}
                            height={300}
                            alt='big'
                            className='h-[200px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl'
                          />
                        </div>
                        <div className='flex w-full gap-8'>
                          <div className='w-[60%]'>
                            <Image
                              src={project.gallery.botright}
                              width={500}
                              height={300}
                              alt='bottom right'
                              className='h-[200px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl'
                            />
                          </div>
                          <div className='w-[40%]'>
                            <Image
                              src={project.gallery.botleft}
                              width={500}
                              height={300}
                              alt='bottom left'
                              className='h-[200px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='flex gap-8 flex-wrap  max-[550px]:w-full w-[30%]'>
                        <div className='w-[100%]'>
                          <Image
                            src={project.gallery.vertical}
                            width={500}
                            height={300}
                            alt='vertical'
                            className=' w-[100%]  max-[550px]:max-h-[250px] h-full imglong  transitioned hover:brightness-150 object-cover object-left  rounded-3xl'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Main>
      </TransitionPage>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale, params }) => {
  const { id } = params as { id: string };
  const project = projectsData.find((p) => p.id.toString() === id) as Project | undefined;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
      project: project || null,
    },
  };
};

export default ProjectDetailsPage;
