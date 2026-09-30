import { useScramble } from "use-scramble";
import { Divider } from "./Divider";
import { projectArray } from "../Data/data";
import { useNavigate } from "react-router-dom";

import bg1 from "../Assets/bg1.jpg";
import bg2 from "../Assets/bg2.jpg"
import bg3 from "../Assets/bg3.jpg"
import bg4 from "../Assets/bg4.jpg"
import bg5 from "../Assets/bg5.jpg"

const bgArray = [ bg1, bg2, bg3 ,bg4, bg5];

// scramble text component

function ScrambleOverlay({ title, timeline , category}) {
  console.log(timeline);
  console.log(category);
  const { ref:timelineRef, replay:replayTimeline } = useScramble({
    text: timeline,
    playOnMount: false,
    speed: 1,
    scramble: 8
  });
  const { ref:categoryRef, replay:replayCategory } = useScramble({
    text: category,
    playOnMount: false,
    speed: 1,
    scramble: 8
  });

  const { ref:titleRef, replay: replayTitle } = useScramble({
    text: title,
    playOnMount: false,
    speed: 1.0,
    scramble:6,
    step:5,
    overdrive:true
  });

  const replayAll = ()=>{
    replayTitle();
    replayTimeline();
    replayCategory();
  }
  return (
    <div 
    className="absolute z-20 inset-0 flex flex-col justify-end p-10 opacity-0 transition-all duration-300 group-hover:opacity-100 "
    onPointerEnter={replayAll}
    >
     <div className="flex items-center gap-3">
    <p ref={timelineRef} className=" text-[#B8B8B8] text-14-regular"/>
    <div className="h-4 w-px bg-[#b8b8b8]" />
    <p ref={categoryRef} className=" text-[#B8B8B8] text-14-regular"/>
    <div className="pill bg-orange border border-solid border-[#A34201] px-2 px-1 text-13-regular text-[#FFFFFF] rounded-md">coming soon</div>
      </div> 
    <p ref={titleRef} className="mt-2 text-[#F5F5F5] text-16-regular"/>
  </div>
    

  );
}


export function WorkExperiment() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col  border border-solid border-border-strong bg-bg-0  pb-20">
      <div className="sticky top-6 z-80 flex items-center justify-center px-8 py-8 border-b border-solid border-border-strong bg-bg-0">
        <h2 className="grow text-text-secondary text-14-decorative">
          \Work + Experiments
        </h2>
      </div>
      <div className="project-container flex flex-col ">
        
        {/*Looping through array to dynamically display content*/}
        {projectArray.map(( project, index)=>{
          let baseIndex = 50;
          const bgImage = bgArray[index];
          return(
             <div className={`${project.id} sticky top-26 ` }
             style={{ zIndex : baseIndex+1}}
             onClick={()=>{
              navigate("medical-app")
             }}
             >
            <div
              role="button"
              tabIndex={0}
              aria-label={`Open ${project.title} details`}
              className='group relative cursor-pointer overflow-hidden bg-contain after:absolute after:inset-0 after:bg-transparent dark:after:bg-black/20'
              style={{ backgroundImage: `url(${bgImage})` }}
            >

          <img
            src={project.heroImage}
            alt={project.title}
            className="relative z-5 w-full transition-all duration-300 group-hover:scale-103 "
          />

          
          {/* Overlay */}
          <div className="absolute z-10 inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-blur" 
            style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.70) 100%)"}}
          />

          {/* Content */}
         
              <ScrambleOverlay title={project.title} timeline={project.timeline} category={project.category}/>

        </div>

        <Divider height={32} />
             </div> 
          )
        })
      }
      </div>
    </section>
  );
}
