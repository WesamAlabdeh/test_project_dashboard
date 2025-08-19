import {
  SideBarRouteType,
  BaseRouteType,
  ParentRouteType,
} from '../../types/route';
import { useTranslation } from 'react-i18next';
import { useState, FC } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface MenuItemProps {
  item: SideBarRouteType;
}

const isBaseRouteType = (item: SideBarRouteType): item is BaseRouteType => {
  return (item as BaseRouteType).path !== undefined;
};

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  const [t] = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleNavigate = () => {
    if (isBaseRouteType(item) && item.path) {
      navigate(item.path);
    }
  };
  const hasChildren = (item as ParentRouteType).children !== undefined;

  const isActive =
    isBaseRouteType(item) &&
    window.location.pathname.split('/')[1] === (item.path ?? '').slice(1);

  return (
    <>
      <div
        onClick={hasChildren ? handleToggle : handleNavigate}
        className={`MenuItem ${isActive ? 'active' : ''}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && hasChildren) {
            handleToggle();
          }
        }}
      >
        {item.icon && <i>{item.icon}</i>}
        <span>{t(item.name)}</span>

        {hasChildren && (
          <i className="MenuItemDropDown">
            {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </i>
        )}
      </div>
      {hasChildren && isOpen && (
        <div className="MenuItemChildren">
          {(item as ParentRouteType).children.map((childItem, index) => (
            <MenuItem key={index} item={childItem} />
          ))}
        </div>
      )}
    </>
  );
};

export default MenuItem;
