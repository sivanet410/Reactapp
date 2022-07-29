import React from 'react';
import './NewExpense.css';
import ExpenseFrom from './ExpenseForm';

const NewExpense = (props) => {

    const saveAddExpenseHandler= (newExpense) =>{

        console.log(newExpense);
        props.saveNewExpense(newExpense);
    }

    return (
        <div className='new-expense'>
            <ExpenseFrom saveAddExpense={saveAddExpenseHandler}></ExpenseFrom>
        </div>
    );
}

export default NewExpense;