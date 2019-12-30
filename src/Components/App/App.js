import React from 'react';
import './App.css';
import AddBill from '../AddBill/AddBill';
import BillList from '../BillList/BillList';
import { BillProvider } from '../../Context/BillContext';
import BillTotal from '../BillTotal/BillTotal';

const App = () => {
  return (
    <div className='bills-container'>
      <BillProvider>
        <AddBill />
        <BillTotal />
        <BillList />
      </BillProvider>
    </div>
  );
}

export default App;
