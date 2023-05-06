import React, { useState } from 'react';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className={isCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <p>{isCollapsed ? 'collapsed' : 'not collapsed'}</p>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </div>
  );
}

export default Sidebar;