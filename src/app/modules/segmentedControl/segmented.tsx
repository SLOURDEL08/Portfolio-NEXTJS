import React, { useState, useEffect } from 'react';
import '@/app/globals.scss';
import { useTranslation } from 'react-i18next';
import { Typography } from '@/app/modules/typography/typography';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/i18n';
import { useLocale } from '@/app/modules/useLocale';
import useResponsiveProjects from '@/app/modules/segmentedControl/useResponsiveProjects'; // Importer le hook personnalisé
import { Project } from '@/app/modules/types/types'; // Importer le type partagé

interface SegmentedProps {
  useFilters?: boolean;
  numCols?: number | string;
  numProjects?: number | 'all';
  responsiveBreakpoints?: { [key: string]: number };
  className?: string;
  onProjectChange?: (project: Project) => void;
  selectedProjectIndex?: number; // Ajoutez cette ligne pour déclarer la prop selectedProjectIndex
}

const Segmented: React.FC<SegmentedProps> = ({
  useFilters = true,
  numCols = 'grid-cols-2',
  numProjects = 'all',
  responsiveBreakpoints = {},
  className = '',
  onProjectChange,
}) => {
  const { t, i18n } = useTranslation(); // Appel de useTranslation en haut du composant
  const { locale, handleLanguageChange } = useLocale(); // Appel de useLocale en haut du composant
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('Tous');
  const responsiveNumProjects = useResponsiveProjects(numProjects === 'all' ? Infinity : numProjects, responsiveBreakpoints);

  useEffect(() => {
    // Dépendance ajoutée : i18n
    console.log('Current language:', i18n.language);
  }, [i18n]); // Ajoutez 'i18n' comme dépendance ici

  useEffect(() => {
    import('@/app/data/project.json')
      .then(json => {
        const limitedProjects = responsiveNumProjects === Infinity ? json.default : json.default.slice(0, responsiveNumProjects);
        setProjects(limitedProjects);
        if (onProjectChange) {
          onProjectChange(limitedProjects[0]); // Définir le premier projet comme projet sélectionné initial
        }
      })
      .catch(error => console.error('Erreur lors du chargement des données:', error));
  }, [responsiveNumProjects, onProjectChange]);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleProjectSelect = (project: Project) => {
    if (onProjectChange) {
      onProjectChange(project);
    }
  };

  const gridColsClass = `${numCols}`;

  if (typeof numCols === 'string' && !['grid-cols-2', 'grid-cols-4', 'grid-cols-3', 'grid-col'].includes(numCols)) {
    console.error("numCols doit être soit 'grid-cols-2' soit 'grid-cols-4'.");
    return null;
  }


  return (
    <div className={`w-full h-full ${className}`}>
      {useFilters && (
        <section className='fivefilter'>
          <div className="segmented-controls square">
            <input id="five-1" name="five" type="radio" checked={selectedFilter === 'Tous'} onChange={() => handleFilterChange('Tous')} />
            <label htmlFor="five-1" className='tdf'>{t('label.segmented')}</label>
            {['Wordpress', 'Front-end', 'Back-end', 'Full-stack', 'Design'].map(category => (
              <React.Fragment key={category}>
                <input id={`five-${category.toLowerCase()}`} name="five" type="radio" checked={selectedFilter === category} onChange={() => handleFilterChange(category)} />
                <label htmlFor={`five-${category.toLowerCase()}`}>{category}</label>
              </React.Fragment>
            ))}
          </div>
        </section>
      )}

      <div className={`justify-center h-full grid ${gridColsClass} max-[1279px]:grid-cols-3 mediagride  max-[900px]:grid-cols-2 gap-8 ${useFilters ? 'mt-8' : ''}`}>
        {projects.map(project => (
          <div
            key={project.id}
            className={`project-item projectadow w-[100%] flex items-end h-[100%] rounded-3xl relative ${useFilters && selectedFilter !== 'Tous' && !project.categories.includes(selectedFilter) && 'hidden'}`}
            onClick={() => handleProjectSelect(project)} // Appeler handleProjectSelect lors de la sélection d'un projet
          >
            <Image src={project.image} width="500" height="500" alt={project.title} className='h-[100%] w-[100%] rounded-3xl object-cover object-left grayzc' />
            <div className={`overlay-projectitem`}>
              <div className='overlay-projectitem-content'>
                <div className='flex flex-col gap-2 w-[100%]'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <Image src={project.symbol} width="25" height="25" alt='de' className='min-h-[25px] min-w-[25px] object-cover rounded shadowingsymbol' />
                      <Typography theme='white' weight='bold' variant='body-base' component='p' fontFamily='ClashDisplay' className='text-left hover:text-[white] linked-color'>
                        {project.title}
                      </Typography>
                    </div>
                    <Link className='p-3 rounded-full linaked min-w-[32px] w-[35px]' href={`/project/${project.id}`} >
                      <Image src="/top-right-arrow.png" width="15" height="15" alt='' className='grayscale-2' />
                    </Link>
                  </div>
                  <div className='tagoverlay flex justify-start gap-4'>
                    {project.tags.slice(0, 2).map(tag => (
                      <button className='' key={tag}>{tag}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Segmented;
