import {TaskData} from "./TaskData.tsx";
import {Task} from "../../../types/Task.ts";
import {PENDING_OR_IN_PROGRESS} from "../../PredicateFilters.ts";


interface ContainerTaskInfoProps {
    filteredTasks: Task[]
}

export function TaskOverview({filteredTasks}: ContainerTaskInfoProps) {
    const pendingTasks = filteredTasks.filter(PENDING_OR_IN_PROGRESS);

    const time_estipuled = pendingTasks
        .map((task: Task) => task.pomodoro_value * task.total_pomodori)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const hours = Math.floor(time_estipuled / 60);
    const minutes = time_estipuled % 60;
    const containsHours = hours != 0;

    return (
        <>
            <TaskData
                hours={hours}
                minutes={minutes}
                pendingTasks={pendingTasks}
                filteredTasks={filteredTasks}
            />

            <div className="mt-6 text-ligth-primary dark:text-dark-primary">
                Tarefas - {containsHours ? <> {hours}h </> : ''} {minutes}min
            </div>
        </>
    )
}