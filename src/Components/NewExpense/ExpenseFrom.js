import React, { useState } from "react";
import "./ExpenseFrom.css";

const ExpenseFrom = (props) => {
  const [entereTitle, setEntereTitle] = useState("");
  const [entereAmount, setEntereAmount] = useState("");
  const [entereDate, setEntereDate] = useState("");
  const [toggol, setToggol] = useState(false);

  const toggolHandler = () => {
    setToggol(!toggol);
  } 

  // const [userInput, setUserInput] = useState({
  //     entereTitle: '',
  //     entereAmount: '',
  //     entereDate: '',
  // });

  const titleChangedHandler = (event) => {
    setEntereTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     entereTitle: event.target.value,
    // })
    // setUserInput((prevState) => {
    //     return {...prevState, entereTitle: event.target.value};
    // })
  };

  const amountchangedHandler = (event) => {
    setEntereAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     entereAmount: event.target.value,
    // })
  };

  const dateChangedHandler = (event) => {
    setEntereDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     entereDate: event.target.value,
    // })
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: entereTitle,
      amount: entereAmount,
      date: new Date(entereDate),
    };
    props.onSaveExpenseData(expenseData)
    setEntereTitle("");
    setEntereAmount("");
    setEntereDate("");
  };

  return (
    <div>
      { toggol && <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input type="text" 
            value={entereTitle}
            onChange={titleChangedHandler} 
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={entereAmount}
              onChange={amountchangedHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={entereDate}
              onChange={dateChangedHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={toggolHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>}
      {!toggol && <div className="new-expense__actions-add">
          <button onClick={toggolHandler}>Add New Expense</button>
      </div>}
    </div>
  );
};

export default ExpenseFrom;
