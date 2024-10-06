import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import ChangeColorPage from "./pages/ChangeColorPageTest";
import Today from "./pages/Today"
import Tomorrow from "./pages/Tomorrow"
import ThisWeek from "./pages/ThisWeek"
import SevenDays from "./pages/SevenDays"
import AllTasks from "./pages/AllTasks"
import Planned from "./pages/Planned"
import Concluded from "./pages/Concluded"

export function Router() {

  return (
   <BrowserRouter>
     <Routes>
         <Route path="/today" element={<Today/>}/>
         <Route path="/tomorrow" element={<Tomorrow/>}/>
         <Route path="/thisweek" element={<ThisWeek/>}/>
         <Route path="/sevendays" element={<SevenDays/>}/>
         <Route path="/planned" element={<Planned/>}/>
         <Route path="/concluded" element={<Concluded/>}/>
         <Route path="/tasklist" element={<AllTasks/>}/>
         <Route path="/ChangeColorTest" element={<ChangeColorPage/>}/>
         <Route path="/" element={<Navigate to={"/today"}/>}/>
     </Routes>
   </BrowserRouter>
  )
}
