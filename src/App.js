import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";


const DataExpense = [
  { 
    id: 'e1',
    title: "Toilet Paper", 
    amount: 294.43, 
    date: new Date(2021, 2, 25) 
},
  { 
    id: 'e2',
    title: "New Tv", 
    amount: 234.34, 
    date: new Date(2020, 5, 23) 
  },
  { 
    id: 'e3',
    title: "Car Insurance", 
    amount: 233.32, 
    date: new Date(2021, 3, 13) 
  },
  { 
    id: 'e4',
    title: "New Desk (wooden)", 
    amount: 333.54, 
    date: new Date(2021, 5, 26) 
  },
];

function App() {
  
  const [expense, setExpense] = useState(DataExpense);

  const addExpenseHandler = (expenses) => {
    setExpense((prevExpense) => {
      return [expenses, ...prevExpense];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expense={expense}></Expenses>
    </div>
  );
}
export default App;
