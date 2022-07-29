import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ExpanseItem from "./components/ExpanseItem";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expanses = [
    {id:"el1", title: "Car Insurance", amount: 297.64, date: new Date(2022, 6, 8) },
    {id:"el2", title: "News Paper", amount: 287.64, date: new Date(2022, 6, 9) },
    {id:"el3", title: "Tv Channel", amount: 247.24, date: new Date(2022, 5, 10) },
  ];

  const [expense,setnewExpense]=useState(expanses);

  const addnewExpenseHandler = (newExpense) => {
    //console.log(newExpense);
    setnewExpense([newExpense,...expense]);
    //console.log(expense);
  };

  return (
    <div>
      <NewExpense saveNewExpense={addnewExpenseHandler} />

      {expense.map(exp=><ExpanseItem key={exp.id} date={exp.date} title={exp.title} amount={exp.amount} />)}
      {/* <ExpanseItem
        date={expanses[0].date}
        title={expanses[0].title}
        amount={expanses[0].amount}
      ></ExpanseItem>
      <ExpanseItem
        date={expanses[1].date}
        title={expanses[1].title}
        amount={expanses[1].amount}
      ></ExpanseItem>
      <ExpanseItem
        date={expanses[2].date}
        title={expanses[2].title}
        amount={expanses[2].amount}
      ></ExpanseItem> */}
    </div>
  );
}

export default App;
