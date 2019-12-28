import React, { useContext, useState, useEffect } from 'react';
import './style.css';

const AddBill = () => {

    const [newBillTitle, setNewBillTitle] = useState('');
    const [newBillCost, setNewBillCost] = useState('');
    //But automatically makes inputs strings...

    //function to tell us whether the form is valid:
    const billObjectValid = () => {
        //newBillCost is truthy AND is a number
        const costValid = newBillCost && Number.parseFloat(newBillCost);
        //newBillTitle is truthy AND not just whitespace characters
        const titleValid = newBillTitle &&
            newBillTitle.split('').find(char => char !== ' ');
        return titleValid && costValid;
    };

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
            <button className='add-bill-form-control btn btn-primary'
            onClick={() => {

            }}>Add Bill</button>
        
        </div>
    );
};

export default AddBill;