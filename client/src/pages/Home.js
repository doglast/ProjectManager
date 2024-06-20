import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  let navigate = useNavigate();
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() =>{
    axios.get("http://localhost:3001/projects").then((response) =>{
      setProjectsList(response.data);
    });
  }, []);

  return (
    <div>
      {projectsList.map((value, key) =>{
        return( 
          <div 
            className='project'
            onClick={() => {
              navigate(`/project/${value.project_id}`);
            }}
          >
            <div className='title'>{value.project_name}</div>
            <div className='body'>{value.project_description}</div>
            <div className='footer'>{value.project_start_date}</div>
          </div>          
        );
      })}
    </div>
  )
}

export default Home