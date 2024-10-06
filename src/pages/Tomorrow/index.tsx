import {AsideContainer} from "../../components/AsideContainer.tsx";
import {TOMORROW_TASKS_FILTER} from "../../components/PredicateFilters.ts";
import {MainComponent} from "../../components/MainComponent";

export default function Tomorrow() {
    return (
        <>
            <AsideContainer/>
            <MainComponent title="Amanhã" predicate={TOMORROW_TASKS_FILTER}/>
        </>
    )
}