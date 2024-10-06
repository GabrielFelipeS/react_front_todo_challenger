import timerConcludedImg from "../../../assets/timerConcluded.png";
import timerNotConcludedImg from "../../../assets/timerNotConcluded.png";
import {ReactElement} from "react";


const TimerConcluded = () => <img src={timerConcludedImg} alt="Imagem" className="w-4 h-4 dark:invert"/>
const TimerNotConcluded = () => <img src={timerNotConcludedImg} alt="Imagem" className="w-4 h-4 dark:invert"/>

function generateNonLimitedProgressBar (pomodoros_quantities: number, time_remaining: number) {
    const rows: ReactElement[] = [];
    for (let i = 0; i < pomodoros_quantities; i++) {
        rows.push(<TimerConcluded/>);
    }

    for (let i = 0; i < time_remaining; i++) {
        rows.push(<TimerNotConcluded/>);
    }

    return <> {rows} </>;
}

function generateLimitedProgressBar (pomodoros_quantities: number, time_remaining: number) {
    return <div className="flex flex-row text-xs">
        <TimerConcluded/>
        <span className="mr-0.5 text-ligth-highlight dark:text-dark-highlight">
            {pomodoros_quantities}
        </span>
        <span className="text-ligth-highlight dark:text-dark-accent"> / </span>
        <TimerNotConcluded/>
        <span className="mr-0.5 text-ligth-detailSpan dark:text-dark-detailSpan">
            { time_remaining}
        </span>
    </div>;
}

function generateProgressBar(pomodoros_quantities: number, progress_quantitite: number) {
    const time_remaining = pomodoros_quantities - progress_quantitite;

    if(pomodoros_quantities <= 5) {
       return generateNonLimitedProgressBar(progress_quantitite, time_remaining);
    } else {
        return generateLimitedProgressBar(progress_quantitite, time_remaining);
    }
}

interface TaskProgressProps {
    completed_pomodori: number
    total_pomodori: number
}

export function TaskProgress({completed_pomodori, total_pomodori}: TaskProgressProps) {
    const timers = generateProgressBar(total_pomodori, completed_pomodori);
    return ( timers );
}
