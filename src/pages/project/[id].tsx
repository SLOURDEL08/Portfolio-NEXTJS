import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/app/modules/layout/layout';
import Image from 'next/image';
import { Typography } from '@/app/modules/typography/typography';
import Main from '@/app/modules/main/main';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';
import Link from 'next/link';
import { useTranslation } from 'react-i18next'; // Import de useTranslation pour la traduction
import { Project } from '@/app/modules/types/types';
import projectsData from '@/app/data/project.json';

const ProjectDetailsPage: React.FC = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [selectedSection, setSelectedSection] = useState<string>('presentation');
  const router = useRouter();
  const { id } = router.query;
  const { t, i18n } = useTranslation(); // Utilisation de useTranslation pour la traduction

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Project[] = projectsData as Project[];
        const foundProject = data.find((project) => project.id.toString() === id);
        if (foundProject) {
          setProject(foundProject);
        } else {
          router.push('/404');
        }
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id, router]);

  useEffect(() => {
    console.log('Current language:', i18n.language);
  }, [i18n]);

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
                width='50'
                height='50'
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

          <div className='mobileidmenu mt-10 py-0 rounded-3xl w-[100%] max-[900px]:w-[100%] flex justify-start gap-10 max-[900px]:gap-8 max-[700px]:flex  min-[900px]:hidden max-[900px]:mt-8 '>
            <div
              className={`flex items-center justify-between gap-8 cursor-pointer handled max-[500px]:p-3 max-[500px]:px-4 max-[500px]:gap-4 p-4 px-6 transit rounded-2xl ${
                selectedSection === 'presentation' ? 'activesection' : ''
              }`}
              onClick={() => handleSectionClick('presentation')}
            >
              {selectedSection === 'presentation' && (
                <Typography
                  theme='white'
                  weight='medium'
                  variant='lead'
                  component='span'
                  fontFamily='SanFrancisco'
                  className='max-[500px]:text-lg'
                >
                  Présentation
                </Typography>
              )}
              <Image
                src='/dashboard.png'
                width='23'
                height='23'
                alt='de'
                className='max-[500px]:w-[20px] max-[500px]:h-[20px]'
              />
            </div>
            <div
              className={`flex items-center justify-between gap-8 cursor-pointer max-[500px]:p-3 max-[500px]:px-4 max-[500px]:gap-4 handled p-4 px-6 transit rounded-2xl ${
                selectedSection === 'ressources' ? 'activesection' : ''
              }`}
              onClick={() => handleSectionClick('ressources')}
            >
              {selectedSection === 'ressources' && (
                <Typography
                  theme='white'
                  weight='medium'
                  variant='lead'
                  component='span'
                  fontFamily='SanFrancisco'
                  className='max-[500px]:text-lg'
                >
                  Ressources
                </Typography>
              )}
              <Image
                src='/open-file.png'
                width='25'
                height='25'
                alt='de'
                className='max-[500px]:w-[20px] max-[500px]:h-[20px]'
              />
            </div>

            <div
              className={`flex items-center justify-between gap-8 cursor-pointer max-[500px]:p-3 max-[500px]:px-4 max-[500px]:gap-4 handled p-4 px-6 transit rounded-2xl ${
                selectedSection === 'gallery' ? 'activesection' : ''
              }`}
              onClick={() => handleSectionClick('gallery')}
            >
              {selectedSection === 'gallery' && (
                <Typography
                  theme='white'
                  weight='medium'
                  variant='lead'
                  component='span'
                  fontFamily='SanFrancisco'
                  className='max-[500px]:text-lg'
                >
                  Gallery
                </Typography>
              )}
              <Image
                src='/gallery.png'
                width='25'
                height='25'
                alt='de'
                className='max-[500px]:w-[20px] max-[500px]:h-[20px]'
              />
            </div>
          </div>

          <div className='flex pt-10 gap-10 min-[900px]:w-[100%] max-[900px]:block max-[900px]:pt-0'>
            <div className='flex flex-col gap-8 w-[30%] max-[900px]:hidden'>
              <div
                className={`p-4 px-6 w-full flex cursor-pointer justify-between handled rounded-2xl ${
                  selectedSection === 'presentation' ? 'activesection' : ''
                }`}
                onClick={() => handleSectionClick('presentation')}
              >
                <Typography
                  theme='white'
                  weight='medium'
                  variant='lead'
                  component='span'
                  fontFamily='SanFrancisco'
                  className='max-[500px]:text-lg'
                >
                  Présentation
                </Typography>
                <Image
                  src='/dashboard.png'
                  width='23'
                  height='23'
                  alt='de'
                  className='max-[500px]:w-[20px] max-[500px]:h-[20px]'
                />
              </div>
              <div
                className={`p-4 px-6 w-full flex cursor-pointer justify-between handled rounded-2xl ${
                  selectedSection === 'ressources' ? 'activesection' : ''
                }`}
                onClick={() => handleSectionClick('ressources')}
              >
                <Typography
                  theme='white'
                  weight='medium'
                  variant='lead'
                  component='span'
                  fontFamily='SanFrancisco'
                  className='max-[500px]:text-lg'
                >
                  Ressources
                </Typography>
                <Image
                  src='/open-file.png'
                  width='25'
                  height='25'
                  alt='de'
                  className='max-[500px]:w-[20px] max-[500px]:h-[20px]'
                />
              </div>
              <div
                className={`p-4 px-6 w-full flex cursor-pointer justify-between handled rounded-2xl ${
                  selectedSection === 'gallery' ? 'activesection' : ''
                }`}
                onClick={() => handleSectionClick('gallery')}
              >
                <Typography
                  theme='white'
                  weight='medium'
                  variant='lead'
                  component='span'
                  fontFamily='SanFrancisco'
                  className='max-[500px]:text-lg'
                >
                  Gallery
                </Typography>
                <Image
                  src='/gallery.png'
                  width='25'
                  height='25'
                  alt='de'
                  className='max-[500px]:w-[20px] max-[500px]:h-[20px]'
                />
              </div>
            </div>

            <div className=' bg-[#ffffff20] p-10 max-[900px]:p-8 rounded-3xl w-[70%] max-[900px]:w-[100%] max-[900px]:mt-8 max-[900px]:mb-4 parentproject '>
              {/* Affichage conditionnel des sections */}
              {selectedSection === 'presentation' && (
                <div className='presentation-block flex flex-col gap-8 '>
                  <div className='liens-block relative overflow-hidden gap-10 max-[1100px]:flex-col'>
                    <Image
                      src={project.image}
                      width='800'
                      height='500'
                      alt='de'
                      className='w-[100%]  h-[200px] object-cover object-top rounded-xl  border-gray-800'
                    />
                    <div
                      className='absolute top-0 right-0 backdrop-blur-sm shadowed mask	 px-3 py-1.5 bg-[#ffffff80]

 rounded-xl mt-4 mr-4  '
                    >
                      <Typography
                        theme='black'
                        weight='medium'
                        variant='body-base'
                        component='p'
                        fontFamily='Inter'
                        className=''
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
                      {t(`project.${project.slug}.description.${i18n.language}`)}
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
                          width='800'
                          height='500'
                          alt='de'
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
                        Maquette
                      </Typography>
                      <Image
                        src='/top-right-arrow.png'
                        width='800'
                        height='500'
                        alt='de'
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
                            Quelques mots clés &nbsp;&nbsp;⬇️
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
                          width='500'
                          height='300'
                          alt='de'
                          className='h-[100px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl'
                        />
                      </div>
                      <div className='w-[70%]'>
                        <Image
                          src={project.gallery.topright}
                          width='500'
                          height='300'
                          alt='de'
                          className='h-[100px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl'
                        />
                      </div>
                    </div>
                    <div className='flex max-[550px]:flex-col gap-8'>
                      <div className='flex gap-8 flex-wrap  max-[550px]:w-full w-[70%]'>
                        <div className='w-[100%]'>
                          <Image
                            src={project.gallery.big}
                            width='500'
                            height='300'
                            alt='de'
                            className='h-[200px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl'
                          />
                        </div>
                        <div className='flex w-full gap-8'>
                          <div className='w-[60%]'>
                            <Image
                              src={project.gallery.botright}
                              width='500'
                              height='300'
                              alt='de'
                              className='h-[200px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl'
                            />
                          </div>
                          <div className='w-[40%]'>
                            <Image
                              src={project.gallery.botleft}
                              width='500'
                              height='300'
                              alt='de'
                              className='h-[200px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='flex gap-8 flex-wrap  max-[550px]:w-full w-[30%]'>
                        <div className='w-[100%]'>
                          <Image
                            src={project.gallery.vertical}
                            width='500'
                            height='300'
                            alt='de'
                            className=' w-[100%]  max-[550px]:max-h-[250px] h-full imglong  transitioned hover:brightness-150 object-cover object-left  rounded-3xl'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Ajoutez des conditions similaires pour d'autres sections */}
            </div>
          </div>
        </Main>
      </TransitionPage>
    </Layout>
  );
};

export default ProjectDetailsPage;
