import './App.css'

import { Router } from './router';
import { TaskProvider } from "./context/TaskContext";
import styled from "styled-components";


const PageContent = styled.div.attrs({
    className: 'flex'
})``;

function App() {
  return (
     <TaskProvider>
         <PageContent>
             <Router/>
         </PageContent>
     </TaskProvider>
  );
}

export default App
