import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const notes=[
  {
    id:1,
    name:"varun"
  },{
    id:2,
    name:"santhosh"
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes}/>)
