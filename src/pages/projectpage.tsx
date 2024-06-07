// pages/project/[id].tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import projectsData from '@/app/data/project.json';

interface Project {
  id: number;
  title: string;
  categories: string[];
  tags: string[];
  image: string;
  symbol: string;
  link: string;
}

const ProjectDetailsPage = () => {
  const [project, setProject] = useState<Project | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      // Charger les données des projets depuis le fichier JSON
      try {
        const data: Project[] = projectsData;
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

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>Catégories: {project.categories.join(', ')}</p>
      <p>Tags: {project.tags.join(', ')}</p>
      {/* Ajoutez ici d'autres détails du projet */}
    </div>
  );
};

export default ProjectDetailsPage;
