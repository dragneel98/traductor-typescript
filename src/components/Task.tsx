import { type task as taskType } from './types'

type Props = taskType

export const Task: React.FC<Props> = ({ title, id, completed }) => {
  return (
    <div className="view">
        <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={() => {}}
         />
         <label> {title} </label>
         <button className='destroy'></button>
    </div>
  )
}
