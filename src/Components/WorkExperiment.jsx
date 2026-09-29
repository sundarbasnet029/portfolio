import { useState } from "react";
import { Divider } from "./Divider";
import { ProjectDrawer } from "./ProjectDrawer";
import { projectArray } from "../Data/data";

import bg1 from "../Assets/bg1.jpg";
import bg2 from "../Assets/bg2.jpg"
import bg3 from "../Assets/bg3.jpg"
import bg4 from "../Assets/bg4.jpg"
import bg5 from "../Assets/bg5.jpg"

const bgArray = [ bg1, bg2, bg3 ,bg4, bg5];

export function WorkExperiment() {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeProject = activeIndex !== null ? projectArray[activeIndex] : null;

  const goPrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + projectArray.length) % projectArray.length
    );
  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % projectArray.length);

  return (
    <section className="flex flex-col  border border-solid border-border-strong bg-bg-0  pb-20">
      <div className="flex items-center justify-center px-8 py-8 ">
        <h2 className="grow text-text-secondary text-14-decorative">
          \Work + Experiments
        </h2>
      </div>
      <div className="project-container flex flex-col ">
        
        {/*Looping through array to dynamically display content*/}
        {projectArray.map(( project, index)=>{

          const bgImage = bgArray[index];
          return(
             <div className={`${project.id} ` }>
            <div
              role="button"
              tabIndex={0}
              aria-label={`Open ${project.title} details`}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
              className='group relative cursor-pointer overflow-hidden bg-contain after:absolute after:inset-0 after:bg-transparent dark:after:bg-black/20'
              style={{ backgroundImage: `url(${bgImage})` }}
            >

              

          <img
            src={project.heroImage}
            alt={project.title}
            className="relative z-10 w-full transition-all duration-300 group-hover:scale-103 "
          />

          
          {/* Overlay */}
          <div className="absolute z-40 inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur" 
            style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.70) 100%)"}}
          />

          {/* Content */}
          <div className="absolute z-50 inset-0 flex flex-col justify-end p-6 opacity-0 transition-all duration-300 group-hover:opacity-100 ">
            <h3 className="text-[#F5F5F5] text-16-medium">{project.title}</h3>

            <p className="mt-1 text-[#B8B8B8] text-14-regular">
              {project.description}
            </p>
          </div>
        </div>

        <Divider height={32} />
             </div> 
          )
        })
      }
       

       
      </div>

      <ProjectDrawer
        project={activeProject}
        onClose={() => setActiveIndex(null)}
        onPrev={goPrev}
        onNext={goNext}
      />
    </section>
  );
}
