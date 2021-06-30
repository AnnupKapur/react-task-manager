import { useState } from "react"
import './App.css';
import './styles/Appstyle.css';
import NewTask from "./components/NewTask";
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState(
    [
      {
        id:1,
        text:'Code React',
        due:'June 28th at 10pm',
        priority:true
      },
      {
        id:2,
        text:'Send Email',
        due:'Today at 10am',
        priority:false
      },
      {
        id:3,
        text:'Complete App',
        due:'June 30th at 5pm',
        priority:true
      }
    ]
  )

  const [showAddForm, setShowForm] = useState(false);

  //delete reminder
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  //toggle priority
  const bellTask = (id) => {
    setTasks(tasks.map((task) => task.id===id ? {id:task.id, text:task.text, due:task.due, priority:!task.priority} : task))
  }

  //add new reminder
  const addTask = (tsk) => {
    setTasks([...tasks, tsk])
  }

  //show hide add new reminder form
  const showForm = () => {
    setShowForm(!showAddForm)
  }

  // set id of new task
  const lastID = tasks.length>0 ? tasks[tasks.length-1].id : 0

  return (
    <div className="App">
      <Header text="Reminders" newTask={showForm} isOpen={showAddForm}/>

      {showAddForm===true ? <NewTask onAdd={addTask} lastID={lastID}/> : ''}
      
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onBell={bellTask}/> : <div className="no-task">You are all caught up!</div>}
    </div>
  );
}



export default App;
