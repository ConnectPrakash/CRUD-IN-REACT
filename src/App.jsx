import React, { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Createusers from './component/Createusers'
import Editusers from './component/Editusers'
import Deleteuser from './component/deleteuser'


function App(props) {
  const padding ={
    padding:5,
  }
 const[notes,setnotes]=useState(props.notes)
  return (
    <div>
 <Router>
        <div>
          <Link to="/" style={padding}>Home</Link>
          <Link to="/dashboard" style={padding}>Dashboard</Link>
          <Link to="/create" style={padding}>Create</Link>
          <Link to="/Edit" style={padding}>Edit</Link>
          <Link to="/Delete" style={padding}>Delete</Link>

        </div>
        <Routes>
          <Route path='/'/>
          <Route path='/dashboard' element={<Dashboard notes={notes}/>}/>
          <Route path='/create' element={<Createusers notes={notes}/>} />
          <Route path='/Edit' element={<Editusers />}/>
          <Route path='/Delete' element={<Deleteuser/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App