import ligthModeIcon from "/src/assets/ligthModeIcon.png"
import darkModeIcon from "/src/assets/darkModeIcon.png"
import {AsideBarIcon} from "./AsideBarIcon.tsx";
import {AsideBarTitle} from "./AsideBarTitle.tsx";
import {useState} from "react";

export function ThemeSwitcher() {
    const theme =  document.getElementById("theme")?.classList

    const isDarkMode = theme?.contains("dark")
    const [alterThemeImg, setAlterThemeImg] = useState(isDarkMode? darkModeIcon:  ligthModeIcon)

    function handlerTheme() {
        theme?.toggle("dark")
        setAlterThemeImg(state => state.includes(ligthModeIcon)? darkModeIcon : ligthModeIcon)
    }

    return (
        <div className="pl-2 pb-5 ">
            {
                <button className="flex flex-row gap-1" onClick={() => handlerTheme()}>
                    <AsideBarIcon path={alterThemeImg} alt="Alter theme icon" id="alterThemeImg"/>
                    <AsideBarTitle title={"Alterar tema"}/>
                </button>

            }
        </div>
    )
}