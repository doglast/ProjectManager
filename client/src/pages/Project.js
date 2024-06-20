import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Project() {
  let { project_id } = useParams();
  const [projectObject, setProjectObject] = useState({});
  useEffect(() =>{
    axios.get(`http://localhost:3001/projects/byProjectId/${project_id}`).then((response) =>{
    setProjectObject(response.data);
    });
  }, []);

  return (
    <div className="projectPage">
      <div className="leftSide">
        <div className="project" id="individual">
          <div className="title"> {projectObject.project_name} </div>
          <div className="body">{projectObject.project_description}</div>
          <div className="footer">{projectObject.project_start_date}</div>
        </div>
      </div>      
    </div>
  );
}

export default Project;