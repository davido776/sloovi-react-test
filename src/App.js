import { useEffect } from 'react';
import './App.css';

import TaskContainer from './components/Task/TaskContainer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import agent from './api/agent'
import {setTasks} from './redux/slices/taskSlice'
import {useDispatch} from "react-redux";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    
    agent.getTasks()
     .then((res) =>{
         dispatch(setTasks(res.data.results))
         console.log(res.data.results)
       })
     .catch(err => console.log(err))
    
    
 },[])

  return (
    
      <div className="container">
        <Sidebar/>
        <div style={{flex:1}}>
          <Header/>
          <div style={{marginLeft:"20px",marginTop:"20px"}}>
            <TaskContainer/>
          </div>
        </div>
      </div>
    
    
  );
}

export default App;
