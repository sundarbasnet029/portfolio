
import { Divider } from './Components/Divider'
import { Experience } from './Components/Experience'
import { Footer } from './Components/Footer'
import { FooterDither } from './Components/FooterDither'
import { Header } from './Components/Header'
import { HeroDither } from './Components/HeroDither'
import { Profile } from './Components/Profile'
import { Socials } from './Components/Socials'
import { WorkExperiment } from './Components/WorkExperiment'


export default function App() {
  return (
    <div className="min-h-screen bg-bg-0 flex justify-center">
      <div className="w-[600px] max-w-full flex flex-col border-l border-r border-solid border-border-strong bg-bg-0">
        {/* Here goes header */}
        <Header />

        {/* ── Hero dither ── */}
        <HeroDither/>    

        {/* ── Profile ── */}
        <Profile/>

        <Divider height={48}/>
        {/* ── Work + Experiments ── */}
       <WorkExperiment/>

        {/* ── Experience / About ── */}
        <Experience/>

        {/* ── Socials ── */}
       <Socials/>

        {/* ── Pattern divider ── */}
        <Divider height={80}/>

        {/* ── Bottom dither ── */}
        <FooterDither/>

        {/* ── Footer ── */}
        <Footer/>
       
      </div>
    </div>
  )
}
