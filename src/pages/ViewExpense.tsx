import { Expense } from "../App"
import { FC } from 'react';
import Navbar from "../components/Navbar";
import '../App.css'

export interface ViewExpensesProps{
    expenses: Expense[]
}
const ViewExpense: FC<ViewExpensesProps> = ({ expenses }) => {
  return (
    <div className="container">
    <h1>Expenses</h1>
    <div>
        {expenses.length === 0 ?(
            <p>No expense added yet</p>
        ):(
            <ul>
                {expenses.map((expense)=>{
                    return(<li key={expense.id}>{`${expense.expenseName}-₹${expense.amount}:${expense.date}`}</li>)
                })}
            </ul>
        )}
    </div>
    <Navbar/>
    </div>
  )
}

export default ViewExpense