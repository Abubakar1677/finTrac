import React, { createContext, useState } from 'react';

export const ExpContext = createContext();

export const ExpProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { id: Date.now().toString(), ...transaction },
    ]);
  };

  return (
    <ExpContext.Provider value={{ transactions, setTransactions, addTransaction }}>
      {children}
    </ExpContext.Provider>
  );
};
