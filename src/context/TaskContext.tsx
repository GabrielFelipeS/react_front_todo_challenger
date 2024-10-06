import {createContext, ReactNode, useState} from 'react';
import {Task} from "../types/Task";

import {mockTasks} from "../components/tests/MockTasks"

interface AppProviderProps {
    children: ReactNode;
}

interface TaskContextProps  {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskContext = createContext<TaskContextProps | undefined>(undefined);

// Crie um provedor de contexto
export const TaskProvider = ({ children }: AppProviderProps ) => {
    const [tasks, setTasks] = useState(mockTasks);

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    );
};
