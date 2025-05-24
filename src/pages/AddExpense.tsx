import { useState } from "react"
import { Expense } from '../common/Expense'
import Navbar from "../components/Navbar";
import { inputConfig } from "../utils/Config";
import '../App.css'

interface AddExpenseProps {
    addExpense: (expense: Expense) => void;
}

function AddExpense({addExpense}: AddExpenseProps) {
  const [formData, setFormData] = useState({
      expenseName: '',
      amount: '',
      date: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (formData.expenseName && formData.amount && formData.date) {
        addExpense({
          ...formData,
          amount: parseFloat(formData.amount),
          id: Date.now(),
        });
        setFormData({ expenseName: '', amount: '', date: '' }); 
      } else {
        alert('Please fill in all fields.');
      }
  };
  return (
    <div className="container">
    <Navbar/>
    <h1>Add Expense</h1>
    <form>
      {inputConfig.map((ele)=>{
        return(
          <div key={ele.id}>
            <label htmlFor={ele.labelFor}>{ele.label}</label>
            <input 
              type={ele.type}
              name={ele.name}
              id={ele.id}
              value={formData[ele.name as keyof typeof formData]} 
              onChange={handleChange} 
              required
            />
          </div>
        )
      })}
      <button type="submit" onClick={handleSubmit}>Add Expense</button>
    </form>
    </div>
  )
}

export default AddExpense