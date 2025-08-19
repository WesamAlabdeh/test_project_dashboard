import React, { ReactNode } from 'react';

interface ActionWrapperProps {
  children: ReactNode;
  index?: number;
}

const ActionWrapper: React.FC<ActionWrapperProps> = ({ children, index }) => {
  const className = index
    ? (index + 1) % 2 === 0
      ? 'even-row'
      : 'odd-row'
    : '';
  return <div className={`ActionWrapper ${className}`}>{children}</div>;
};

export default ActionWrapper;
