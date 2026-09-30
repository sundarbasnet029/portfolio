import { Routes, Route } from "react-router-dom";
import { Homepage} from "./Pages/Homepage";
import { MedicalApp } from "./Pages/MedicalApp";

export default function App(){
  return(

    <Routes>
      <Route path="/" element= {<Homepage/>} />
      <Route path="/medical-app" element= {<MedicalApp/>} />
    </Routes>
  )
}