import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("All");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses =
    filteredYear === "All"
      ? props.data
      : props.data.filter(
          (item) => item.date.getFullYear().toString() === filteredYear
        );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
