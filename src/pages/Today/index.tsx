import {AsideContainer} from "../../components/AsideContainer.tsx";
import {TODAY_TASKS_FILTER} from "../../components/PredicateFilters.ts";
import {MainComponent} from "../../components/MainComponent";

export default function Home() {
    return (
        <>
            <AsideContainer/>
            <MainComponent title="Hoje" predicate={TODAY_TASKS_FILTER}/>
        </>
    )
}