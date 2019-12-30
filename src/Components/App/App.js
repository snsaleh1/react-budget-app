import React, { useContext } from 'react';
import './App.css';
import AddBill from '../AddBill/AddBill';
import BillList from '../BillList/BillList';
import { BillContext } from '../../Context/BillContext';
import BillTotal from '../BillTotal/BillTotal';
import BillOptions from '../BillOptions/BillOptions';

const App = () => {

  const { editModeEnabled } = useContext(BillContext);

  return (
    <div className='bills-container'>
        <BillOptions />
        <AddBill />
        <BillTotal />
        <BillList />
    </div>
  );
}

export default App;
