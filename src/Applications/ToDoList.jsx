import React,{useState} from 'react';

function ToDoList(){
      const [tasks,setTasks]=useState([]);
     const [newTask,setNewTask]=useState("");
      function handleInputChange(e){
          setNewTask(e.target.value);
      }
      function handleAddTask(){
            if(newTask.trim()!==""){
                setTasks(t=>[...t,newTask]);
                setNewTask("");
            }
      }
      function handleRemoveTask(index){
             setTasks(t=>t.filter((_,i)=>i!==index));
      }
      function handleMoveTaskUp(index){
             if(index>0){
                const newTasks=[...tasks];
                [newTasks[index],newTasks[index-1]]=[newTasks[index-1],newTasks[index]];
                setTasks(newTasks);
             }
      }
      function handleMoveTaskDown(index){
                if(index<tasks.length-1){
                const newTasks=[...tasks];
                [newTasks[index],newTasks[index+1]]=[newTasks[index+1],newTasks[index]];
                setTasks(newTasks);
             }
      }
    return(
    <div className="to-do-list">
        <h1>To Do List</h1>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a Task"
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-button">Add</button>
        <ul className="task-list">
            {tasks.map((task,index)=><li key={index} className="task-item">
              <span className="task">{task}</span>
              <div className="buts">
                <button onClick={()=>handleRemoveTask(index)} className="button">❌</button>
               <button onClick={()=>handleMoveTaskUp(index)} className="button">👆</button>
               <button onClick={()=>handleMoveTaskDown(index)} className="button">👇</button>
              </div>
            </li>
        )}
           
        </ul>
    </div> 
    );
}
export default ToDoList;