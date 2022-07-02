import React, { useEffect } from 'react'
import './TaskContainer.css'
//import { TrashIcon } from '@heroicons/react/solid'

import TaskList from '../TaskList/TaskList';
import CreateTaskForm from './CreateTaskForm';
import {useSelector,useDispatch} from "react-redux";
import { currentDisplay,changeDisplay } from '../../redux/slices/displaySlice';
import {TASKLIST,CREATETASK} from "../../redux/commons/constants"
import { setCurrentTask,clearCurrentTask,tasksList } from '../../redux/slices/taskSlice';

function TaskContainer() {
  const dispatch = useDispatch()
  const display = useSelector(currentDisplay)
  const tasks = useSelector(tasksList)

  useEffect(()=>{
    console.log(display)
  },[])

  const handleOpen = () =>{
    dispatch(clearCurrentTask())
    dispatch(changeDisplay(CREATETASK))
  }

  return (
    <div className='task__form'>
     
      <div className='task__form__header'>
        <div className='task__form__header__left'>
           <p>Tasks {tasks.length}</p>
        </div>
        <button onClick={() => handleOpen() } className='open__form__button'>
          +
        </button>
      </div>
      <div>
      <div className='task__form__body'>
        {display == CREATETASK && <div className='create__taskForm__container'><CreateTaskForm/></div>}
        {display == TASKLIST && <div className='taskList__container'><TaskList/></div>}
      </div>
      </div>
      
    </div>
    
  )
}

export default TaskContainer