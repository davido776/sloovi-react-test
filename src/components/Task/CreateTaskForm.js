import React,{useEffect, useState} from 'react'
import "./CreateTaskForm.css"
import DeleteIcon from '@mui/icons-material/Delete';
import {useSelector,useDispatch} from "react-redux";
import {TASKLIST,CREATETASK} from "../../redux/commons/constants"
import { currentDisplay,changeDisplay,editMode,toggleEdit } from '../../redux/slices/displaySlice';
import { addTask,editTask,currentTask,removeTask} from '../../redux/slices/taskSlice';
import agent from '../../api/agent'




function CreateTaskForm() {
  const dispatch = useDispatch()
  const edit = useSelector(editMode)
  const task = useSelector(currentTask)

  const [values,setValues] = useState({
    id:"",
    task_msg: "",
    task_date:"",
    task_time:"",
    assigned_user:""
  })

  const [secondUser,setSecondUser] = useState("")

  const usersToId = {
    "Saravanan C" : "user_435eedbd4cb74dce81ce566cc76e7a2b",
    "Sundar Pichai" : "user_4ee4cf67ad474a27988bc0afb84cf472"
  }
  
  const users = ["Saravanan C","Sundar Pichai"]

  useEffect(()=>{
    
    if(task !== null){
      setValues(task)
      setSecondUser(users.filter(u => u !== task.assigned_user)[0])
    }
    
  },[])

  
  const handleSave = (e) =>{
      e.preventDefault()
    dispatch(changeDisplay(TASKLIST))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(usersToId[values.assigned_user])
    const newValues = {...values, assigned_user:values.assigned_user}
    if(task !== null){
      
      dispatch(editTask(newValues))
      agent.updateTask(task.id,newValues);
    }else{
      dispatch(addTask(newValues))
      agent.createTask(newValues);
    }

    dispatch(changeDisplay(TASKLIST))
    
    console.log(newValues)
  }

  const handleCancel = () => {
    dispatch(changeDisplay(TASKLIST))
    dispatch(toggleEdit())
  }

  const handleDelete = async (id) => {
      
      dispatch(removeTask(id))
      dispatch(changeDisplay(TASKLIST))
      agent.deleteTask(id)
      
  }

  return (
    <div style={{height:"100%"}}>
        <form onSubmit={handleSubmit}>
          <div className='task__form__body__item'>
            <label>Task Description</label>
            <input value={values.task_msg} onChange={(e)=>setValues({...values,task_msg:e.target.value})} placeholder='task description'/>
          </div>

          <div style={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <div style={{width:"50%",display:"flex",flexDirection:"column"}}>
              <label>Date</label>
              <input value={values.task_date} onChange={(e)=>setValues({...values,task_date:e.target.value})} style={{width:"90%",marginTop:"10px"}} type="date" placeholder=''/>
            </div>
            <div style={{width:"50%",display:"flex",flexDirection:"column"}}>
              <label>Time</label>
              <input value={values.task_time} onChange={(e)=>setValues({...values,task_time:e.target.value})} style={{flex:1,marginTop:"10px"}} type="time" placeholder='task description'/>
            </div>
          </div>

          <div className='task__form__body__item'>
            <label>Assign User</label>
            {/* <input value={values.assigneduser} onChange={(e)=>setValues({...values,assigned_user:e.target.value})} placeholder='assign user'/> */}
            <select value={usersToId[values.assigned_user]} onChange={(e)=> setValues({...values,assigned_user:e.target.value})}>
              {task == null && <option value="">Choose a user</option> }
              <option value={task !== null ? usersToId[task.assigned_user] : usersToId["Saravanan C"]}>{task !== null ? task.assigned_user : "Saravanan C"}</option>
              <option value={task !== null ? usersToId[secondUser] : usersToId["Sundar Pichai"]}>{task !== null ? secondUser : "Sundar Pichai"}</option>
            </select>
          </div>

          <div className='form__button__container'>
               
              <div style={{display:"flex",justifyContent:"",alignItems:"center"}}>
                  {
                    edit && <DeleteIcon onClick={()=>handleDelete(values.id)} style={{color:"grey"}}/>
                  }
              </div>
                
                
              <div style={{display:"flex"}}>
                <button onClick={handleCancel} className='cancel__button'>Cancel</button>
                <button type="submit" className='save__button'>Save</button>
              </div>
          </div>
          
        </form>
    </div>
  )
}

export default CreateTaskForm