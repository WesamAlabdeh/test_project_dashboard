import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import ProtectedRoute from './ProtectedRoute';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProtectedRoute>
      <div className="Layout">
          <NavBar />
        <main className={`Layout_Body`}>
        <SideBar />
          <div className="Layout_Children">{children}</div>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default Layout;
