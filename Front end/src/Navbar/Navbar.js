import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
            <nav class="navbar navbar-expand-lg navbar-dark my-navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Todo App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <Link class="nav-link btn" to="/addtask">Add Task</Link>
                    </div>
                    </div>
                </div>
            </nav>
  )
}
