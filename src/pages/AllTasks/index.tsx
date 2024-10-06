import {AsideContainer} from "../../components/AsideContainer.tsx";
import {ALL_TASKS_FILTER} from "../../components/PredicateFilters.ts";
import {MainComponent} from "../../components/MainComponent";

export default function AllTasks() {
    return (
        <>
            <AsideContainer/>
            <MainComponent title="Tasks" predicate={ALL_TASKS_FILTER}/>
        </>
    )
}