import React from 'react'

function Form({setName, name}) {

const handleInput = (ev) =>{
    setName(ev.target.value)
}
  return (
 
    <form className="form">
     <label className='label_name'>Escribe tu nombre</label>
     <input type="text" name='name' id='name' onChange={handleInput} value={name}/>
    </form>
    
  )
}

export default Form
