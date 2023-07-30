import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/hero-section">Hero Section</Link>
        </li>
        <li>
          <Link to="/contents-section">Contents Section</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
