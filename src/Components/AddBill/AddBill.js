import React, { useContext, useState, useEffect } from 'react';
import './style.css';

const AddBill = () => {

    const [newBillTitle, setNewBillTitle] = useState('');
    const [newBillCost, setNewBillCost] = useState('');
    //But automatically makes inputs strings...



    return(
        <div className='add-bill-container'>
            <input className='add-bill-form-control form-control'
            placeholder='Enter bill title'
            type='text'
            value={newBillTitle}
            onChange={(e) => setNewBillTitle(e.target.value)}></input>
            <input className='add-bill-form-control form-control'
            placeholder='Enter bill monthly cost'
            type='number'
            value={newBillCost}
            onChange={(e) => setNewBillCost(e.target.value)}></input>
            <button className='add-bill-form-control btn btn-primary'>Add Bill</button>
        
        </div>
    );
};

export default AddBill;