import React from 'react';
import { useTransactionState, useTransactionDispatch } from '../store/transactionStore';
import DashboardSummary from '../components/DashboardSummary';
import TransactionItem from '../components/TransactionItem';

export default function Dashboard() {
  const { transactions, loading, error } = useTransactionState();
  const dispatch = useTransactionDispatch();

  async function handleDelete(id) {
    try {
      await fetch(`/api/transactions/${id}`, { method: 'DELETE' });
      dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    } catch (err) {
      alert('Failed to delete transaction');
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h2>Dashboard</h2>
      <DashboardSummary transactions={transactions} />
      <h3>Recent Transactions</h3>
      {transactions.length === 0 && <p>No transactions found.</p>}
      {transactions.slice(-5).reverse().map(t => (
        <TransactionItem key={t.id} transaction={t} onDelete={handleDelete} />
      ))}
    </div>
  );
}
