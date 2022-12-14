import { useState } from "react"
import Header from "./Component/Header";
import Tasks from "./Component/Tasks";
import AddTask from "./Component/AddTask";
function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks]= useState(
    [
        {
            id:1,
            text:'Doctors apointement',
            day:'Feb 5th at 2:30pm',
            reminder:true,
        },
        {
            id:2,
            text:'Meeting at school',
            day:'Feb 6th at 1:30pm',
            reminder:true,
        },
        {
            id:3,
            text:'Food shopping',
            day:'Feb 5th at 2:30pm',
            reminder:false,
        },
    ]
)
//Add Task
const  addTask = (task)=>{
  const id = Math.floor(Math.random()*1000)+1
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}
 //delete Task
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}
//Toggle Reminder
const ToggleReminder = (id)=>{
  setTasks(
    tasks.map((task)=>
    task.id === id ?{...task,reminder:!task.reminder}:task
    )
  )
}
 
return (
    <div className="container">
        <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask  onAdd={addTask}/>}
        {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={ToggleReminder}/>):'No task to show'}
    </div>
    
  );
}

export default App;
