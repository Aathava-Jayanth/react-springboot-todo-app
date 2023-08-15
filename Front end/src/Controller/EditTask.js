import React, { useEffect, useState } from 'react'

import './AddTask.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditUser() {

  const [user, setUser] = useState({
    todo:""
  });

  const {todo} = user;

  let navigator = useNavigate();

  const {id} = useParams();

  useEffect( () =>
  {

    loadUser();

  },[]);

  const loadUser = async() => 
  {

      const result = await axios.get(`http://localhost:8080/api/works/${id}`);

      setUser(result.data);
  };

  const onInputChange = (e) => {
    
      setUser({...user, [e.target.name]:e.target.value})

  };

  const onSubmit = async (e) => {

    e.preventDefault();
    await axios.put(`http://localhost:8080/api/works/${id}`,user);
    navigator("/");

  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 border rounded offset-md-3 p-4 mt-5 add-container'>
            
          <h3>Edit Task</h3>

          <form onSubmit={ (e) => onSubmit(e)}>

            <div className='input-form mt-4'>
                <label htmlFor='Name' className='form-label h5'>Task : </label>
                <input type='text' className='m-3 add-input' 
                name="todo" 
                value={todo} 
                onChange={ (e) => onInputChange(e)}
                placeholder='Enter Your Task'></input>
            </div>

            <button type="submit" className='btn add-btn'>Submit</button>
            <Link to="/">
              <button className='btn add-btn'>Cancel</button>
            </Link>

          </form>
       
        </div>
      </div>
    </div>
  )
}
