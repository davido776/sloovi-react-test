import React from 'react'
import './TaskItem.css'
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {useSelector,useDispatch} from "react-redux";
import { currentDisplay,changeDisplay,toggleEdit } from '../../redux/slices/displaySlice';
import { setCurrentTask } from '../../redux/slices/taskSlice';
import {TASKLIST,CREATETASK} from "../../redux/commons/constants"


function TaskItem(props) {
  const dispatch = useDispatch()

  const openEdit = (id) => {
    dispatch(toggleEdit(true))
    dispatch(setCurrentTask(id))
    dispatch(changeDisplay(CREATETASK))  
  }

  return (
    <div className='taskItem'>
        <div className='taskItem__left'>
            <Avatar style={{ backgroundColor: "green" }} variant="rounded">
               <AssignmentIcon />
            </Avatar>
            <div style={{marginLeft:"5px"}}>
                <p style={{fontSize:"13px",fontWeight:"bold"}}>{props.task.task_msg}</p>
                <p style={{fontSize:"13px",color:"red"}}>{props.task.task_date}</p>
            </div>

            
        </div>
        <div className='taskItem__right'>
            <div onClick={() => openEdit(props.task.id)} style={{marginRight:"10px"}}>
                <button className='taskItem__right__boxItem'>
                    <EditIcon style={{fontSize:"15px"}}/>
                </button>
            </div>
            
            <div style={{display:"flex"}}>
                <button className='taskItem__right__boxItem'>
                    <NotificationsIcon style={{fontSize:"15px"}}/>
                </button>
                <button className='taskItem__right__boxItem'>
                    <CheckIcon style={{fontSize:"15px"}}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default TaskItem