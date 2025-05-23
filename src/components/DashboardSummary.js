import React from 'react';

const SummaryCard = ({ title, amount, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'income':
        return (
          <svg className="w-8 h-8 text-success" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 14l5-5 5 5H7z"/>
          </svg>
        );
      case 'expense':
        return (
          <svg className="w-8 h-8 text-danger" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5H7z"/>
          </svg>
        );
      case 'balance':
        return (
          <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="card flex-1 transform hover:scale-105 transition-transform duration-200">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-opacity-10 bg-current">
          {getIcon()}
        </div>
        <h3 className="text-lg font-semibold m-0">{title}</h3>
      </div>
      <p className={`text-2xl font-bold m-0 ${
        type === 'income' ? 'text-success' :
        type === 'expense' ? 'text-danger' :
        amount >= 0 ? 'text-success' : 'text-danger'
      }`}>
        ${Math.abs(amount).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}
      </p>
      {type === 'balance' && (
        <p className="text-secondary text-sm mt-2">
          {amount >= 0 ? 'Net Savings' : 'Net Deficit'}
        </p>
      )}
    </div>
  );
};

export default function DashboardSummary({ transactions }) {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <SummaryCard
        title="Income"
        amount={income}
        type="income"
      />
      <SummaryCard
        title="Expense"
        amount={expense}
        type="expense"
      />
      <SummaryCard
        title="Balance"
        amount={balance}
        type="balance"
      />
    </div>
  );
}
