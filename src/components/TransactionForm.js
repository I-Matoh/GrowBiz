import React, { useState } from 'react';
import { CATEGORIES } from '../constants/categories';

const FormGroup = ({ label, error, children }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2">{label}</label>
    {children}
    {error && <p className="text-danger text-sm mt-1">{error}</p>}
  </div>
);

export default function TransactionForm({ onSubmit }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [type, setType] = useState('expense');
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    if (!description.trim()) newErrors.description = 'Description is required';
    if (!amount) newErrors.amount = 'Amount is required';
    if (amount && isNaN(amount)) newErrors.amount = 'Amount must be a number';
    if (!category) newErrors.category = 'Category is required';
    if (!date) newErrors.date = 'Date is required';
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit({
      description,
      amount: parseFloat(amount),
      category,
      type,
      date,
    });

    // Reset form
    setDescription('');
    setAmount('');
    setCategory(CATEGORIES[0]);
    setType('expense');
    setDate(new Date().toISOString().substr(0, 10));
    setErrors({});
  }

  return (
    <div className="card max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup label="Description" error={errors.description}>
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className={`form-control ${errors.description ? 'border-danger' : ''}`}
            placeholder="Enter description"
          />
        </FormGroup>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormGroup label="Amount" error={errors.amount}>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary">$</span>
              <input
                type="number"
                step="0.01"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                className={`form-control pl-7 ${errors.amount ? 'border-danger' : ''}`}
                placeholder="0.00"
              />
            </div>
          </FormGroup>

          <FormGroup label="Type">
            <select
              value={type}
              onChange={e => setType(e.target.value)}
              className="form-control"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </FormGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormGroup label="Category" error={errors.category}>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className={`form-control ${errors.category ? 'border-danger' : ''}`}
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </FormGroup>

          <FormGroup label="Date" error={errors.date}>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className={`form-control ${errors.date ? 'border-danger' : ''}`}
            />
          </FormGroup>
        </div>

        <button
          type="submit"
          className={`btn btn-primary w-full mt-6 ${
            type === 'income' ? 'bg-success hover:bg-success-dark' : ''
          }`}
        >
          {type === 'income' ? 'Add Income' : 'Add Expense'}
        </button>
      </form>
    </div>
  );
}
