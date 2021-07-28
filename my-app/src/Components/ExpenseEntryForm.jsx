import React from 'react';

const ExpenseEntryForm = ({ handleentryForm, inputVal }) => {
  return (
    <div className="expense-entry-form--input">
      <input type="number" value={inputVal} onChange={handleentryForm} />
    </div>
  );
};

export default ExpenseEntryForm;
