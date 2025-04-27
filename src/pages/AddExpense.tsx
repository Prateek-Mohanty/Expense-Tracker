import { useState } from "react"
import { Expense } from '../common/Expense'
import Navbar from "../components/Navbar";
import '../App.css'

interface AddExpenseProps {
    addExpense: (expense: Expense) => void;
}

function AddExpense({addExpense}: AddExpenseProps) {
    const [amount, setAmount] = useState('')
    const [expenseName, setExpenseName] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        const newExpense = {
            expenseName,
            amount: parseFloat(amount),
            date,
        }

        addExpense(newExpense)

        setExpenseName('')
        setAmount('')
        setDate('')
    }
  return (
    <div className="container">
    <h1>Add Expense</h1>
    <form>
        <div>
            <label htmlFor="expenseName">Expense Name: </label>
            <input 
                type="text" 
                id="expenseName"
                name="ExpenseName"
                value={expenseName}
                onChange={(e)=>setExpenseName(e.target.value)}
                required
            />
        </div>

        <div>
            <label htmlFor="amount">Amount:</label>
                <input 
                    type="number" 
                    id="amount"
                    name="amount"
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}
                    required
                />
        </div>

        <div>
            <label htmlFor="date">Date: </label>
                <input 
                    type="date" 
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                    required
                />
        </div>

        <button type="submit" onClick={handleSubmit}>Add Expense</button>
    </form>
    <Navbar/>
    </div>
  )
}

export default AddExpense