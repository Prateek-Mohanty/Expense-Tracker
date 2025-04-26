import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddExpense from './pages/AddExpense'
import ViewExpense from './pages/ViewExpense'
import { useState } from 'react'
import './App.css'

export interface Expense {
  id: number;
  expenseName: string;
  amount: number;
  date: string;
}

function App() {

  const[expenses, setExpenses] = useState<Expense[]>([])

  const addExpense = (expense: Omit<Expense, 'id'>) => {
    const newExpense = {...expense, id:Date.now(),}
    setExpenses((prev)=>[...prev,newExpense])
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Dashboard/>}/>
        <Route path= "/add-expense" element={<AddExpense addExpense={addExpense}/>}/>
        <Route path= "/view-expense" element={<ViewExpense expenses={expenses}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
