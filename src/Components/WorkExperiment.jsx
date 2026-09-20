import { useState } from "react";
import { Divider } from "./Divider";
import { ProjectDrawer } from "./ProjectDrawer";
import { projectArray } from "../Data/data";

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
          return(
             <div className={`${project.id}` }>
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
              className="group relative cursor-pointer overflow-hidden "
            >
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          />

          <div
            className="
            absolute inset-0
            bg-black/0
            transition-opacity duration-500
            dark:bg-black/40
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <h3 className="text-text-primary text-16-medium">{project.title}</h3>

            <p className="mt-1 text-text-tertiary text-14-regular">
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
