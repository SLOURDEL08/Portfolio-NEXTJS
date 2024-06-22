import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import projectsData from '@/app/data/project.json';
import Layout from '@/app/modules/layout/layout';
import Image from "next/image"
import { Typography } from '@/app/modules/typography/typography';
import Main from '@/app/modules/main/main';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  categories: string[];
  tags: string[];
  image: string;
  symbol: string;
  link: string;
  pageUrl: string;
  description?: string;
  repoUrl:string;
  gallery?: {
    topleft: string;
    topright: string;
    big: string;
    botleft: string;
    botright: string;
    vertical: string;
  };
}

const ProjectDetailsPage = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [selectedSection, setSelectedSection] = useState<string>('presentation');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Project[] = projectsData as Project[];
        const foundProject = data.find(project => project.id.toString() === id);
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

  if (!project) {
    return <div>Chargement en cours...</div>;
  }

  // Fonction de gestionnaire d'événements pour basculer entre les sections
  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  
  
  return (
    <Layout>
      <TransitionPage>
        <Main className='overflow-hidden p-24 max-[900px]:p-8'>
          <div className='grid pt-2 grid-cols-1 gap-10 py-4 max-[900px]:pt-16 max-[900px]:pb-0'>
            <div className='flex gap-8 items-center justify-center max-[900px]:justify-start '>
              <Image src={project.symbol} width="60" height="50" alt='de' className='filesimg rounded-xl max-[900px]:w-[45px] max-[900px]:h-[45px] shadowingsymbol'/>
              <Typography theme='graylight' weight='bold' variant='h3' component='h1' fontFamily='ClashDisplay' className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left max-[900px]:text-3xl projectpp semib'>
                {project.title}
              </Typography>
            </div>
          </div>

          <div className='mt-10 py-0 rounded-3xl w-[100%] max-[900px]:w-[100%] flex justify-start gap-10 max-[900px]:gap-8 max-[700px]:flex  min-[900px]:hidden max-[900px]:mt-8 '>
            {/* Barre de navigation */}
            <div className={`flex items-center justify-between gap-8 cursor-pointer handled max-[500px]:p-3 max-[500px]:px-4 max-[500px]:gap-4 p-4 px-6 transit rounded-2xl ${selectedSection === 'presentation' ? 'activesection' : ''}`} onClick={() => handleSectionClick('presentation')}>
              {selectedSection === 'presentation' && (
                <Typography theme='white' weight='medium' variant='lead' component='span' fontFamily='SanFrancisco' className='max-[500px]:text-lg'>
                  Présentation
                </Typography>
              )}
              <Image src="/dashboard.png" width="23" height="23" alt='de' className='max-[500px]:w-[20px] max-[500px]:h-[20px]' />
            </div>

            <div className={`flex items-center justify-between gap-8 cursor-pointer max-[500px]:p-3 max-[500px]:px-4 max-[500px]:gap-4 handled p-4 px-6 transit rounded-2xl ${selectedSection === 'ressources' ? 'activesection' : ''}`} onClick={() => handleSectionClick('ressources')}>
              {selectedSection === 'ressources' && (
                <Typography theme='white' weight='medium' variant='lead' component='span' fontFamily='SanFrancisco' className='max-[500px]:text-lg'>
                  Ressources
                </Typography>
              )}
              <Image src="/open-file.png" width="25" height="25" alt='de' className='max-[500px]:w-[20px] max-[500px]:h-[20px]' />
            </div>

            <div className={`flex items-center justify-between gap-8 cursor-pointer max-[500px]:p-3 max-[500px]:px-4 max-[500px]:gap-4 handled p-4 px-6 transit rounded-2xl ${selectedSection === 'gallery' ? 'activesection' : ''}`} onClick={() => handleSectionClick('gallery')}>
              {selectedSection === 'gallery' && (
                <Typography theme='white' weight='medium' variant='lead' component='span' fontFamily='SanFrancisco' className='max-[500px]:text-lg'>
                  Gallery
                </Typography>
              )}
              <Image src="/gallery.png" width="25" height="25" alt='de' className='max-[500px]:w-[20px] max-[500px]:h-[20px]' />
            </div>

            {/* Ajoutez des boutons similaires pour d'autres sections avec des fonctions onClick correspondantes */}
          </div>
       
          <div className='flex pt-10 gap-10 min-[900px]:w-[100%] max-[900px]:block max-[900px]:pt-0'>
       
<div className='flex flex-col gap-8 w-[30%] max-[900px]:hidden'>
  <div className={`p-4 px-6 w-full flex cursor-pointer justify-between handled rounded-2xl ${selectedSection === 'presentation' ? 'activesection' : ''}`} onClick={() => handleSectionClick('presentation')}>
    <Typography theme='white' weight='medium' variant='lead' component='span' fontFamily='SanFrancisco' className='max-[500px]:text-lg'>
      Présentation
    </Typography>
    <Image src="/dashboard.png" width="23" height="23" alt='de' className='max-[500px]:w-[20px] max-[500px]:h-[20px]' />
  </div>
  <div className={`p-4 px-6 w-full flex cursor-pointer justify-between handled rounded-2xl ${selectedSection === 'ressources' ? 'activesection' : ''}`} onClick={() => handleSectionClick('ressources')}>
    <Typography theme='white' weight='medium' variant='lead' component='span' fontFamily='SanFrancisco' className='max-[500px]:text-lg'>
      Ressources
    </Typography>
    <Image src="/open-file.png" width="25" height="25" alt='de' className='max-[500px]:w-[20px] max-[500px]:h-[20px]' />
  </div>
  <div className={`p-4 px-6 w-full flex cursor-pointer justify-between handled rounded-2xl ${selectedSection === 'gallery' ? 'activesection' : ''}`} onClick={() => handleSectionClick('gallery')}>
    <Typography theme='white' weight='medium' variant='lead' component='span' fontFamily='SanFrancisco' className='max-[500px]:text-lg'>
      Gallery
    </Typography>
    <Image src="/gallery.png" width="25" height="25" alt='de' className='max-[500px]:w-[20px] max-[500px]:h-[20px]' />
  </div>
</div>


        
            <div className=' bg-[#ffffff20] p-10 max-[900px]:p-8 rounded-3xl w-[70%] max-[900px]:w-[100%] max-[900px]:mt-8 max-[900px]:mb-4 parentproject '>
              {/* Affichage conditionnel des sections */}
              {selectedSection === 'presentation' && (
                <div className='presentation-block flex flex-col gap-8 '>
                  <div className='liens-block  gap-10 max-[1100px]:flex-col'>
                    <Image src={project.image} width="800" height="500" alt='de' className='w-[100%] h-[200px] object-cover object-top rounded-3xl'/>
                   
                    
                  </div>
                  <div className='flex justify-evenly gap-10 bg-lin p-3 rounded-xl flex-wrap gap-y-4'>
                     
                     <Link href="https://github.com" className='flex gap-4 items-center' >
                     <Image src="/github.png" width="800" height="500" alt='de' className='w-[23px] h-[23px]'/>

                       <Typography theme="white" weight="medium" variant="body-lg" component="p" fontFamily="ClashDisplay" className="">
                         REPOSITORY 
                       </Typography>
                       <Image src="/top-right-arrow.png" width="800" height="500" alt='de' className='w-[15px] h-[15px]'/>
                     </Link>
                     <div className='flex gap-4 items-center'>
                       <Typography theme="white" weight="medium" variant="body-lg" component="p" fontFamily="ClashDisplay" className="">
                         DATE &nbsp;:
                       </Typography>
                       <Typography theme="white" weight="light" variant="body-lg" component="p" fontFamily="ClashDisplay" className="">
                         10/02/2024
                       </Typography>
                     </div>
                     <div className='flex gap-4 items-center'>
                       <Typography theme="white" weight="medium" variant="body-lg" component="p" fontFamily="ClashDisplay" className="">
                         #FORMATION 
                       </Typography>
                     
                     </div>
                  
                  
                 </div>
                  
                  <div className='flex flex-col gap-6'>
               
               <Typography theme="graylight" weight="light" variant="lead" component="p" fontFamily="SanFrancisco" className="text-left  w-[100%] max-[680px]:text-lg max-[450px]:text-lg max-[680px]:leading-loose max-[450px]:leading-loose leading-loose">
                 {project.description}
               </Typography>
             </div>
           
                </div>
              )}
              {selectedSection === 'ressources' && project.gallery && (
                <div className='documentation-block flex flex-col gap-8'>
                  <div className=''>
                    <div className='flex gap-8'>
                     
                      <div className='flex flex-col gap-8 w-[100%]'>
                        <div className='exp-sec'>
                          <Typography theme='white' weight='medium' variant='body-lg' component='span' fontFamily='ClashDisplay' className=''>
                            Quelques mots clés &nbsp;&nbsp;⬇️
                          </Typography>
                          <div className='flex justify-start items-center flex-wrap gap-x-8 capitalize gap-y-6 italic mt-6'>
                            {project.tags.map((tag, index) => (
                              <Typography 
                                key={index} 
                                theme='graylight' 
                                weight='light' 
                                variant='body-sm' 
                                component="span"
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
                                <Image src={project.gallery.topleft} width="500" height="300" alt='de' className='h-[100px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl' />
                                </div>
                                <div className='w-[70%]'>
                                <Image src={project.gallery.topright} width="500" height="300" alt='de' className='h-[100px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl' />
                                </div>
                                </div>
                                <div className='flex max-[550px]:flex-col gap-8'>
                                <div className='flex gap-8 flex-wrap  max-[550px]:w-full w-[70%]'>
                                <div className='w-[100%]'>
                                <Image src={project.gallery.big} width="500" height="300" alt='de' className='h-[200px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl' />
                                </div>
                                <div className='flex w-full gap-8'>
                                <div className='w-[60%]'>
                                <Image src={project.gallery.botright} width="500" height="300" alt='de' className='h-[200px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl' />
                                </div>
                                <div className='w-[40%]'>
                                <Image src={project.gallery.botleft} width="500" height="300" alt='de' className='h-[200px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl' />
                                </div>
                                </div>
                                </div>
                                <div className='flex gap-8 flex-wrap  max-[550px]:w-full w-[30%]'>
                                <div className='w-[100%]'>
                                <Image src={project.gallery.vertical} width="500" height="300" alt='de' className=' w-[100%]  max-[550px]:max-h-[250px] h-full imglong  transitioned hover:brightness-150 object-cover object-left  rounded-3xl' />
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