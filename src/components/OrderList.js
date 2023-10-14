import React from 'react'
import Tables from'./Tables';

const OrderList = (props) => {


  return (
  <div>
    
    {props.items.map((item)=>(
        <Tables key={item.id} id={item.id} price={item.price}    table={item.table}    dish={item.dish}  />   ))}
 </div>
  )
}

export default OrderList
