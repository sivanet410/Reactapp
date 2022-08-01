import React from "react";

const ExpenseFilter = (props) => {
  const onChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div>
      <label style={{fontWeight:'bold'}}>Filter By year</label>
      <select style={{float:'right',fontWeight:'bold'}} value={props.selected} onChange={onChangeHandler}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
