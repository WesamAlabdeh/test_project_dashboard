import React from 'react';
import { IconType, IconBaseProps } from 'react-icons';

interface IconButtonProps extends IconBaseProps {
  icon: IconType;
  onClick: () => void;
  disabled?: boolean;
  rotate?: number;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
  disabled,
  rotate,
  ...props
}) => (
  <button
    onClick={disabled ? undefined : onClick}
    style={{
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: 'none',
      border: 'none',
      padding: 0,
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
    }}
    disabled={disabled}
  >
    <Icon {...props} size={24} color="blue" />
  </button>
);
