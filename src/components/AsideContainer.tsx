import styled from "styled-components";
import 'tailwindcss/tailwind.css';
import {AsideBarMenu} from "./AsideBarMenu";
import {ThemeSwitcher} from "./AsideBarMenu/ThemeSwitcher.tsx";

const Aside = styled.aside.attrs( {
   className: 'fixed flex flex-col justify-between w-[275px] max-md:w-[165px] max-md:pr-2 max-sm:w-12 ' +
               'max-sm:p-0 h-full bg-ligth-container dark:bg-dark-container'
})``;

const ContainerMenuTop = styled.div.attrs({
    className: 'pt-16 pl-2  max-sm:pl-0'
})``;

const ContainerMenuDown = styled.div.attrs({
    className: ''
})``;


export  function AsideContainer() {
    return (
       <Aside>
           <ContainerMenuTop>
              <AsideBarMenu.Root>
                  <AsideBarMenu.Today/>
                  <AsideBarMenu.Tomorrow/>
                  <AsideBarMenu.ThisWeek/>
                  <AsideBarMenu.NextSevenDays/>
                  <AsideBarMenu.Planned/>
                  <AsideBarMenu.Tasks/>
                  <AsideBarMenu.Completed/>
              </AsideBarMenu.Root>
           </ContainerMenuTop>
           <ContainerMenuDown>
                <ThemeSwitcher/>
           </ContainerMenuDown>
       </Aside>
    );
}