import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';

function Home() {

  const [projectsList, setProjectsList] = useState([]);
  const [tasksList, setTasksList] = useState([]);


  useEffect(() =>{
    axios.get("http://localhost:3001/projects").then((response) =>{
      setProjectsList(response.data);
    });
    axios.get("http://localhost:3001/tasks").then((response) =>{
      setTasksList(response.data);
    });
  }, []);

  return (
    <div>
      {projectsList.map((value, key) =>{
        return( 
          <div className='projects'>
            <div className='projectName'>{value.project_name}</div>
            <div className='projectDescription'>{value.project_description}</div>
            <div className='projectStartDate'>{value.project_start_date}</div>
          </div>          
        );
      })}

      {tasksList.map((value, key) =>{
        return( 
          <div className='tasks'>
            <div className='taskTitle'>{value.task_title}</div>
            <div className='taskDescription'>{value.task_description}</div>
            <div className='taskFinishDate'>{value.task_finish_date}</div>
            <div className='taskDone'>{value.task_done}</div>            
          </div>          
        );
      })}
    </div>
  )
}

export default Home