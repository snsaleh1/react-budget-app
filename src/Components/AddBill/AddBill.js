import React, { useContext, useState, useEffect } from 'react';
import './style.css';

const AddBill = () => {

    const [newBillTitle, setNewBillTitle] = useState('');
    const [newBillCost, setNewBillCost] = useState('');
    //automatically makes inputs strings...

    return(
        <div className='add-bill-container'>
            <input className='add-bill-form-control form-control'
            placeholder='Enter bill title'
            type='text'
            value={newBillTitle}
            onChange={(e) => setNewBillTitle(e.target.value)}></input>
        
        </div>
    );
};

export default AddBill;