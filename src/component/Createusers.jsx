import React, { useState } from 'react'

function Createusers(props) {
  
    const [note,setNote] = useState(props.notes);
    const [newname,setnewName]=useState();
    const handlesubmit=(event)=>{
        event.preventDefault();
         console.log("button clicked");
          const name = {
            id:note.length+1,
            name: newname
          }
     setNote(note.concat(newname));   

    }
    const handlename =(event) =>{
        setnewName(event.target.value);
        console.log(event.target.value)
    }
  return (
    <div>
        <h2> Createusers</h2>
        <form onSubmit={handlesubmit}>
            <input value={newname} onChange={handlename}/>
            <button type='submit'>Save</button>
        </form>
       </div>
  )
}

export default Createusers