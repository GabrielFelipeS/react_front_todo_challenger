import {ReactNode} from "react";

interface AsideBarProps {
    children: ReactNode
}

export function disapleAllSelectedInUl() {
    const ul = document.getElementById("AsideBarRoot");
    if(ul) {
        const liElements = ul.children;
        Array.from(liElements).forEach(li => {
            li.classList.remove('bg-ligth-selected', 'dark:bg-dark-selected')
        });
    }
}

export function AsideBarRoot({children}: AsideBarProps) {
    return(
        <ul id="AsideBarRoot">
            {children}
        </ul>
    );
}