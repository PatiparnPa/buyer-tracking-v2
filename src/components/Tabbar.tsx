import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TabBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="tab-bar">
      <Link to="/" className={`tab-item ${location.pathname === '/' ? 'active' : ''}`}>
        Home
      </Link>
      <Link to="/order" className={`tab-item ${location.pathname === '/order' ? 'active' : ''}`}>
        My Order
      </Link>
      <Link to="/profile" className={`tab-item ${location.pathname === '/profile' ? 'active' : ''}`}>
        My Profile
      </Link>
    </div>
  );
};

export default TabBar;