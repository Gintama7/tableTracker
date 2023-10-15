import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = (props) => {
    const [idInput,setIdInput] = useState('');
    const [priceInput,setPriceInput] = useState('');
    const [dishInput,setDishInput] = useState('');
    const [tableOption,setTableOption] = useState('');

const idChangeHandler=(e)=>{
    setIdInput(e.target.value);
}
const priceChangeHandler=(e)=>{
    setPriceInput(e.target.value);
}

const dishChangeHandler=(e)=>{
    setDishInput(e.target.value);
}

const tableChangeHandler=(e)=>{
    setTableOption(e.target.value);
}

    const submitHandler =(e)=>{
        e.preventDefault();
       const obj = {id:+idInput,price:+priceInput,dish:dishInput,table:tableOption};
       let obj1= JSON.stringify(obj);
       localStorage.setItem(idInput,obj1);
       props.formHandler(obj);
       setIdInput('');
       setDishInput('');
       setPriceInput('');
       setTableOption("choose an option");
    }

  return (
    <form onSubmit={submitHandler}>
        <label htmlFor="orderId">Unique Order ID</label>
        <input type="text" name="orderId" id="" onChange={idChangeHandler} value={idInput}/>
        <label htmlFor="price">Choose Price</label>
        <input type="number" name='price'onChange={priceChangeHandler} value={priceInput} />
        <label htmlFor="dish">Choose Dish</label>
        <input type="text" name="dish" id="" onChange={dishChangeHandler} value={dishInput}/>
        <label htmlFor="tableId">Choose a Table</label>
        <select name="tableId" id="" onChange={tableChangeHandler} value={tableOption}>
            <option value="choose an option">Choose An Option</option>
            <option value="table1">Table 1</option>
            <option value="table2">Table 2</option>
            <option value="table3">Table 3</option>
        </select>
        <button type='submit'>Add to Bill</button>
    </form>
  )
}

export default OrderForm
