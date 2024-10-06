import {AsideContainer} from "../../components/AsideContainer.tsx";
import {NEXT_SEVEN_DAYS_TASKS_FILTER} from "../../components/PredicateFilters.ts";
import {MainComponent} from "../../components/MainComponent";


export default function SevenDays() {
    return (
        <>
            <AsideContainer/>
            <MainComponent title="Próximos 7 dias" predicate={NEXT_SEVEN_DAYS_TASKS_FILTER}/>
        </>
    )
}