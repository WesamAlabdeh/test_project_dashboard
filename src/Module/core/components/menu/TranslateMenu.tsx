import React from 'react';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import {
  languageOptions,
  useChangeLanguage,
} from '../../hooks/useChangeLanguage';
import { useTranslation } from 'react-i18next';

export default function TranslateMenu() {
  const { changeLanguage, currentLanguage } = useChangeLanguage();

  const handleLanguageChange = (newLanguage: string) => {
    console.log(newLanguage);

    changeLanguage(newLanguage);
  };
  const [t] = useTranslation();
  const items: MenuProps['items'] = languageOptions.map(
    (option: any, index: number) => ({
      key: index,
      label: (
        <div
          className="translate-menu-dropdown-link"
          onClick={() => handleLanguageChange(option.code)}
        >
          <img alt="" src={option.icon} width={20} height={20} />
          {t(option.label)}
        </div>
      ),
    }),
  );

  return (
    <div className="translate-menu">
      <Dropdown
        className="translate-menu-dropdown"
        menu={{ items }}
        placement="bottomLeft"
      >
        <button
          className="translate-menu-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          {languageOptions.map((option: any, index: number) => {
            return option.code === currentLanguage ? (
              <React.Fragment key={index}>
                <img alt="" src={option.icon} width={20} height={20} />{' '}
                {t(option.label)}
              </React.Fragment>
            ) : null;
          })}
        </button>
      </Dropdown>
    </div>
  );
}
