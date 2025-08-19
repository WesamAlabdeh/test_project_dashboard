import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ToastifyProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}

export default ToastifyProvider;
