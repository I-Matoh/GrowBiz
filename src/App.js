import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TransactionProvider } from './store/transactionStore';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import AddTransaction from './pages/AddTransaction';
import History from './pages/History';
import Reports from './pages/Reports';

export default function App() {
  return (
    <TransactionProvider>
      <Router>
        <NavBar />
        <div style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddTransaction />} />
            <Route path="/history" element={<History />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </Router>
    </TransactionProvider>
  );
}
