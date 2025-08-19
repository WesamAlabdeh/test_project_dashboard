import AddButton from '@Module/core/design-system/AddButton';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface DataTableHeaderProp {
  title: string;
  children?: React.ReactNode;
  showAddButton?: boolean;
   PageType?:"Modal" | "Page";
}
const DataTableHeader = ({
  children,
  title,
  showAddButton = true,
  PageType="Modal"
 

}: DataTableHeaderProp) => {
  const [t] = useTranslation();
  return (
    <div className="DataTableHeader">
      <h1>{t(`${title}`)}</h1>
      <div className="DataTableHeaderRight">
        {children}
        {showAddButton && <AddButton PageType={PageType} />}
      </div>
    </div>
  );
};

export default DataTableHeader;
