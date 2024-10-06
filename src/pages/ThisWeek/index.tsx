import {AsideContainer} from "../../components/AsideContainer.tsx";
import {THIS_WEEK_TASKS_FILTER} from "../../components/PredicateFilters.ts";
import {MainComponent} from "../../components/MainComponent";


export default function ThisWeek() {
    return (
        <>
            <AsideContainer/>
            <MainComponent title="Esta semana" predicate={THIS_WEEK_TASKS_FILTER}/>
        </>
    )
}