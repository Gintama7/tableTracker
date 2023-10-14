import React,{useState} from 'react'


const Tables = (props) => {
  
  const deleteHandler=()=>{
    
    localStorage.removeItem(props.id);
  }
 
  
  return (
    <div>
      {props.table=='table1'&&( <ul><h2>Table 1</h2>
      <li >{props.price}-{props.table}-{props.dish}<button onClick={deleteHandler}>Delete</button></li>
      </ul>)}
      {props.table=='table2' && (<ul><h2>Table 2</h2>
      <li>{props.price}-{props.table}-{props.dish} <button onClick={deleteHandler}>Delete</button></li>
      </ul>)}
     
      
      {props.table=='table3' && (<ul><h2>Table 3</h2>
      <li>{props.price}-{props.table}-{props.dish} <button onClick={deleteHandler}>Delete</button></li> 
       </ul>)}
    </div>
    
  )
}

export default Tables
