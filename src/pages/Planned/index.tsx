import {AsideContainer} from "../../components/AsideContainer.tsx";
import {PLANNED_TASKS_FILTER} from "../../components/PredicateFilters.ts";
import {MainComponent} from "../../components/MainComponent";


export default function Planned() {
    return (
        <>
            <AsideContainer/>
            <MainComponent title="Planejado" predicate={PLANNED_TASKS_FILTER}/>
        </>
    )
}