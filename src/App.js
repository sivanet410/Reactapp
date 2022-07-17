import logo from "./logo.svg";
import "./App.css";
import ExpanseItem from "./components/ExpanseItem";

function App() {
  const expanses = [
    { title: "Car Insurance", amount: 297.64, date: new Date(2022, 6, 8) },
    { title: "News Paper", amount: 287.64, date: new Date(2022, 6, 9) },
    { title: "Tv Channel", amount: 247.24, date: new Date(2022, 5, 10) },
  ];

  return (
    <div>
      <h2> Learn React</h2>
      <ExpanseItem
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
      ></ExpanseItem>
    </div>
  );
}

export default App;
