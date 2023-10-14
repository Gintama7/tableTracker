
import { useState } from 'react';
import './App.css';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';


function App() {
  const [formData,setFormData] = useState([]);

  const formHandler=(item)=>{
   
    setFormData((prev)=>{
      return [item,...prev];
    }) 
    
  }
  return (
    <div className="app">
      <OrderForm formHandler={formHandler}/>
      <OrderList items={formData}/>
    </div>
  );
}

export default App;
