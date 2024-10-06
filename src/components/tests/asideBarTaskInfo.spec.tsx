import {AsideBarTaskInfo} from "../AsideBarMenu/AsideBarTaskInfo";
import {render, screen} from "@testing-library/react"

import "@testing-library/jest-dom";

import {TaskContext} from "../../context/TaskContext";
import {mockTasks} from "./MockTasks"
import {Task} from "../../types/Task";
import {
    ALL_TASKS_FILTER,
    CANCELED_TASKS_FILTER,
    COMPLETED_TASKS_FILTER,
    NEXT_SEVEN_DAYS_TASKS_FILTER_PENDING_OR_IN_PROGRESS,
    PENDING_TASKS_FILTER,
    PLANNED_TASKS_FILTER_PENDING_OR_IN_PROGRESS,
    THIS_WEEK_TASKS_FILTER_PENDING_OR_IN_PROGRESS,
    TODAY_TASKS_FILTER,
    TOMORROW_TASKS_FILTER
} from "../PredicateFilters.ts";

const today = new Date();
const mockSetTasks = jest.fn();

function createTask(overrides = {}): Task {
    const task: Task = {
        id: 1,
        user_id: 101,
        title: 'Mock Task',
        description: 'Mock task description',
        status: 'pending',
        completed_pomodori: 0,
        total_pomodori: 4,
        pomodoro_value: 25,
        task_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        due_date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        assigned_at: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        completed_at: new Date(today.getFullYear(), today.getMonth(), today.getDate())
    };

    return { ...task, ...overrides };
}

const renderComponent = (predicate: (task: Task) => boolean, mock = mockTasks) => {
    render(
        <TaskContext.Provider value={{tasks : mock, setTasks : mockSetTasks}}>
            <AsideBarTaskInfo predicate={predicate}/>
        </TaskContext.Provider>
    )
}

describe("AsideBarTaskInfo component", () => {
    it('should pick up all tasks', () => {
        renderComponent(ALL_TASKS_FILTER);

        expect(screen.getByText("29")).toBeInTheDocument();
        expect(screen.getByText("190h 50m")).toBeInTheDocument();
    })

    it('should pick up all tasks for today', () => {
        renderComponent(TODAY_TASKS_FILTER,[
            createTask(),
            createTask({
                task_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4),
                status: 'canceled'
            }),
            createTask({
                task_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4),
                status: 'completed'
            }),
            createTask({
                task_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)
            })
        ]);

        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("1h 40m")).toBeInTheDocument();
    });

    it('should pick up all tasks for tomorrow', () => {
        renderComponent(TOMORROW_TASKS_FILTER,[
            createTask(),
            createTask({
                task_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
            }),
            createTask({
                task_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4),
                status: 'canceled'
            }),
            createTask({
                task_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4),
                status: 'completed'
            }),
            createTask({
                task_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)
            })
        ]);

        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("1h 40m")).toBeInTheDocument();
    });

    it('should only pick up the tasks for this week', () => {
        renderComponent(THIS_WEEK_TASKS_FILTER_PENDING_OR_IN_PROGRESS, [
            createTask(),
            createTask({
                task_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay())
            }),
            createTask({
                task_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4),
                status: 'canceled'
            }),
            createTask({
                task_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4),
                status: 'completed'
            }),
            createTask({
                task_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)
            })
        ])

        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByText("3h 20m")).toBeInTheDocument();
    });

    it('should only pick up the tasks for the next seven days', () => {
        renderComponent(NEXT_SEVEN_DAYS_TASKS_FILTER_PENDING_OR_IN_PROGRESS, [
            createTask(),
            createTask({
                task_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4)
            }),
            createTask({
                task_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4),
                status: 'canceled'
            }),
            createTask({
                task_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4),
                status: 'completed'
            }),
            createTask({
                task_date:
                    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)
            })
        ])

        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByText("3h 20m")).toBeInTheDocument();
    });

    it('should pick up all tasks that is planned', () => {
        renderComponent(PLANNED_TASKS_FILTER_PENDING_OR_IN_PROGRESS);

        expect(screen.getByText("22")).toBeInTheDocument();
        expect(screen.getByText("178h 20m")).toBeInTheDocument();
    });

    it('should pick up all tasks that is completed', () => {
        renderComponent(COMPLETED_TASKS_FILTER);

        expect(screen.getByText("4")).toBeInTheDocument();
        expect(screen.getByText("7h 5m")).toBeInTheDocument();
    });

    it('should pick up all tasks that is pending', () => {
        renderComponent(PENDING_TASKS_FILTER);

        expect(screen.getByText("17")).toBeInTheDocument();
        expect(screen.getByText("173h 20m")).toBeInTheDocument();
    });

    it('should pick up all tasks that is canceled', () => {
        renderComponent(CANCELED_TASKS_FILTER);

        expect(screen.getByText("3")).toBeInTheDocument();
        expect(screen.getByText("5h 25m")).toBeInTheDocument();
    });
});