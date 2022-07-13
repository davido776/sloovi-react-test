import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import {useSelector} from "react-redux";
import { tasksList} from '../../redux/slices/taskSlice';

function TaskList() {
  
  const tasks = useSelector(tasksList)


  return (
    <div>
        { tasks.length === 0 
          ? <p>You have no task</p>
          :
          tasks.map(task =>(
            <TaskItem key={task.id} task={task}/>
          ))
        }
    </div>
  )
}

export default TaskList