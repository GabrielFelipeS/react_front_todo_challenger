import {Task} from "../types/Task.ts";

export const ALL_TASKS_FILTER = (task: Task) => task.id == task.id

export const COMPLETED_TASKS_FILTER = (task: Task) => task.status == "completed"

export const CANCELED_TASKS_FILTER = (task: Task) => task.status == "canceled"

export const PENDING_TASKS_FILTER = (task: Task) => task.status == "pending"

export const PENDING_OR_IN_PROGRESS = (task: Task)  => (task.status == 'pending' || task.status == 'in_progress')

export const ALL_TASKS_FILTER_PENDING_OR_IN_PROGRESS = (task: Task) => PENDING_OR_IN_PROGRESS(task) && ALL_TASKS_FILTER(task)

export const TODAY_TASKS_FILTER_PENDING_OR_IN_PROGRESS =   (task: Task) => PENDING_OR_IN_PROGRESS(task) && TODAY_TASKS_FILTER(task)

export const TOMORROW_TASKS_FILTER_PENDING_OR_IN_PROGRESS =  (task: Task) =>  PENDING_OR_IN_PROGRESS(task) && TOMORROW_TASKS_FILTER(task)

export const THIS_WEEK_TASKS_FILTER_PENDING_OR_IN_PROGRESS =  (task: Task) => PENDING_OR_IN_PROGRESS(task) && THIS_WEEK_TASKS_FILTER(task)

export const NEXT_SEVEN_DAYS_TASKS_FILTER_PENDING_OR_IN_PROGRESS = (task: Task) => PENDING_OR_IN_PROGRESS(task) && NEXT_SEVEN_DAYS_TASKS_FILTER(task)

export const PLANNED_TASKS_FILTER_PENDING_OR_IN_PROGRESS = (task: Task) => PENDING_OR_IN_PROGRESS(task) && PLANNED_TASKS_FILTER(task)


export const TODAY_TASKS_FILTER = (task: Task) => {
    const today = new Date();
    const taskDay = task.task_date;

    return  taskDay.getDate() == today.getDate() &&
            taskDay.getMonth() == today.getMonth() &&
            taskDay.getFullYear() == today.getFullYear();
}

export const TOMORROW_TASKS_FILTER = (task: Task) => {
    const today = new Date();
    const taskDay = task.task_date;
    const tomorrow = today.getDate() + 1;

    return  taskDay.getDate() == tomorrow &&
            taskDay.getMonth() == today.getMonth() &&
            taskDay.getFullYear() == today.getFullYear();
}

export const THIS_WEEK_TASKS_FILTER = (task: Task) => {
    const todayDate = new Date();
    const taskDay = task.task_date;

    const firtsDayOfWeek = todayDate.getDate() - todayDate.getDay();
    const lastDayOfWeek = firtsDayOfWeek + 6

    return  taskDay.getDate() >= firtsDayOfWeek &&
            taskDay.getDate() <= lastDayOfWeek &&
            taskDay.getMonth() == todayDate.getMonth() &&
            taskDay.getFullYear() == todayDate.getFullYear();
}

export const NEXT_SEVEN_DAYS_TASKS_FILTER = (task: Task) => {
    const todayDate = new Date();
    const taskDay = task.task_date;

    const today = todayDate.getDate();
    const next7Days = today + 7;

    return  taskDay.getDate() > today &&
            taskDay.getDate() <= next7Days &&
            taskDay.getMonth() == todayDate.getMonth() &&
            taskDay.getFullYear() == todayDate.getFullYear();
}

export const PLANNED_TASKS_FILTER = (task: Task) => {
    const todayDate = new Date();
    const taskDate = task.task_date;

    const monthCurrent = todayDate.getMonth();

    return taskDate.getMonth() >= monthCurrent;
}

