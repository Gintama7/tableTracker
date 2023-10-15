
import { useState } from 'react';
import './App.css';
import OrderForm from './components/OrderForm';
// import OrderList from './components/OrderList';


function App() {
  const [formData,setFormData] = useState('');
  const [tab1Info,setTab1Info] = useState([]);
const [tab2Info,setTab2Info] = useState([]);
const [tab3Info,setTab3Info] = useState([]);




  const formHandler=(item)=>{
   
    setFormData(item); 
    
      if(item.table == 'table1')
      {
         setTab1Info((prev)=> [item,...prev]);
         console.group(tab1Info,"info success");
      }
      else if(item.table == 'table2')
      {
        setTab2Info((prev)=>[item,...prev]);
      }
      else if(item.table == 'table3')
      {
        setTab3Info((prev)=>[item,...prev]);
      }
      
  }
  

  const deleteHandler=(e)=>{
    const mainParent = e.target.parentElement.parentElement;
    mainParent.removeChild(mainParent.lastElementChild);
    localStorage.removeItem(formData.id);
  }
  return (
    <div className="app">
      <OrderForm formHandler={formHandler}/>
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
  );
}

export default App;
