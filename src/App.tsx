import { useState } from 'react'
import { Tasks } from './components/tasks'

const mockTask = [
  {
    id: '1',
    title: 'task 1',
    completed: false
  },
  {
    id: '2',
    title: 'task 2',
    completed: true

  }
]

function App (): JSX.Element {
  const [list] = useState(mockTask)
  return (
    <div className='todoapp'>
    <Tasks tasks={list}></Tasks>
    </div>
  )
}

export default App
