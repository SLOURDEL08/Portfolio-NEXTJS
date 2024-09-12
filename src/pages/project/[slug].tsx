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
import ProjectGallery from '@/app/modules/ProjectGallery/ProjectGallery';

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
  date: string;
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
  const { locale } = useLocale();

  useEffect(() => {
    if (!project && router.query.slug) {
      const foundProject = projectsData.find((p) => p.slug === router.query.slug) as
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
    setSelectedSection(section.toLowerCase());
  };

  const sections = ['Presentation', 'Ressources', 'Gallery'];

  const getNextProject = () => {
    const currentIndex = projectsData.findIndex((p) => p.id === project.id);
    return projectsData[(currentIndex + 1) % projectsData.length];
  };

  // Fonction pour obtenir le projet précédent
  const getPreviousProject = () => {
    const currentIndex = projectsData.findIndex((p) => p.id === project.id);
    return projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  };

  const nextProject = getNextProject();
  const previousProject = getPreviousProject();

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
            {sections.map((section) => (
              <div
                key={section}
                className={`flex items-center justify-between gap-8 cursor-pointer handled max-[500px]:p-3 max-[500px]:px-4 max-[500px]:gap-4 p-4 px-6 transit rounded-2xl ${
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

          <div className='flex pt-10 gap-10 min-[900px]:w-[100%] max-[900px]:block max-[900px]:pt-0'>
            {/* Desktop menu */}
            <div className='flex flex-col gap-8 w-[30%] max-[900px]:hidden'>
              {sections.map((section) => (
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
            <div className='bg-[#ffffff20] p-10 max-[900px]:p-8 rounded-3xl w-[70%] max-[900px]:w-[100%] max-[900px]:mt-8 max-[900px]:mb-4 parentproject'>
              {selectedSection === 'presentation' && (
                <div className='presentation-block flex flex-col gap-8'>
                  <div className='liens-block relative overflow-hidden gap-10 max-[1100px]:flex-col'>
                    <Image
                      src={project.image}
                      width={800}
                      height={500}
                      alt='de'
                      className='w-[100%] h-[200px] object-cover object-top rounded-xl border-gray-800'
                    />
                    <div className='absolute ovhea grayscale  top-4 right-4 px-3 py-1 rounded-lg bg-gradient-to-br from-white/70 to-black/30 backdrop-filter backdrop-blur-sm'>
                      <Typography
                        theme='white'
                        weight='medium'
                        variant='body-base'
                        component='p'
                        fontFamily='ClashDisplay'
                        className='white '
                      >
                        {project.date}
                      </Typography>
                    </div>
                  </div>

                  <div>
                    <Typography
                      theme='graylight'
                      weight='light'
                      variant='lead'
                      component='p'
                      fontFamily='SanFrancisco'
                      className='text-left w-[100%] max-[680px]:text-lg max-[450px]:text-lg max-[680px]:leading-loose max-[450px]:leading-loose leading-loose'
                    >
                      {t(`projects.${project.slug}.description`)}
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
              {selectedSection === 'ressources' && (
                <div className='documentation-block flex flex-col gap-8'>
                  <div>
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
                <ProjectGallery project={project} />
              )}
            </div>
          </div>
          <div className='flex justify-between items-center mt-10'>
            <Link href={`/project/${previousProject.slug}`} passHref>
              <div className='flex items-center cursor-pointer hover:opacity-80 opacity-55 transition-all'>
                <Image src='/larrow.png' width={16} height={16} alt='Previous' />
                <Typography
                  theme='white'
                  weight='medium'
                  variant='body-base'
                  component='span'
                  fontFamily='ClashDisplay'
                  className='ml-2'
                >
                  {previousProject.title}
                </Typography>
              </div>
            </Link>
            <Link href={`/project/${nextProject.slug}`} passHref>
              <div className='flex items-center cursor-pointer hover:opacity-80 opacity-55 transition-all'>
                <Typography
                  theme='white'
                  weight='medium'
                  variant='body-base'
                  component='span'
                  fontFamily='ClashDisplay'
                  className='mr-2'
                >
                  {nextProject.title}
                </Typography>
                <Image src='/rarrow.png' width={16} height={16} alt='Next' />
              </div>
            </Link>
          </div>
        </Main>
      </TransitionPage>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params, locale, res }) => {
  const { slug } = params as { slug: string };
  let project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    // Vérifier si le slug est un ancien ID
    const projectById = projectsData.find((p) => p.id.toString() === slug);
    if (projectById) {
      res.setHeader('Location', `/project/${projectById.slug}`);
      res.statusCode = 301;
      res.end();
      return { props: {} };
    }
    return { notFound: true };
  }

  // Charger les traductions
  const translations = await serverSideTranslations(locale || 'en', ['common']);

  return {
    props: {
      project,
      ...translations,
    },
  };
};

export default ProjectDetailsPage;