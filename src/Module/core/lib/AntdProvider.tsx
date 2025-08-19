import { ConfigProvider } from 'antd';
import { useGlobalState } from '../states/GlobalState';

function AntdProvider({ children }: { children: React.ReactNode }) {
  const { globalState } = useGlobalState();
  const { bgColor, primaryColor, textColor, placeholderColor } = globalState;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor,
          colorBgContainer: bgColor,
          colorText: textColor,
          colorPrimaryActive: primaryColor,
          colorTextPlaceholder: placeholderColor,
          colorBgBase: bgColor,
          colorBorder: textColor,
        },
        components: {
          Table: {
            headerBg: bgColor,
            headerColor: primaryColor,
          },
          Select: {
            optionSelectedBg: primaryColor,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntdProvider;
