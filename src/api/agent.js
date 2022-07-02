import axios from 'axios'

const access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTQ5NTg5NDAsIm5iZiI6MTY1NDk1ODk0MCwianRpIjoiMDBhZGE3MmYtMmIzYy00YmFjLWJjZjUtNjRhMTZjOGYzN2I3IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.dX5xl-Qy8rXZUpmmvXCbyDdEaWS5k4B1MK967Mua-OM"
const userId = "user_4ee4cf67ad474a27988bc0afb84cf472"
const companyId = "company_413ef22b6237417fb1fba7917f0f69e7"
const userName = "Saravanan C"

//get tasks

const body = {
    headers:{
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTQ5NTg5NDAsIm5iZiI6MTY1NDk1ODk0MCwianRpIjoiMDBhZGE3MmYtMmIzYy00YmFjLWJjZjUtNjRhMTZjOGYzN2I3IiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.dX5xl-Qy8rXZUpmmvXCbyDdEaWS5k4B1MK967Mua-OM`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

const getTask = async () => {
    // const tasks = await fetch(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${companyId}`,{
    //     method: "GET",
    //     Headers:{
    //         "Authorization": 'Bearer ' + access_token,
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
        

    // })
    //return tasks
    //let tasks;
    const tasks = await axios.get(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${companyId}`,{
            
            headers:{
                "Authorization": `Bearer ${access_token}`,
                "Accept": 'application/json',
                "Content-Type": 'application/json',
            },
            
    
        })

    return tasks;
}

//create task

const createTask = async (task) => {
    const tasks = await axios.post(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${companyId}`,task,{
        headers:{
            'Authorization': 'Bearer ' + access_token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        

    })
    return tasks
}

//edit task

const updateTask = async (taskId,body) => {
    const response = await axios.put(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${taskId}?company_id=${companyId}`,body,{
        headers:{
            'Authorization': 'Bearer ' + access_token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        
    })
    return response
}

//delete task

const deleteTask = async (taskId) => {
    const response = await axios.delete(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${taskId}?company_id=${companyId}`,{
        headers:{
            'Authorization': 'Bearer ' + access_token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
    return response
}

const agent ={getTask,createTask,updateTask,deleteTask}

export default agent

