import React from "react";

import ExpanseItem from "./ExpanseItem";


const ExpenseList = props => {
  
  if (props.items.length === 0) {
   return  <h2 className="expenses-list__fallback">No Expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map(exp => (
        <ExpanseItem
          key={exp.id}
          date={exp.date}
          title={exp.title}
          amount={exp.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
