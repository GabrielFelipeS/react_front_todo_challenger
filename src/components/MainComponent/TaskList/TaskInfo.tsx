import {TaskProgress} from "./TaskProgress.tsx";
import {Task} from "../../../types/Task.ts";

interface TaskInfoProps {
    task: Task
    isCompleted: boolean
}

export function TaskInfo({task, isCompleted} : TaskInfoProps) {
    console.log(`id: ${task.id}`)
    return (
        <div>
            <div className={`${
                isCompleted? 
                "text-ligth-tertiary dark:text-dark-tertiary line-through"
                : 
                "text-ligth-primary dark:text-dark-primary"}`}>
                {task.title}
            </div>
            <div className="flex flex-row">
                <TaskProgress completed_pomodori={task.completed_pomodori} total_pomodori={task.total_pomodori}/>
            </div>
        </div>
    );
}
