import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@/app/modules/typography/typography';
import useResponsiveProjects from '@/app/modules/segmentedControl/useResponsiveProjects';
import { Project } from '@/app/modules/types/types';

import '@/app/globals.scss';

interface SegmentedProps {
  useFilters?: boolean;
  numCols?: number | string;
  numProjects?: number | 'all';
  responsiveBreakpoints?: { [key: string]: number };
  className?: string;
  onProjectChange?: (project: Project) => void;
  frontEndProject?: boolean;
}

const Segmented: React.FC<SegmentedProps> = ({
  useFilters = true,
  numCols = 'grid-cols-2',
  numProjects = 'all',
  responsiveBreakpoints = {},
  className = '',
  onProjectChange,
  frontEndProject = false,
}) => {
  const { t, i18n } = useTranslation('common');
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('Tous');
  const [isLoading, setIsLoading] = useState(true);
  const responsiveNumProjects = useResponsiveProjects(
    numProjects === 'all' ? Infinity : numProjects,
    responsiveBreakpoints
  );

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const { default: projectsData } = await import('@/app/data/project.json');
        let filteredData = projectsData as Project[];

        if (frontEndProject) {
          filteredData = filteredData.filter((project) => project.categories.includes('Front-end'));
        }

        const shuffledData = shuffleArray(filteredData);
        const limitedProjects =
          responsiveNumProjects === Infinity
            ? shuffledData
            : shuffledData.slice(0, responsiveNumProjects);

        setProjects(limitedProjects);
        if (onProjectChange && limitedProjects.length > 0) {
          onProjectChange(limitedProjects[0]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
        setIsLoading(false);
      }
    };

    loadProjects();
  }, [responsiveNumProjects, onProjectChange, frontEndProject]);

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleProjectSelect = (project: Project) => {
    if (onProjectChange) {
      onProjectChange(project);
    }
  };

  const gridColsClass = `${numCols}`;

  if (isLoading || !i18n.isInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`w-full h-full ${className}`}>
      {useFilters && !frontEndProject && (
        <section className='fivefilter'>
          <div className='segmented-controls square'>
            <input
              id='five-1'
              name='five'
              type='radio'
              checked={selectedFilter === 'Tous'}
              onChange={() => handleFilterChange('Tous')}
            />
            <label htmlFor='five-1' className='tdf'>
              {t('general.all')}
            </label>
            {['Front-end', 'Back-end', 'Full-stack', 'Wordpress', 'Design'].map((category) => (
              <React.Fragment key={category}>
                <input
                  id={`five-${category.toLowerCase()}`}
                  name='five'
                  type='radio'
                  checked={selectedFilter === category}
                  onChange={() => handleFilterChange(category)}
                />
                <label htmlFor={`five-${category.toLowerCase()}`}>{category}</label>
              </React.Fragment>
            ))}
          </div>
        </section>
      )}

      <div
        className={`justify-center h-full grid ${gridColsClass} max-[1279px]:grid-cols-3 mediagride  max-[900px]:grid-cols-2 gap-8 ${
          useFilters ? 'mt-8' : ''
        }`}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-item projectadow w-[100%] flex items-end h-[100%] rounded-3xl relative ${
              useFilters &&
              selectedFilter !== 'Tous' &&
              !project.categories.includes(selectedFilter) &&
              'hidden'
            }`}
            onClick={() => handleProjectSelect(project)}
          >
            <Image
              src={project.image}
              width={500}
              height={500}
              alt={project.title}
              className='h-[100%] w-[100%] rounded-3xl object-cover object-left grayzc'
            />
            <div className={`overlay-projectitem`}>
              <div className='overlay-projectitem-content'>
                <div className='flex flex-col gap-2 w-[100%]'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <Image
                        src={project.symbol}
                        width={25}
                        height={25}
                        alt='de'
                        className='min-h-[25px] min-w-[25px] object-cover rounded shadowingsymbol'
                      />
                      <Typography
                        theme='white'
                        weight='bold'
                        variant='body-base'
                        component='p'
                        fontFamily='ClashDisplay'
                        className='text-left hover:text-[white] linked-color'
                      >
                        {project.title}
                      </Typography>
                    </div>
                    <Link
                      className='p-3 rounded-full linaked min-w-[32px] w-[35px]'
                      href={`/project/${project.id}`}
                    >
                      <Image
                        src='/top-right-arrow.png'
                        width={15}
                        height={15}
                        alt=''
                        className='grayscale-2'
                      />
                    </Link>
                  </div>
                  <div className='tagoverlay flex justify-start gap-4'>
                    {project.tags.slice(0, 2).map((tag) => (
                      <button className='' key={tag}>
                        {tag}
                      </button>
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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
    },
  };
};

export default Segmented;
