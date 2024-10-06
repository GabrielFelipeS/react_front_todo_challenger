import {Task} from "../../types/Task.ts";
import {useContext} from "react";
import {TaskContext} from "../../context/TaskContext.tsx";
import {TaskOverview} from "./TaskOverview/TaskOverview";
import {TaskList} from "./TaskList/TaskList.tsx";
import {PENDING_OR_IN_PROGRESS} from "../PredicateFilters.ts";

interface MainComponentProps {
    title: string
    predicate: (task: Task) => boolean
    FILTER_TO_VISUALIZATION?: (task: Task) => boolean
}

export function MainComponent({title, predicate, FILTER_TO_VISUALIZATION = PENDING_OR_IN_PROGRESS}: MainComponentProps) {
    const tasks = useContext(TaskContext)?.tasks ?? []
    const filteredTasks = tasks.filter(predicate);

    return (
        <div className="mt-12 ml-5 md:w-[95%] md:pl-72 max-md:pl-40 max-md:w-11/12 max-sm:pl-10">
            <h1 className=" text-ligth-primary dark:text-dark-primary">
                {title}
            </h1>
            <TaskOverview filteredTasks={filteredTasks} />
            <TaskList filteredTasks={filteredTasks} filterToVisualization={FILTER_TO_VISUALIZATION}/>
        </div>
    );
}