import React, { useState, createContext, useEffect } from 'react';

const BillContext = createContext();

const BillProvider = ({ children }) => {

    const [bills, setBills] = useState([]);
    const [selectedCostInterval, setSelectedCostInterval] = useState('Monthly');

    useEffect(() => {
        setBills(JSON.parse(localStorage.getItem('portexe-bills')) || []);
    }, [setBills]);

    useEffect(() => {
        console.log(bills);
    }, [bills]);

    const updateBills = (bill) => {
        const updatedBills = alphabeticalOrder([
            ...bills,
            bill
        ]);
        localStorage.setItem('portexe-bills', JSON.stringify(updatedBills));
        setBills(updatedBills);
    };

    const alphabeticalOrder = (bills) => {
        return bills.sort((a, b) =>
            a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 0);
    };

    const editBill = (billToUpdate) => {
        const billsFiltered = bills.filter((bill) => bill.title !== billToUpdate.title);
        const updatedBills = alphabeticalOrder([
            ...billsFiltered,
            billToUpdate
        ]);
        localStorage.setItem('portexe-bills', JSON.stringify(updatedBills));
        setBills(updatedBills);
    };

    return (
        <BillContext.Provider value={{
            bills,
            updateBills,
            editBill,
            selectedCostInterval,
            setSelectedCostInterval
        }}>
            {children}
        </BillContext.Provider>
    );
}

export {
    BillContext,
    BillProvider
};


















{/* <Component>
    //everything in between Component is a CHILD of Component
    <div>
        <comp1></comp1>
        <comp2>
            <comp3></comp3>
        </comp2>
    </div>
</Component> */}