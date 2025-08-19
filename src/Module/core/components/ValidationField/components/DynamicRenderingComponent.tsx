import { useFormikContext } from 'formik';
import React from 'react';

interface DynamicRenderingProps {
  fieldName: string;
  children: React.ReactNode; // Children components to render alongside dynamic items
}

const DynamicRenderingComponent: React.FC<DynamicRenderingProps> = ({
  fieldName,
  children,
}) => {
  const { values } = useFormikContext<any>();

  const items = (values[fieldName] as any[]) || [];

  return (
    <>
      {items.map((_item: any, index: number) => (
        <React.Fragment key={index}>
          {/* Pass index directly into child components */}
          {React.Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement<any>, {
              childIndex: index,
            }),
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default DynamicRenderingComponent;
