import { useState, useEffect } from 'react';

const useResponsiveProjects = (defaultValue: number, breakpoints: { [key: string]: number }): number => {
  const [numProjects, setNumProjects] = useState(defaultValue);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newValue = defaultValue;

      for (const [breakpoint, value] of Object.entries(breakpoints)) {
        if (width <= parseInt(breakpoint)) {
          newValue = value;
          break;
        }
      }

      setNumProjects(newValue);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [defaultValue, breakpoints]);

  return numProjects;
};

export default useResponsiveProjects;
