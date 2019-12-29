import React from 'react';
import './App.css';
import AddBill from '../AddBill/AddBill';
import BillList from '../BillList/BillList';
import { BillProvider } from '../../Context/BillContext';

const App = () => {
  return (
    <div className='bills-container'>
      <BillProvider>
        <AddBill />
      </BillProvider>
      <BillList />
    </div>
  );
}

export default App;
