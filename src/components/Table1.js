import React from 'react'

const Table1 = (props) => {
  return (
   <ul> Table 1
    <li>{props.price} - {props.dish} - {props.table}</li>
   </ul>
  )
}

export default Table1
