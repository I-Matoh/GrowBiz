import React, { createContext, useReducer, useContext, useEffect } from 'react';

const TransactionStateContext = createContext();
const TransactionDispatchContext = createContext();

const initialState = {
  transactions: [],
  loading: false,
  error: null,
}; 

function transactionReducer(state, action) {
  switch (action.type) {  
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, transactions: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [...state.transactions, action.payload] };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(t => t.id !== action.payload),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function TransactionProvider({ children }) {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  // Fetch transactions on mount
  useEffect(() => {
    async function fetchTransactions() {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const res = await fetch('/api/transactions');
        const data = await res.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message });
      }
    }
    fetchTransactions();
  }, []);    

  return (
    <TransactionStateContext.Provider value={state}>
      <TransactionDispatchContext.Provider value={dispatch}>
        {children}
      </TransactionDispatchContext.Provider>
    </TransactionStateContext.Provider>
  );
}

export function useTransactionState() {
  const context = useContext(TransactionStateContext);
  if (context === undefined) {
    throw new Error('useTransactionState must be used within a TransactionProvider');
  }
  return context;
}

export function useTransactionDispatch() {
  const context = useContext(TransactionDispatchContext);
  if (context === undefined) {
    throw new Error('useTransactionDispatch must be used within a TransactionProvider');
  }
  return context;
}
