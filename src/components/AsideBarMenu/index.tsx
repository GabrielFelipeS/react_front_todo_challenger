import {AsideBarRoot} from "./AsideBarRoot";
import {AsideBarIcon} from "./AsideBarIcon";
import {AsideBarTitle} from "./AsideBarTitle";
import {AsideBarTaskInfo} from "./AsideBarTaskInfo";
import {AsideBarList} from "./AsideBarList";

import todayIcon from "/src/assets/todayIcon.png"
import tomorrowIcon from "/src/assets/tomorrowIcon.png";
import thisWeekIcon from "/src/assets/calendarIcon.png";
import sevenDaysIcon from "/src/assets/7DaysIcon.png";
import plannedIcon from "/src/assets/plannedIcon.png"
import concludedIcon from "/src/assets/concludedIcon.png"
import tasksIcon from "/src/assets/TasksIcon.png";

import {
    ALL_TASKS_FILTER_PENDING_OR_IN_PROGRESS,
    COMPLETED_TASKS_FILTER,
    NEXT_SEVEN_DAYS_TASKS_FILTER_PENDING_OR_IN_PROGRESS,
    PLANNED_TASKS_FILTER_PENDING_OR_IN_PROGRESS,
    THIS_WEEK_TASKS_FILTER_PENDING_OR_IN_PROGRESS,
    TODAY_TASKS_FILTER_PENDING_OR_IN_PROGRESS,
    TOMORROW_TASKS_FILTER_PENDING_OR_IN_PROGRESS
} from "../PredicateFilters.ts";

export const AsideBarMenuToday = () => {
    return (
        <AsideBarList endPoint={"/today"}>
            <AsideBarIcon path={todayIcon} alt="sun icon"/>
            <AsideBarTitle title={"Hoje"}/>
            <AsideBarTaskInfo predicate={TODAY_TASKS_FILTER_PENDING_OR_IN_PROGRESS}/>
        </AsideBarList>
    )
}

export const AsideBarMenuTomorrow = () => {
    return (
        <AsideBarList endPoint={"/tomorrow"}>
            <AsideBarIcon path={tomorrowIcon} alt="tomorrow icon"/>
            <AsideBarTitle title={"Amanhã"}/>
            <AsideBarTaskInfo predicate={TOMORROW_TASKS_FILTER_PENDING_OR_IN_PROGRESS}/>
        </AsideBarList>
    );
}

export const AsideBarMenuThisWeek = () => {
    return (
        <AsideBarList endPoint={"/thisweek"}>
            <AsideBarIcon path={thisWeekIcon} alt="calendar icon"/>
            <AsideBarTitle title={"Esta Semana"}/>
            <AsideBarTaskInfo predicate={THIS_WEEK_TASKS_FILTER_PENDING_OR_IN_PROGRESS}/>
        </AsideBarList>
    );
}

export const AsideBarMenuNextSevenDays = () => {
    return (
        <AsideBarList endPoint={"/sevendays"}>
            <AsideBarIcon path={sevenDaysIcon} alt="7 Days Icon icon"/>
            <AsideBarTitle title={"Próximos 7 Dias"}/>
            <AsideBarTaskInfo predicate={NEXT_SEVEN_DAYS_TASKS_FILTER_PENDING_OR_IN_PROGRESS}/>
        </AsideBarList>
    );
}

export const AsideBarMenuPlanned = () => {
    return (
        <AsideBarList endPoint={"/planned"}>
            <AsideBarIcon path={plannedIcon} alt="Planned Icon icon"/>
            <AsideBarTitle title={"Planejado"}/>
            <AsideBarTaskInfo predicate={PLANNED_TASKS_FILTER_PENDING_OR_IN_PROGRESS}/>
        </AsideBarList>
    );
}

export const AsideBarMenuCompleted = () => {
    return (
        <AsideBarList endPoint={"/concluded"}>
            <AsideBarIcon path={concludedIcon} alt="concluded Icon icon"/>
            <AsideBarTitle title={"Concluido"}/>
            <AsideBarTaskInfo predicate={COMPLETED_TASKS_FILTER}/>
        </AsideBarList>
    );
}

export const AsideBarMenuTasks = () => {
    return (
        <AsideBarList endPoint={"/tasklist"}>
            <AsideBarIcon path={tasksIcon} alt="task list Icon icon"/>
            <AsideBarTitle title={"Tarefas"}/>
            <AsideBarTaskInfo predicate={ALL_TASKS_FILTER_PENDING_OR_IN_PROGRESS}/>
        </AsideBarList>
    );
}

export const AsideBarMenu = {
    Root: AsideBarRoot,
    Today: AsideBarMenuToday,
    Tomorrow: AsideBarMenuTomorrow,
    ThisWeek: AsideBarMenuThisWeek,
    NextSevenDays: AsideBarMenuNextSevenDays,
    Planned: AsideBarMenuPlanned,
    Completed: AsideBarMenuCompleted,
    Tasks: AsideBarMenuTasks,
}