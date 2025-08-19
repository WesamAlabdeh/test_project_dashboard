import React from 'react';

interface ValidationFieldLabelProps {
  name: string;
  label?: string;
  t: (key: string) => string;
}

export const ValidationFieldLabel: React.FC<ValidationFieldLabelProps> = ({
  name,
  label,
  t,
}) =>{  
   return  (
    <label htmlFor={name} className="ValidationFieldLabel">
      {t(label ?? name)}
    </label>
  );
}
