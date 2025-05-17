import { Expense } from '../common/Expense';
import { FC } from 'react';
import Navbar from "../components/Navbar";
import '../App.css';

export interface ViewExpensesProps {
  expenses: Expense[];
}

const ViewExpense: FC<ViewExpensesProps> = ({ expenses }) => {
  return (
    <div className="container">
      <h1>Expenses</h1>
      <div>
        {expenses.length === 0 ? (
          <p>No expense added yet</p>
        ) : (
          <ul className="expense-list">
            {expenses.map((expense) => {
              const formattedDate = new Date(expense.date).toLocaleDateString();
              return (
                <li key={expense.id} className="expense-item">
                  <strong>{expense.expenseName}</strong> - ₹{expense.amount} <span className="date">({formattedDate})</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default ViewExpense;
