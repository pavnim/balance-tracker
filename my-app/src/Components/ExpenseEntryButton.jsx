import React from 'react';

const ExpenseEntryButton = ({ handleSubtract, handleAdd }) => {
  return (
    <div className="expenseform-button-wrapper">
      <button
        className="expenseform-button-wrapper--addbtn"
        onClick={handleAdd}
      >
        Add
      </button>
      <button
        className="expenseform-button-wrapper--subbtn"
        onClick={handleSubtract}
      >
        Remove
      </button>
    </div>
  );
};

export default ExpenseEntryButton;
