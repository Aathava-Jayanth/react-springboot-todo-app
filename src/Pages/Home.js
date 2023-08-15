import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {

    const[users,setUsers] = useState([]);

    useEffect( () =>
    {
        console.log("Hi Aathava");

        loadUser();
    },[]);

    const loadUser = async() => 
    {
        const result = await axios.get("http://localhost:8080/api/works");
    
        console.log(result.data);

        setUsers(result.data);
    };

    const deleteUser = async (id) =>
    {
        await axios.delete(`http://localhost:8080/api/works/${id}`);
        loadUser();
    }

  return (
    <div className="container-fluid sample-container">
          <div className="row row-container">
                <table className="table table-container">
                  <thead>
                    <tr>
                      <th scope="col">No. of Task</th>
                      <th scope="col">Task</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                      {

                        users.map( (user , index) => (

                          <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{user.todo}</td>
                            <td>
                              <Link className='btn my-btn'
                                to={`/edittask/${user.id}`}
                              >Edit</Link>
                              
                              <button className='btn my-btn'
                                onClick={ () => deleteUser(user.id)}
                              >Delete</button>
                            </td>
                          </tr> 

                        ))

                      }
   

                  </tbody>
                </table>
          </div>
         </div>
  )
}
