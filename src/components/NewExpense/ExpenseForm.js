import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setenteredTitle] = useState("");
  // const [enteredAmount, setenteredAmount] = useState("");
  // const [enteredDate, setenteredDate] = useState("");

  const [userInput, setuserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const changeTitleHandler = (event) => {
    // setenteredTitle(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    setuserInput((previousState) => {
      return { ...previousState, enteredTitle: event.target.value };
    });
  };

  const changeAmountHandler = (event) => {
    // setenteredAmount(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    setuserInput((previousState) => {
      return { ...previousState, enteredAmount: event.target.value };
    });
  };
  const changeDateHandler = (event) => {
    //setenteredDate(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    setuserInput((previousState) => {
      return { ...previousState, enteredDate: event.target.value };
    });
  };

  const addnewexpenseHandler = (event) =>{
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount:userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }
    props.saveAddExpense(expenseData);

    // setuserInput({});
    setuserInput({
      enteredTitle:'',
      enteredAmount:'',
      enteredDate:''
    })
    console.log(userInput);
  }

  return (
    <form onSubmit={addnewexpenseHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={changeTitleHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={changeAmountHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={changeDateHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">AddnewExpense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
