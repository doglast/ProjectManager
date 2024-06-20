import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function CreateProject() {
  const initialValues =
  {
    project_name:"",
    project_description:"",
    project_start_date:"",
  }

  const onSubmit = (data) =>{
    axios.post("http://localhost:3001/projects", data).then((response) =>{
      console.log("Posted"); // todo modal de sucesso e redirect
    });
  }

  const validationSchema = Yup.object({
    project_name: Yup.string().required(),
    project_description: Yup.string(),
    project_start_date: Yup.date().required()
  });
  

  return (
    <div className='createProjectPage' >
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Nome do projeto</label>
          <ErrorMessage name="project_name" component="span" />
          <Field 
            autocomplete="off"
            id="inputCreateProject" 
            name="project_name" 
            placeholder="Nome do projeto"
          />
          <label>Descrição do projeto</label>
          <ErrorMessage name="project_description" component="span" />
          <Field 
            autocomplete="off"
            id="inputCreateProject" 
            name="project_description" 
            placeholder="Descrição do projeto"
          />
          <label>Data de início do projeto</label>
          <ErrorMessage name="project_start_date" component="span" />
          <Field 
            autocomplete="off"
            id="inputCreateProject" 
            name="project_start_date" 
            placeholder="DD/MM/AAAA"
          />

          <button type='submit'>Criar projeto</button>

        </Form>
      </Formik>
    </div>
  );
}
