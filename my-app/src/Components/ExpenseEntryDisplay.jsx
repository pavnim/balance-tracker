import React, { useState, useEffect } from 'react';

const ExpenseEntryDisplay = ({ transcation }) => {
  return (
    <div>
      <p className="expense-form--display-heading">Transactions:</p>
      {transcation.map(eachTransaction => {
        return (
          <div>
            {eachTransaction.date} - {eachTransaction.inputval} -{' '}
            {eachTransaction.task}
          </div>
        );
      })}
      <div />
    </div>
  );
};

export default ExpenseEntryDisplay;
