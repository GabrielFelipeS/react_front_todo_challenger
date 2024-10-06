import styled from "styled-components";
import checkImg from "../../../assets/check.png"
import {Task} from "../../../types/Task.ts";

const Completed = styled.div.attrs({
    className: "bg-ligth-accent border " +
    "border-ligth-accent dark:bg-dark-accent " +
        "dark:border-dark-accent w-5 h-5 rounded-full"
})``;

const UnCompleted = styled.div.attrs({
    className: "bg-ligth-detail border border-ligth-secondary " +
        "dark:bg-dark-detail dark:border-dark-border w-5 h-5 rounded-full"
})``;

interface CheckButtonProps {
    task: Task
    isCompleted: boolean
    setisCompleted: React.Dispatch<React.SetStateAction<boolean>>
}

export function CheckButton({task, isCompleted, setisCompleted}: CheckButtonProps) {

    function handlerState(idTask: number) {
        console.log(`id: ${idTask}`)
        task.status = !isCompleted? "completed" : "pending";
        task.completed_pomodori = !isCompleted? task.total_pomodori : 0
        setisCompleted(state => !state)
    }

    function getButtonFor(isCompleted: boolean) {
        return (
            isCompleted?
                <Completed>
                    <img src={checkImg} alt={"check image"} className={"dark:invert"} />
                </Completed>
                :
                <UnCompleted/>
        )
    }

    return (
        <button onClick={() => handlerState(task.id)}>
            {getButtonFor(isCompleted)}
        </button>
    )
}