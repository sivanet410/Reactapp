import React, { useState } from "react";
import "./Expanse.css";
import ExpanseDate from "./ExpanseDate";
import Card from "./Card.";

function ExpanseItem(props) {
  // const date="July 10 2022";
  // const title="News Paper";
  // const amount="260.64";

  // const month=props.date.toLocaleString("en-Us", { month: "long" });
  // const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
  // const year=props.date.getFullYear();

  // function chTitleHanndler(){
  //   console.log('clicked !!');
  // }

  const [title, setTitle] = useState(props.title);

  const chTitleHanndler = () => {
    setTitle("updated !!");
    console.log("clicked !!");
  };

  return (
    // <div className="expense-item">
    //   <div>{date.toString()}</div>
    //   <div className="expense-item__description">
    //     <h2>{title}</h2>
    //     <div className="expense-item__price">${amount}</div>
    //   </div>
    // </div>

    <li>
      <Card className="expense-item">
        {/* <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div> */}
        <ExpanseDate date={props.date}></ExpanseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>

        <button onClick={chTitleHanndler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpanseItem;
