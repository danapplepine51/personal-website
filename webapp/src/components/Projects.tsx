import React from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '../lib/data';
import Project from './Project'
import { useSectionInView } from '../lib/hooks';

export default function Projects() {
    // const {ref, inView} = useInView({
    //     threshold: 0.5,
    // });
    // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    // useEffect(() => {
    //     if (inView  && Date.now() - timeOfLastClick > 1000 ){
    //         setActiveSection("Projects");
    //     }
    // }, [inView, setActiveSection, timeOfLastClick]);
    const { ref } = useSectionInView('Projects', 0.3);

  return (
    <section ref={ref} id="projects" className='scroll-mt-28 mb-28'>
        <SectionHeading>My Projects</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
        </div>
    </section>
  );
}

