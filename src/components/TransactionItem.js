import React from 'react';

const CategoryIcon = ({ category }) => {
  const getIcon = () => {
    switch (category.toLowerCase()) {
      case 'food':
        return (
          <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
        );
      case 'transport':
        return (
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
        );
      case 'shopping':
        return (
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
        );
      case 'entertainment':
        return (
          <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"/>
        );
      case 'utilities':
        return (
          <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
        );
      default:
        return (
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        );
    }
  };

  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      {getIcon()}
    </svg>
  );
};

export default function TransactionItem({ transaction, onDelete }) {
  const { id, description, amount, category, date, type } = transaction;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className={`card mb-3 transform transition-all duration-200 hover:scale-[1.02] hover:shadow-md ${
      type === 'income' ? 'border-l-4 border-success' : 'border-l-4 border-danger'
    }`}>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-lg ${
            type === 'income' ? 'bg-success' : 'bg-danger'
          } bg-opacity-10`}>
            <CategoryIcon category={category} />
          </div>
          <div>
            <h3 className="font-medium mb-1">{description}</h3>
            <div className="flex items-center gap-2 text-secondary text-sm">
              <span>{category}</span>
              <span>•</span>
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className={`text-lg font-semibold ${
            type === 'income' ? 'text-success' : 'text-danger'
          }`}>
            {type === 'income' ? '+' : '-'}${amount.toFixed(2)}
          </span>
          <button
            onClick={() => onDelete(id)}
            className="p-2 text-secondary hover:text-danger hover:bg-danger hover:bg-opacity-10 rounded-full transition-colors"
            title="Delete transaction"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
