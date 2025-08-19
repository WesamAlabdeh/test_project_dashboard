import { Dropdown, type MenuProps } from 'antd';
import useAuthState from '../../states/AuthState';
import { useTranslation } from 'react-i18next';
const ProfileMenu = () => {
  const [t] = useTranslation();

  const { logout } = useAuthState();
  const handleClick = () => {
    logout();
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <div onClick={handleClick}>{t('Log Out')}</div>,
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomLeft">
      <div className="User_Pro">
        <img
          className="UNK_User"
          src="/src/assets/core/unknownUser.webp"
          alt=""
          width="40"
          height="40"
        />
      </div>
    </Dropdown>
  );
};

export default ProfileMenu;
