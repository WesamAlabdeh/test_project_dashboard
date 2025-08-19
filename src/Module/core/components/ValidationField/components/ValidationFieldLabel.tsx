import React from 'react';

interface ValidationFieldLabelProps {
  name: string;
  label?: string;
  placeholder?: string;
  t: (key: string) => string;
}

export const ValidationFieldLabel: React.FC<ValidationFieldLabelProps> = ({
  name,
  label,
  placeholder,
  t,
}) => (
  <label htmlFor={name} className="ValidationFieldLabel">
    {t(label ?? placeholder ?? name)}
  </label>
);
