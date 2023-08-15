import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import './AddTask.css';

export default function AddTask() {


    const [user, setUser] = useState({
        todo:""
      });
    
      const {todo} = user;
    
      const onInputChange = (e) => {
        
          setUser({...user, [e.target.name]:e.target.value})
    
      };
    
    
      let navigator = useNavigate();
    
      const onSubmit = async (e) => {
    
        e.preventDefault();
        await axios.post("http://localhost:8080/api/works",user);
        navigator("/");
    
      }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 border rounded offset-md-3 p-4 mt-5 add-container'>
            
          <h3>Add Task</h3>

          <form onSubmit={ (e) => onSubmit(e)}>

            <div className='input-form mt-4'>
                <label htmlFor='Task' className='form-label h5'>Task : </label>
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
