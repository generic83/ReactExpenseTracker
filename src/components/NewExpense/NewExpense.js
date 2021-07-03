import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const addNewExpenseHandler = () => {
    setIsEditing(true);
  }

  const cancelExpenseDataHandler = () => {
    setIsEditing(false);
  }

  const [isEditing, setIsEditing] = useState(false);
  let content = <button onClick={addNewExpenseHandler}>Add New Expense</button>

  if (isEditing) {
    content = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpense={cancelExpenseDataHandler} />
  }

  return (
    <div className="new-expense">
      {content}
    </div>
  );
}

export default NewExpense;