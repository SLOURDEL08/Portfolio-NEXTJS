import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import projectsData from '@/app/data/project.json';
import Layout from '@/app/modules/layout/layout';
import Image from "next/image"
import { Typography } from '@/app/modules/typography/typography';
import Main from '@/app/modules/main/main';
import Slider from '@/app/modules/slider/slider';
import TransitionPage from '@/app/modules/transitionPage/transitionPage';

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
    mkt:string;
    // Ajoutez d'autres propriétés pour les images de la galerie au besoin
  };
}

const ProjectDetailsPage = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [selectedSection, setSelectedSection] = useState<string>('presentation'); // État pour suivre la section sélectionnée
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      // Charger les données des projets depuis le fichier JSON
      try {
        const data: Project[] = projectsData as Project[];
        const foundProject = data.find(project => project.id.toString() === id);
        if (foundProject) {
          setProject(foundProject);
        } else {
          // Si le projet n'est pas trouvé, redirige vers la page 404
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
    // Si le projet n'est pas encore chargé, affiche un message de chargement par exemple
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

          <Typography theme='white' weight='bold' variant='h3' component='h1' fontFamily='ClashDisplay' className='bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA] text-left max-[900px]:text-3xl projectpp semib'>
            {project.title}
          </Typography>
        </div>
      </div>
      <div className='mt-10 py-0 rounded-3xl w-[100%] max-[900px]:w-[100%] grid grid-cols-3 justify-start gap-10 max-[900px]:gap-8 max-[700px]:flex max-[900px]:flex-wrap max-[900px]:h-[1 max-[900px]:mt-8'>
            {/* Barre de navigation */}
            <div className={`flex items-center justify-between cursor-pointer max-[900px]:w-[100%] handled p-4 px-6 transit rounded-2xl ${selectedSection === 'presentation' ? 'activesection' : ''}`} onClick={() => handleSectionClick('presentation')}>
  <Typography theme='white' weight='medium' variant='lead' component='span' fontFamily='SanFrancisco'>
    Présentation
  </Typography>
  <Image src="/dashboard.png" width="23" height="23" alt='de' className='' />
</div>

<div className={`flex items-center justify-between cursor-pointer max-[900px]:w-[100%] handled p-4 px-6 transit rounded-2xl ${selectedSection === 'ressources' ? 'activesection' : ''}`} onClick={() => handleSectionClick('ressources')}>
  <Typography theme='white' weight='medium' variant='lead' component='span' fontFamily='SanFrancisco'>
    Ressources
  </Typography>
  <Image src="/open-file.png" width="25" height="25" alt='de' className='' />
</div>

<div className={`flex items-center justify-between cursor-pointer max-[900px]:w-[100%] handled p-4 px-6 transit rounded-2xl ${selectedSection === 'gallery' ? 'activesection' : ''}`} onClick={() => handleSectionClick('gallery')}>
  <Typography theme='white' weight='medium' variant='lead' component='span' fontFamily='SanFrancisco'>
    Gallery
  </Typography>
  <Image src="/gallery.png" width="25" height="25" alt='de' className='' />
</div>

            
         
            {/* Ajoutez des boutons similaires pour d'autres sections avec des fonctions onClick correspondantes */}
          </div>
        <div className='flex pt-10 gap-10 max-[900px]:block max-[900px]:pt-0'>
         
          <div className=' bg-[#ffffff20] p-10 max-[900px]:p-8 rounded-3xl w-[100%] max-[900px]:w-[100%] max-[900px]:mt-8 parentproject '>
            {/* Affichage conditionnel des sections */}
            {selectedSection === 'presentation' && (
              <div className='presentation-block flex flex-col gap-8 '>
                { <div className='liens-block flex flex-col gap-8'>
<Image src={project.image} width="800" height="500" alt='de' className='w-[100%] h-[150px] object-cover object-top rounded-3xl'/>
<div className='flex justify-around gap-0 '>
<div className='flex flex-wrap items-center justify-center gap-3 w-[auto]'>


    <Typography theme="graylight" weight="medium" variant="body-sm" component="p" fontFamily="ClashDisplay" className="p-2 bg-[#00000040]  transz  rounded-lg px-3">
    <b className='font-black	'>🧑‍💻&nbsp;&nbsp;&nbsp;#</b>PERSONNEL
    </Typography>
      </div>
  <div className='flex flex-wrap items-center justify-center gap-3 w-[auto]'>
 

    <Typography theme="graylight" weight="medium" variant="body-sm" component="p" fontFamily="ClashDisplay" className="p-2 bg-[#00000040] transz rounded-lg px-3">
    🗓️&nbsp;&nbsp;&nbsp;03/2024
    </Typography>
  </div>
 
  <div className='flex flex-wrap items-center justify-center gap-3 w-[auto]'>
 
    <Typography theme="graylight" weight="medium" variant="body-sm" component="p" fontFamily="ClashDisplay" className="p-2 bg-[#00000040]  transz  rounded-lg px-3">
    ⏳&nbsp;&nbsp;&nbsp;≈ 6 À 10 HEURES
    </Typography>
      </div>
</div>
    <Typography theme="white" weight="light" variant="body-base" component="span" fontFamily="Inter" className="leading-10">
      {project.description}
    </Typography>

      
    
    

              </div>}
              </div>
            )}
              {selectedSection === 'ressources' && project.gallery && (
              <div className='documentation-block flex flex-col gap-8'>
                { <div className=''>
                  <div className='flex gap-8'>
                  <div className='flex flex-col gap-8 w-[30%]'> 
                  
                  <div className='relative wek'>
                  <Image src={project.gallery.mkt} width="500" height="300" alt='de' className='h-full w-[200px] object-cover object-left  rounded-3xl' />
                  
                  <div className='overmaket rounded-3xl flex justify-start items-center'>
                  <Image src="/linked.png" width="60" height="60" alt='de' className='' />
                  
                  </div>
                  </div>
                  </div>
                  <div className='flex flex-col gap-8 w-[70%]'>
               
              
              <div className='exp-sec grid'>
              <Typography theme='white' weight='medium' variant='body-lg' component='span' fontFamily='ClashDisplay' className='mb-6'>
          Quelques mots clés &nbsp;&nbsp;⬇️
        </Typography>
        <div className='flex justify-start items-center flex-wrap gap-x-8 capitalize gap-y-6 italic'>
        {project.tags.map((tag, index) => (
    <Typography 
      key={index} 
      theme='graylight' 
      weight='light' 
      variant='body-sm' 
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
<div></div>
              </div>}
              </div>
            )}
            {selectedSection === 'gallery' && project.gallery && (
              <div className='gallery-block flex flex-col gap-8'>
                { <div className='liens-block flex flex-col gap-8'>
                    <div className='flex gap-8'>
                      <div className='w-[30%]'>
                      <Image src={project.gallery.topleft} width="500" height="300" alt='de' className='h-[100px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl' />

                      </div>

                      <div className='w-[70%]'>
                      <Image src={project.gallery.topright} width="500" height="300" alt='de' className='h-[100px] w-[100%] transitioned hover:brightness-150 object-cover object-left  rounded-3xl' />

                      </div>
                    </div>
                    <div className='flex gap-8'>
                    <div className='flex gap-8 flex-wrap w-[70%]'>
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
                    <div className='flex gap-8 flex-wrap w-[30%]'>
                    <div className='w-[100%]'>
                      <Image src={project.gallery.vertical} width="500" height="300" alt='de' className=' w-[100%] imglong  transitioned hover:brightness-150 object-cover object-left  rounded-3xl' />

                      </div>
                     
                    </div>
                    </div>
                    
                    

              </div>}
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
