export type Status = 'pending' | 'in_progress' | 'completed' | 'canceled';

export type Task = {
    id: number
    user_id: number
    title: string
    description: string
    completed_pomodori: number
    total_pomodori: number
    pomodoro_value: number
    status: Status
    task_date: Date
    due_date: Date
    assigned_at: Date
    completed_at: Date
}