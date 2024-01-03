import React from 'react'

function Dashboard({notes}) {
   

  return (
    <div>
        <h2>Dashboard</h2>
        <div>
            <ul>
               {notes.map(note =>{
                return <li key={note.id}>{note.name}</li>
                              })}
            </ul>
           
        </div>
      
    </div>
  )
}

export default Dashboard