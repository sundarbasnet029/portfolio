import {useState} from "react";
import codavatarLogo from "../Assets/codavatarLogo.png";
import chevronRightIcon from "../Assets/chevronRightIcon.svg";

const EXPERIENCES = [
  {
    role: 'Associate UI/UX Designer',
    company: 'Codavatar pvt',
    date: 'May 2025-May 2026',
    details: [
      'Worked on the overall design revamp of the B2B cloud telephony platform Dialaxy (V2 → V3), including major changes to user flows and information architecture, new features, and a fresh design system.',
      'Worked on the complete redesign of the Dialaxy Android mobile app using Material UI with custom components.',
      'Worked on the web app for AirChannel.ai, an omnichannel platform, focusing on Analytics, Campaigns, Settings, and a Unified Inbox for managing WhatsApp and email conversations.',
      'Worked closely with the content team to design landing pages and marketing content for the AirChannel.ai website',
      'Worked closely with the content team to design landing pages and marketing content for the AirChannel.ai website',
      'Guided interns in learning Figma fundamentals and UI/UX principles through one-on-one mentorship.',
    ],
  },
  {
    role: 'UI/UX Intern',
    company: 'Codavatar pvt',
    date: 'Jan 2025-Feb 2025',
    details: [
      'Supported the design team on Dialaxy V2 flows by preparing wireframes, UI variants, and design handoff files.',
      'Assisted with QA of implemented screens and documented feedback for the design system.',
      'Learned Figma fundamentals and UI/UX principles through one-on-one mentorship.',
    ],
  },
];

const ExperienceContainer = ()=>{
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return(
  <>
   {EXPERIENCES.map((item, index) => {
     const isExpanded = expandedIndex === index;
     const isFirst = index === 0;
     const isLast = index === EXPERIENCES.length - 1;
     return (
       <div key={item.role}>
         {/* header row */}
         <div
           onClick={() => toggle(index)}
           aria-expanded={isExpanded}
           className={`flex items-end gap-4 overflow-clip px-3 py-5 hover:bg-bg-2 cursor-pointer ${isFirst ? 'rounded-t-[12px]' : ''} ${isLast && !isExpanded ? 'rounded-b-[12px]' : ''} ${isExpanded ? 'bg-bg-1' : ''}`}
         >
           <img src={codavatarLogo} alt="" className="logo w-[40px]" />
           <div className="flex min-w-0 grow items-center gap-4">
             <div className="flex min-w-0 grow flex-col">
               <p className="text-text-primary text-14-medium">
                 {item.role}
               </p>
               <p className="text-text-tertiary text-14-regular">
                 {item.company}
               </p>
             </div>
             <p className="shrink-0 text-text-tertiary text-14-regular">
               {item.date}
             </p>
             <div className="flex size-5 shrink-0 items-center justify-center">
               <img
                 src={chevronRightIcon}
                 alt='Click to expand'
                 className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
               />
             </div>
           </div>
         </div>

         {/* expanded detail from Paper H7-0 with smooth ease */}
          <div
            className={`grid transition-all duration-300 ease-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
          >
            <div className="min-h-0 overflow-hidden">
              <ul className="flex flex-col gap-4 pr-3 pb-6 pl-20 self-stretch list-square list-outside marker:text-text-tertiary">
                {item.details.map((text, i) => (
                  <li key={i} className="self-stretch pl-2 text-text-secondary text-13-regular">
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* dashed divider between items */}
          {!isLast && (
            <svg viewBox="0 0 686 1" className="h-px w-full shrink-0 text-border-soft">
             <path
               d="M0 0h686"
               stroke="currentColor"
               strokeDasharray="4 4"
             />
           </svg>
         )}
       </div>
     );
   })}
  </>
  )
}

const AboutContainer = ()=>{
  return(
    <div className="about-content p-4">
      <p className="about-me text-text-secondary text-14-regular">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aspernatur, vero atque provident ipsam corrupti ipsum, numquam tenetur, adipisci eum nostrum tempora? Est asperiores odio quod recusandae rerum ex commodi!

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit fuga provident eaque fugit eos quos! Unde deserunt distinctio quidem quo fugiat possimus, nobis porro! Hic repellendus autem dolor illo blanditiis!
      </p>
    </div>
  )
}

export function Experience() {
      const [ activeTab, setActiveTab] = useState('experience');
  return (
    <section className="flex flex-col overflow-clip bg-bg-0 py-20">
      <div className="flex items-start px-5">
        <div className="flex items-center gap-2 rounded-t-[12px] border-x border-t border-solid border-border-strong bg-bg-1 px-6 py-2 drop-shadow-[-2px_-4px_6px_drop-shadow] group cursor-pointer">
          <span className={`${activeTab === 'experience'? 'text-text-primary': 'text-text-tertiary group-hover:text-text-primary' } text-14-decorative`}
            onClick = {()=>{
              setActiveTab('experience');
             
            }}>
            \Experience
          </span>
        </div>

        <div className='flex items-center justify-center gap-2 rounded-t-[12px] border-x border-t border-solid border-border-strong bg-bg-1 px-6 py-2 drop-shadow-[-2px_-4px_6px_drop-shadow] group cursor-pointer'>

          <span className={`${activeTab === 'about'? 'text-text-primary': 'text-text-tertiary group-hover:text-text-primary'} text-14-decorative `} 
          onClick = {()=>{
            setActiveTab('about');
          }}
          >
            \About
          </span>
        </div>
      </div>

      <div className="mx-0 flex flex-col self-stretch rounded-[16px] bg-bg-1 p-4 inset-shadow-[0px_0px_20px] inset-shadow-inner-shadow outline-1 outline-solid outline-border-soft">
      { activeTab === 'experience' && <ExperienceContainer/>}      
      { activeTab === 'about' && <AboutContainer/>}      
      </div>
    </section>
  );
}

