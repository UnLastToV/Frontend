import React, { Component } from 'react'
import {Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //???
import './App.css';

import AddTutorial from './components/AddTutorial';
import Tutorial from './components/Tutorial';
import TutorialList from './components/TutorialList';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <Link to="/Tutorial" className='navbar-Brand'>
                NBU
            </Link>
            <div className='navbar-nav mr-auto'>
                <li className='nav-item'>
                    <Link to="" className='nav-link'>
                        Lesson
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/Add" className='nav-link'>
                        Add
                    </Link>
                </li>
            </div>
        </nav>

        <div className='container mt=3'>
            <Routes>
                <Route path='/' element={<TutorialList />}/>
                <Route path='/tutorials' element={<TutorialList />}/>
                <Route path='/add' element={<AddTutorial />}/>
                <Route path='/tutorial/:Number' element={< Tutorial/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </div>
        </>
        //<p class = "text-danger">!!!!!!!</p>
        //Hello wrold! <a href="#" class="btn btn-primary">GO</a>
    )
  }
}

export default App;