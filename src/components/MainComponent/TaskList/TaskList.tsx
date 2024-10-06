import {Task} from "../../../types/Task.ts";
import {TaskItem} from "./TaskItem.tsx";

interface ContainerTaskInfoProps {
    filteredTasks: Task[]
    filterToVisualization: (task: Task) => boolean
}

export function TaskList({filteredTasks, filterToVisualization}: ContainerTaskInfoProps) {
    const pendingAndInProgressiveTasks = filteredTasks.filter(filterToVisualization);

    return (
        <main className="flex flex-col gap-5 mt-9">
            {pendingAndInProgressiveTasks.map((task, index) => {
               return (
                  <TaskItem task={task} key={index} />
               )
            })}
        </main>
    )
}