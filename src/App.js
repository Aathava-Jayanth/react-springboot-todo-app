import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min.js';

import Navbar from './Navbar/Navbar';
import Home from './Pages/Home';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import AddTask from './Controller/AddTask';
import EditTask from './Controller/EditTask';

function App() {
  return (
    <div className="App">
      
      

      <Router>
        <Navbar />
        
        <Routes>

          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/addtask" element={<AddTask />}></Route>
          <Route exact path="/edittask/:id" element={<EditTask />}></Route>

        </Routes>
      </Router>


    </div>
  );
}

export default App;
