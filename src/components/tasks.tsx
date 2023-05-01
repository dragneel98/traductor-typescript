import { Task } from './Task'
import { type tasksList } from './types'
interface Props {
  tasks: tasksList
}

export const Tasks: React.FC<Props> = ({ tasks }) => {
  return (
    <div>
        <ul className='todo-list'>
            {tasks.map(task => (
                <li key={task.id} className={task.completed ? 'completed' : ''}>
                  <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    completed={task.completed}
                  ></Task>
                </li>
            ))}
        </ul>
    </div>
  )
}
