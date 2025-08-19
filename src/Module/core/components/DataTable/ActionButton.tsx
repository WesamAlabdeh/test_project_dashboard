import React from 'react';
import { Tooltip } from 'antd';
import {RiEyeFill } from 'react-icons/ri';
import { useModalState } from '@Module/core/states/ModalState';
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
  import {useNavigate} from 'react-router-dom'
import { MdOutlineEdit } from 'react-icons/md';
import { useGlobalState } from '@Module/core/states/GlobalState';
type ButtonType = 'delete' | 'edit' | 'show';
enum ButtonEnum {
  DELETE = 'delete',
  SHOW = 'show',
  EDIT = 'edit',
}
export interface ActionButtonProps {
  action?: () => void;
  type?: ButtonType;
  record:{[key: string]: any}
  PageType?:"Modal" | "Page"
  navigateFor?:"Add" | "Edit"
}

const ActionButton: React.FC<ActionButtonProps> = ({ action,record, type="edit",PageType="Modal" ,navigateFor}) => {
  let icon;
  let title;
  let color;
  const { globalState } = useGlobalState();
  const { primaryColor } = globalState;
  switch (type) {
    case ButtonEnum.DELETE:
      color = 'red';
      icon = <MdOutlineEdit size={22} style={{ color: color }} />;
      title = 'Delete';
      break;
    case ButtonEnum.EDIT:
      color = primaryColor;
      icon = <MdOutlineEdit size={22} style={{ color: color }} />;
      title = 'Edit';
      break;
    case ButtonEnum.SHOW:
      color = 'green';
      icon = <RiEyeFill size={22} style={{ color: color }} />;
      title = 'Show';
      break;
    default:
  }
  const { setIsOpenEditModel } = useModalState((state) => state);
  const navigate = useNavigate();
  const { setObjectToEdit } = useObjectToEdit();
  
  const handleAction = ()=>{
    setObjectToEdit(record);
    if(action){
      action();
    }
    if(PageType == "Modal"){
      setIsOpenEditModel();
    } 
    if(navigateFor){
      if (navigateFor == "Add"){
        navigate("add")
      }else if(navigateFor == "Edit"){
        navigate(`${record?.id}`)
      }
    }
  }
  return (
    <Tooltip
      placement="top"
      title={title}
      color={type === 'delete' ? 'red' : undefined}
    >
      <span onClick={handleAction} style={{ cursor: 'pointer' }}>
        {icon}
      </span>
    </Tooltip>
  );
};

export default ActionButton;
