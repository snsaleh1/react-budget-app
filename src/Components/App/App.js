import React from 'react';
import './App.css';
import AddBill from '../AddBill/AddBill';
import BillList from '../BillList/BillList';

const App = () => {
  return (
    <div className='bills-container'>
      <AddBill />
      <BillList />
    </div>
  );
}

export default App;
