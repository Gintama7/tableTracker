import React, { useState } from 'react'
import Tables from'./Tables';

const OrderList = (props) => {
  const [tab1Info,setTab1Info] = useState([]);
const [tab2Info,setTab2Info] = useState([]);
const [tab3Info,setTab3Info] = useState([]);

  if(props.items.table == 'table1')
      {
         setTab1Info((prev)=> [props.items,...prev]);
      }
      else if(props.items.table == 'table2')
      {
        setTab2Info((prev)=>[props.items,...prev]);
      }
      else if(props.items.table == 'table3')
      {
        setTab3Info((prev)=>[props.items,...prev]);
      }

      const deleteHandler=(e)=>{
        const mainParent = e.target.parentElement.parentElement;
        mainParent.removeChild(mainParent.lastElementChild);
        localStorage.removeItem(props.items.id);
      }
  return (
  <div>    
    <ul id="table1List"><h2>Table 1</h2> 
  {tab1Info.map((item)=>(
    <li key={item.id}>{item.dish} - {item.table} - {item.price} <button onClick={deleteHandler}>Delete</button></li>
  ))}
   </ul>
   <ul id="table2List"><h2>Table 2</h2> 
  {tab2Info.map((item)=>(
    <li key={item.id}>{item.dish} - {item.table} - {item.price} <button onClick={deleteHandler}>Delete</button></li>
  ))}
   </ul>
   <ul id="table3List"><h2>Table 3</h2> 
  {tab3Info.map((item)=>(
    <li key={item.id}>{item.dish} - {item.table} - {item.price} <button onClick={deleteHandler}>Delete</button></li>
  ))}
   </ul>
        
 </div>
  )
}

export default OrderList
