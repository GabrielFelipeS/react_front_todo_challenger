

export default function ChangeModeTest() {
    function handleClick() {
        if (localStorage.theme === "dark" || !("theme" in localStorage)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        if (localStorage.theme === "dark") {
            localStorage.theme = "light";
        } else {
            localStorage.theme = "dark";
        }
    }

    return (
        <>
            <div className={"text-ligth-primary dark:text-dark-primary dark:text-primary"}>
                Hello World
            </div>

            <div onClick={handleClick} className={"text-ligth-primary dark:text-dark-primary dark:text-primary"}>
                Change Mode (Dark/Light)
            </div>

            <div className={"flex gap-1"}>
                <div className={"w-6 h-6 bg-ligth-primary dark:bg-dark-primary"}></div>
                <div className={"w-6 h-6 bg-ligth-secondary dark:bg-dark-secondary"}></div>
                <div className={"w-6 h-6 bg-ligth-tertiary dark:bg-dark-tertiary"}></div>
                <div className={"w-6 h-6 bg-ligth-accent dark:bg-dark-accent"}></div>
                <div className={"w-6 h-6 bg-ligth-container dark:bg-dark-container"}></div>
                <div className={"w-6 h-6 bg-ligth-detail dark:bg-dark-detail"}></div>
                <div className={"w-6 h-6 bg-ligth-border dark:bg-dark-border"}></div>
                <div className={"w-6 h-6 bg-ligth-highlight dark:bg-dark-highlight"}></div>
                <div className={"w-6 h-6 bg-ligth-screen dark:bg-dark-screen"}></div>
                <div className={"w-6 h-6 bg-ligth-selected dark:bg-dark-selected"}></div>
            </div>

        </>
    );
}