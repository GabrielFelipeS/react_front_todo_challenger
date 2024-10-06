import {Task} from "../../../types/Task.ts";
import arrow from "../../../assets/arrow_rightIcon.png"
import {CheckButton} from "./CheckButton.tsx";
import {useState} from "react";
import {TaskInfo} from "./TaskInfo.tsx";

type TaskItemProps = {
    task: Task
}

export function TaskItem({task}: TaskItemProps) {
    const [isCompleted, setIsCompleted] =
        useState<boolean>(task.status === "completed")

    return (
        <div className="bg-ligth-container dark:bg-dark-container h-[64px] rounded-lg
        flex flex-row justify-between
        ">
            <div className="flex gap-2 items-center ml-2">
                <CheckButton task={task} isCompleted={isCompleted} setisCompleted={setIsCompleted}/>
                <TaskInfo task={task} isCompleted={isCompleted}/>
            </div>

            <div className="flex items-center gap-2 mr-2">
                <div className="text-xs text-ligth-highlight dark:text-dark-highlight max-[300px]:hidden">
                    {task.task_date.getDate()} ago
                </div>

                <div>
                    <img src={arrow} alt="Imagem" className="w-5 h-5"/>
                </div>
            </div>
        </div>
    );
}