import React, { useEffect,useState } from 'react'
import TaskItem from '../TaskItem/TaskItem'
import {useSelector,useDispatch} from "react-redux";
import { tasksList} from '../../redux/slices/taskSlice';
import agent from '../../api/agent'
import {setTasks} from '../../redux/slices/taskSlice'

function TaskList() {
  const dispatch = useDispatch()
  const tasks = useSelector(tasksList)

  //const [taskss,setTaskss] = useState([])

  
  

 

  return (
    <div>
        {
          tasks.map(task =>(
            <TaskItem key={task.id} task={task}/>
          ))
        }
    </div>
  )
}

export default TaskList