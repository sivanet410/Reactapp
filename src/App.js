import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expanses = [
    {
      id: "el1",
      title: "Car Insurance",
      amount: 297.64,
      date: new Date(2022, 6, 8),
    },
    {
      id: "el2",
      title: "News Paper",
      amount: 287.64,
      date: new Date(2022, 6, 9),
    },
    {
      id: "el3",
      title: "Tv Channel",
      amount: 247.24,
      date: new Date(2022, 5, 10),
    },
    {
      id: "el4",
      title: "Sports Channel",
      amount: 47.24,
      date: new Date(2020, 5, 10),
    },
    {
      id: "el5",
      title: "Amazon",
      amount: 27.24,
      date: new Date(2021, 5, 10),
    },
  ];

  const [expense, setnewExpense] = useState(expanses);
  const [filteredYear, setfilteredYear] = useState("2020");

  const addnewExpenseHandler = newExpense => {
    //console.log(newExpense);
    setnewExpense([newExpense, ...expense]);
    //console.log(expense);
  };

  const filterchangeHandler = selectedyear => {
    setfilteredYear(selectedyear);
  };

  const filteredExpenses = expense.filter(exp => {
    return exp.date.getFullYear().toString() === filteredYear;
  });

 
 
 
  // let filteredcontent = <p>No Expenses found</p>;

  // if (filteredExpenses.length > 0) {
  //   filteredcontent = filteredExpenses.map(exp => (
  //     <ExpanseItem
  //       key={exp.id}
  //       date={exp.date}
  //       title={exp.title}
  //       amount={exp.amount}
  //     />
  //   ));
  // }



  return (
    <div>
      <NewExpense saveNewExpense={addnewExpenseHandler} />

      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterchangeHandler}
      />

      <ExpenseList items={filteredExpenses}></ExpenseList>

      {/* {filteredcontent} */}
      
      
      
      {/* using and condition */}
      {/* {filteredExpenses.length === 0 && <p>No Expenses found</p>}
    {filteredExpenses.length > 0 && (
        filteredExpenses.map(exp => (
          <ExpanseItem
            key={exp.id}
            date={exp.date}
            title={exp.title}
            amount={exp.amount}
          />
        ))
      )} */}

      {/* using Terinary operator condition */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No Expenses found</p>
      ) : (
        filteredExpenses.map(exp => (
          <ExpanseItem
            key={exp.id}
            date={exp.date}
            title={exp.title}
            amount={exp.amount}
          />
        ))
      )} */}

      {/* {filteredExpenses.map(exp => (
        <ExpanseItem
          key={exp.id}
          date={exp.date}
          title={exp.title}
          amount={exp.amount}
        />
      ))} */}

      {/* {expense.map(exp => (
        <ExpanseItem
          key={exp.id}
          date={exp.date}
          title={exp.title}
          amount={exp.amount}
        />
      ))} */}
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
