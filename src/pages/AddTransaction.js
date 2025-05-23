import React from 'react';
import { useTransactionDispatch } from '../store/transactionStore';
import TransactionForm from '../components/TransactionForm';
import { useNavigate } from 'react-router-dom';

export default function AddTransaction() {
  const dispatch = useTransactionDispatch();
  const navigate = useNavigate();

  async function handleAdd(transaction) {
    try {
      const res = await fetch('/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transaction),
      });
      const data = await res.json();
      dispatch({ type: 'ADD_TRANSACTION', payload: data });
      navigate('/');
    } catch (err) {
      alert('Failed to add transaction');
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h2>Add Transaction</h2>
      <TransactionForm onSubmit={handleAdd} />
    </div>
  );
}
