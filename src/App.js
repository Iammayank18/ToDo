import {useState} from 'react'

import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';


function App(){
  const [showAddTask, setshowAddTask]=useState(false);
   const[tasks, setTasks] =useState([
    { 
        id:1,
        text:'Call Raman',
        day:'may 29 2020',
        reminder:true,
    },

      { 
        id:2,
        text:'Call Ashok',
        day:'may 29 2020',
        reminder:true,
    },

      { 
        id:3,
        text:'Call Piyush',
        day:'may 29 2020',
        reminder:false,
    }
])

// Add Tasks
const addTasks =(task) =>{
 const id=Math.floor(Math.random()*100000)+1;
 const Newtask ={id,...task}
 setTasks([...tasks,Newtask]);
}
// Add Tasks
    
// Function for deleting the Tasks
const DeleteTask=(id) =>{
  setTasks(tasks.filter((task)=>task.id!==id))
}
// Function for deleting the Tasks



// toggle reminder

const toggleReminder=(id)=>{
setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!tasks.reminder}:task))
}





  return(
<>
<div className="">
  <Header title='Task' onAdd={()=>setshowAddTask(!showAddTask)} showAdd={showAddTask}/>
  {showAddTask && <AddTask onAdd={addTasks}/>}
  {tasks.length  > 0 ? <Tasks tasks={tasks} 
  onDelete={DeleteTask} onToggle={toggleReminder}/> :'No Taks To Show'}
</div>
</>
  );
}


export default App;