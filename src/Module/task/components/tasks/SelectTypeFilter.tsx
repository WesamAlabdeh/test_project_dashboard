import { Select } from 'antd';
import React from 'react';

const SelectTypeFilter = React.memo(
  ({ setType, type ,options}: { type: any; setType: React.Dispatch<React.SetStateAction<any>>,options:any[] }) => {
    const handleChange = (value: any) => {
      console.log(value);
      setType(value);
    };

    return (
      <Select
        onChange={handleChange}
        style={{ width: "140px" ,marginBottom:"10px" }}
        value={type}
        options={options}
        fieldNames={{value:"id",label:"name"}}
        allowClear
        placeholder={"select type"}
      />
    );
  },
  (prevProps, nextProps) => {
    // Only re-render if `type` has changed
    return prevProps.type === nextProps.type;
  }
);

export default SelectTypeFilter;
