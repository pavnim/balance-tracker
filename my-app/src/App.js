import React, { useState } from 'react';
import ExpenseEntryForm from './Components/ExpenseEntryForm';
import ExpenseEntryDisplay from './Components/ExpenseEntryDisplay';
import ExpenseEntryBalance from './Components/ExpenseEntryBalance';
import ExpenseEntryButton from './Components/ExpenseEntryButton';

export default function App() {
  const str = new Date().toISOString();
  const [balance, setBalance] = useState(0);
  const [inputVal, setinputVal] = useState(0);
  const [actionType, setactionType] = useState('');
  const [transcation, setTranscation] = useState([]);
  const handleentryForm = event => {
    setinputVal(event.target.value);
  };
  const handleAdd = () => {
    setBalance(balance + parseInt(inputVal));
    setactionType('Add');
    addTransaction('Add');
    setinputVal('');
  };
  const handleSubtract = () => {
    setBalance(balance - parseInt(inputVal));
    setactionType('Remove');
    addTransaction('Remove');
    setinputVal('');
  };
  const addTransaction = actionType => {
    let copy = [...transcation];
    copy = [
      ...copy,
      {
        id: transcation.length + 1,
        inputval: inputVal,
        task: actionType,
        date: str
      }
    ];
    setTranscation(copy);
  };
  return (
    <div>
      <h1 className="expense-entry--heading">Expense Tracker - Basic</h1>
      <div className="expense-entry--form">
        <ExpenseEntryBalance balance={balance} />
        <ExpenseEntryForm
          handleentryForm={handleentryForm}
          inputVal={inputVal}
        />
        <ExpenseEntryButton
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
        />
      </div>
      <div className="expense-entry--display">
        <ExpenseEntryDisplay transcation={transcation} />
      </div>
    </div>
  );
}
