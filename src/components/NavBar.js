import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-dark shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
            </svg>
            <span className="text-light font-semibold text-lg">GrowBiz</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" active={isActive("/")}>Dashboard</NavLink>
            <NavLink to="/add" active={isActive("/add")}>Add Transaction</NavLink>
            <NavLink to="/history" active={isActive("/history")}>History</NavLink>
            <NavLink to="/reports" active={isActive("/reports")}>Reports</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-light hover:bg-primary rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2">
            <MobileNavLink to="/" active={isActive("/")} onClick={() => setIsMenuOpen(false)}>
              Dashboard
            </MobileNavLink>
            <MobileNavLink to="/add" active={isActive("/add")} onClick={() => setIsMenuOpen(false)}>
              Add Transaction
            </MobileNavLink>
            <MobileNavLink to="/history" active={isActive("/history")} onClick={() => setIsMenuOpen(false)}>
              History
            </MobileNavLink>
            <MobileNavLink to="/reports" active={isActive("/reports")} onClick={() => setIsMenuOpen(false)}>
              Reports
            </MobileNavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

const NavLink = ({ to, children, active }) => (
  <Link
    to={to}
    className={`text-light hover:text-primary transition-colors ${
      active ? 'font-semibold text-primary' : 'font-medium'
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, active, onClick }) => (
  <Link
    to={to}
    className={`block py-2 px-4 text-light hover:bg-primary hover:bg-opacity-10 transition-colors ${
      active ? 'font-semibold text-primary' : 'font-medium'
    }`}
    onClick={onClick}
  >    
    {children}
  </Link>
);
