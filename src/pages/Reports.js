import React from 'react';
import { useTransactionState } from '../store/transactionStore';

export default function Reports() {
  const { transactions, loading, error } = useTransactionState();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Group expenses by category
  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h2>Reports</h2>
      <h3>Expenses by Category</h3>
      {Object.keys(expensesByCategory).length === 0 && <p>No expense data.</p>}
      <ul>
        {Object.entries(expensesByCategory).map(([category, amount]) => (
          <li key={category}>
            {category}: ${amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
